import React from 'react';
import s from './project.module.scss'

const Project = ({title,aboutProject,style,href})=>{
    const divStyle = {
        backgroundImage: 'url(' + style + ')',
    };

    return<div>

        <div className={s.work}>
            <div className={s.photoProject} style={divStyle}>
                <div className={s.showProject}>
                    <a  href={href}>Show</a>
                </div>

            </div>

            <div className={s.infoProject}>
                <div className={s.titleProject}>
                    {title}
                </div>
                <div className={s.textProject}>
                    <p>{aboutProject}</p>

                </div>
            </div>

        </div>

    </div>
}
export default Project;
