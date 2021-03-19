import s from "./skill.module.scss";
import CircularStatic from "./progressBar/propgressBar";
function Skill({nameSkill,aboutSkill}) {
  return  <div className={s.skill}>
      <div className={s.levelSkill}>
          <CircularStatic level={60}/>

      </div>
        <h4>{nameSkill}</h4>
        <p>{aboutSkill}</p>
    </div>

}
export default Skill