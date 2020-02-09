import React from 'react';
import FileNavigation from '../modules/File-Navigation';
import Tabs from '../modules/Tabs';
// import Editor from '../modules/Editor';
import Alert from '../modules/Alert';
import Http from '../modules/Http';

import './IDE-Router.scss';

import dummyProjectData from '../dummy-data/project.json';

import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";


const SHORT_CUT_ITEM = {
    CLOSE: "close-file-or-editor",
    SAVE: "save-file-and-item",
    CREATE: "create-file-or-item"
}

const shortcuts = [
    { ctrlKey: true, altKey: false, shiftKey: false, key: 'e', eventName: SHORT_CUT_ITEM.CLOSE},
    { ctrlKey: true, altKey: false, shiftKey: false,key: 's', eventName: SHORT_CUT_ITEM.SAVE},
    { ctrlKey: true, altKey: false, shiftKey: false,key: 'm', eventName: SHORT_CUT_ITEM.CREATE}
]

function CreateNewFileBody({project, onChangeName}) {
    const [name, setName] = React.useState("");
    function Directory({files}) {
        const directory = files.map((file, tabSize)=> {
            if(!file.isDirectory) { return; }

            return (
                <>
                    <p style={{"paddingLeft": tabSize*15}}>{file.name}</p>
                    <Directory files={file.files}></Directory>
                </>
            )
        });
        return directory;
    }

    return (
        <>
            <div className="save-modal">
                <div className="directory-structure">
                    <p style={{"paddingLeft": 5}}>/</p>
                    <Directory files={project.files} tabSize={0}/>
                </div>
                <div className="input-form">
                    <label htmlFor="save-modal-name">이름</label>
                    <input id="save-modal-name" type="text" value={name} 
                        onChange={(e)=>{onChangeName(e.target.value); setName(e.target.value)}}/>
                </div>
            </div>
        </>
    )
}

class IDERouter extends React.Component{
    state = { 
        project: { files: [] },
        openFiles: [],
        selectFile: null,
    }
    constructor(props) {
        super(props);
        this.shortcutHandler = this.shortcutHandler.bind(this);
    }

    shortcutHandler(event) {
        const item = shortcuts.find(e => ( e.key === event.key && e.altKey === event.altKey && e.ctrlKey === event.ctrlKey && e.shiftKey === event.shiftKey ));
        if(!item) return;

        event.preventDefault();
        switch(item.eventName) {
            case SHORT_CUT_ITEM.CLOSE:
                this.onCloseFile(this.state.selectFile);
                break;
            case SHORT_CUT_ITEM.SAVE:
                if(this.state.selectFile) this.onSaveFile(this.state.selectFile);
                break;
            case SHORT_CUT_ITEM.CREATE:
                this.onCreateNewFile();
                break;
            default: break;
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this.shortcutHandler);

        Http.get({path: `/projects/${this.props.match.params.id}`}).then(({ data })=>{
            this.setState({ project: data });
        }).catch(()=>{});
    }
    
    componentWillUnmount() {
        window.removeEventListener("keydown", this.shortcutHandler);
    }

    onChangeText(text) {
        const { openFiles, selectFile } = this.state;
        if(!selectFile) { 
            this.onCreateNewFile(text);
            return; 
        }
        const idx = openFiles.indexOf(selectFile);
        openFiles[idx].data = text;
        openFiles[idx].modify = true;

        this.setState({openFiles});
    }

    createFileIdx = 1;
    onCreateNewFile(text="") {
        const file = {
            name: `undefined-${this.createFileIdx++}`,
            modify: true,
            ext: "",
            data : text
        }
        this.onClickFile(file);
    }

    onClickFile(file) {
        const { openFiles } = this.state;
        const idx = openFiles.indexOf(file);
        if(idx !== -1) { // 파일이 존재 안했을 경우
            this.setState({selectFile: file})
        } else {
            openFiles.push(file);
            this.setState({openFiles, selectFile: file});
        }
    }

    onCloseFile(file) {
        const { openFiles, selectFile } = this.state;
        const idx = openFiles.indexOf(file);
        if(idx === -1) return;
        
        const setNextFile = () => {
            openFiles.splice(idx, 1);
            this.setState({openFiles});
    
            if(selectFile === file) {
                let selectFile;
                if(openFiles.length === 0) { selectFile = null; }
                else if(idx === 0) { selectFile = openFiles[0]; }
                else { selectFile = openFiles[idx - 1] };
    
                this.setState({selectFile});
            }
        }
    
        if(file.modify) {
            Alert({
                title: "저장되지 않았습니다.", 
                text: "저장하시겠습니까?", 
                btns: [
                    {text: "예", onClick: ()=>{
                        this.onSaveFile(file, setNextFile);
                    }},
                    {text: "아니오", onClick: ()=>{
                        setNextFile();
                    }},
                    {text: "취소", onClick: ()=>{}},
                ]
            });
        } else {
            setNextFile();
        }
    }

    onSaveNewFile(file) {
        const { selectFile, project } = this.state;

        selectFile.name = file.name;
        selectFile.modify = false;

        const newFile = {
            fullpath: file.name,
            name: file.name,
            data: file.data,
        };
        
        project.files.push(newFile);
        this.setState({project, selectFile});
    }

    onSaveFile(file, cb=()=>{}) {
        const {project} = this.state;
        function _find(prev, curr) {
            if(curr.fullpath === file.fullpath) return curr;
            if(curr.files) {
                const fileInChildren = curr.files.reduce(_find, undefined);
                if(fileInChildren) return fileInChildren;
            }

            return prev;
        }

        const fileOnProject = project.files.reduce(_find, undefined);
        
        if(fileOnProject) {
            fileOnProject.data = file.data;
            file.modify = false;
            this.setState({project, selectFile: file}, cb);
        } else {
            Alert({
                title: "새 파일 생성",
                text: (<CreateNewFileBody project={this.state.project} onChangeName={(name)=>{file.name = name}}></CreateNewFileBody>),
                btns: [
                    {text: "예", onClick: ()=>{
                        this.onSaveNewFile(file)
                    }},
                    {text: "아니오", onClick: ()=>{}}
                ]
            })
        }
    }

    render() {        
        return (
            <div className="IDE" tabIndex="-1">
              <header>
                <p>dgu-web-ide</p>
              </header>
              <article>
                <FileNavigation className="navigation" 
                    openFiles={this.state.openFiles} files={this.state.project.files}
                    onClick={this.onClickFile.bind(this)} onClose={this.onCloseFile.bind(this)}></FileNavigation>
                <section>
                    <div className="workspace-wrapper">
                        <Tabs className="tab" files={this.state.openFiles} selectFile={this.state.selectFile}
                            onClick={this.onClickFile.bind(this)} onClose={this.onCloseFile.bind(this)}></Tabs>
                        <AceEditor
                            width="100%"
                            height="100%"
                            fontSize={18}
                            mode={this.state.selectFile ? getMode(this.state.selectFile.ext) : ""}
                            theme="monokai"
                            onChange={this.onChangeText.bind(this)}
                            name="UNIQUE_ID_OF_DIV"
                            value={this.state.selectFile ? this.state.selectFile.data : ""}></AceEditor>
                    </div>
                    <div className="console">
                        <textarea className="console" readOnly={true} rows={12} defaultValue={"원을 달라로 바꿉니다. 원을 입력하세요 >> 10000\n변환결과 : 9.90099달러"}></textarea>
                    </div> 
                </section>
              </article>
              <footer>
                  <p></p>
                  <p>Developed by PLASS LAB</p>
              </footer>
            </div>
        );
    }
}

function getMode(ext) {
    switch(ext) {
        case "c": case "cpp":
            return "c_cpp";
        default:
            return ext;
    }
}

export default IDERouter;
