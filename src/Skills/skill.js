import s from "./skill.module.scss";
import CircularStatic from "./progressBar/propgressBar";

function Skill({nameSkill, level}) {
    return <div className={s.skill}>
        <div className={s.levelSkill}><CircularStatic level={level}/></div>
        <div><h3>{nameSkill}</h3></div>
    </div>

}

export default Skill