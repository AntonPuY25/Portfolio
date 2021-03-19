import s from "./skill.module.scss";
function Skill({nameSkill,aboutSkill}) {
  return  <div className={s.skill}>
        <h4>{nameSkill}</h4>
        <p>{aboutSkill}</p>
    </div>

}
export default Skill