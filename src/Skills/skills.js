import s from './skills.module.scss'
import Skill from "./skill";

function Skills() {
    return (
        <div className={s.skillsContainer}>
            <h1>My Skills</h1>
            <div className={s.skills}>
                <div><Skill level={60} nameSkill={'HTML'}/>
                    <Skill level={60} nameSkill={'CSS'}/>
                </div>
                <div>
                    <Skill level={60} nameSkill={'JS'}/>
                    <Skill level={70} nameSkill={'React'}/>
                </div>
                <div>
                    <Skill level={70} nameSkill={'Redux'}/>
                    <Skill level={60} nameSkill={'TypeScript'}/>
                </div>

            </div>
        </div>

    );
}

export default Skills;
