import s from './skills.module.scss'
import Skill from "./skill";

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.skillsContainer}>
                <div className={s.mySkills}>
                    <h3>My skills</h3>
                    <div className={s.allSkills}>
                            <Skill nameSkill={'HTML'} aboutSkill={'About HTML'}/>
                            <Skill nameSkill={'CSS'} aboutSkill={"About CSCSS langCSS"}/>
                            <Skill nameSkill={'JS'} aboutSkill={"About JS language"}/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
