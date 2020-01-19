import React from 'react';
import FileNavigation from '../modules/File-Navigation';
import Tabs from '../modules/Tabs';
import Editor from '../modules/Editor';
import Alert from '../modules/Alert';
import './IDE-Router.scss';

import dummyProjectData from '../dummy-data/project.json';


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

function CreateNewFileBody({onChangeName}) {
    const [name, setName] = React.useState("");
    return (
        <>
            <div>
                <label htmlFor="save-modal-name">이름</label>
                <input id="save-modal-name" type="text" value={name} 
                    onChange={(e)=>{onChangeName(e.target.value); setName(e.target.value)}}/>
            </div>
        </>
    )
}

class IDERouter extends React.Component{
    state = { 
        project: {},
        openFiles: [],
        selectFile: null,
        loading: true
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
                this.onSaveFile(this.state.selectFile);
                break;
            case SHORT_CUT_ITEM.CREATE:
                this.onCreateNewFile();
                break;
            default: break;
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this.shortcutHandler);

        setTimeout(()=>{
            this.setState({
                project: dummyProjectData,
                loading: false
            });
        }, 500);
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
                text: (<CreateNewFileBody onChangeName={(name)=>{file.name = name}}></CreateNewFileBody>),
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
        if(this.state.loading) { return <p>로딩 중입니다...</p> };
        
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
                        <Editor className="editor" text={this.state.selectFile ? this.state.selectFile.data : ""}
                            onChange={this.onChangeText.bind(this)}></Editor>
                    </div>
                    <div className="console">
                        <textarea className="console" readOnly={true} rows={12} defaultValue="콘솔창입니다."></textarea>
                    </div> 
                </section>
              </article>
              <footer>
                  <p>Developed by PLASS LAB</p>
                  <p>Ln: Col: </p>
              </footer>
            </div>
        );
    }
}

export default IDERouter;
