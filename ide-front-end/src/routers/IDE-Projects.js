import React, {useState, useEffect} from 'react';

import moment from 'moment';
import './IDE-Projects.scss';
import Http from '../modules/Http';


function IDEProjects({history}) {
    const [ projects, setProjects ] = useState([]);

    useEffect(()=>{
        Http.get({ path: "/projects" }).then(({ data })=> {
            data = data.map((e)=>{
                e.createdAt = moment(e.createdAt);
                return e;
            })
            setProjects(data); 
        }).catch((err) => {

        })
    }, []);

    function clickProject(project_id) {
        history.push(`/ide/${project_id}`);
    }

    function clickMenu(idx) {
        return (event) => {
            event.stopPropagation();
        }
    }

    return (
        <div className="IDE-Project">
            <div className="container">
                <h1>프로젝트 목록</h1>
                <table className="project-list">
                    <thead>
                        <tr>
                            <td style={{width: "50px"}}></td>
                            <td style={{width: "35%"}}>프로젝트 명</td>
                            <td className="center">language</td>
                            <td className="center">created at</td>
                            <td style={{width: "50px"}}></td>
                        </tr>
                    </thead>
                    <tbody>
                    { projects.length === 0 && 
                        <tr>
                            <td colSpan="5" className="center">
                                <p>프로젝트가 존재하지 않습니다. 새로운 프로젝트를 만드시겠습니까?</p>
                            </td>
                        </tr>}
                        {projects.map((project, idx)=>(
                        <tr className="project-item" key={idx} 
                            onClick={()=> {clickProject(project.id)}}>
                            <td className="td-idx center">{idx + 1}</td>
                            <td>{project.name}</td>
                            <td className="center">{project.language}</td>
                            <td className="center">{project.createdAt.format('YYYY-MM-DD')}</td>
                            <td>
                                <div className="hamberger" 
                                    onClick={clickMenu(idx)}>
                                    <span></span><span></span><span></span>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default IDEProjects;