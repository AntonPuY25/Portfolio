import s from './skills.module.scss'
import Skill from "./skill";
import {Animated} from "react-animated-css";

function Skills() {
    return (
        <div className={s.skillsContainer} id='skills'>

            <section className="wow slideInLeft">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>  <div>
                    <h1>My Skills</h1>
                </div>  </Animated>
            </section>
            <p>No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, <br/>to open people’s eyes, to reveal the marvels around.</p>
            <div className={s.skills}>
                <Skill level={90} nameSkill={'HTML'}/>
                <Skill level={80} nameSkill={'CSS'}/>
                <Skill level={85} nameSkill={'JS'}/>
                <Skill level={70} nameSkill={'React'}/>
                <Skill level={90} nameSkill={'Redux'}/>
                <Skill level={80} nameSkill={'TypeScript'}/>


            </div>
        </div>

    );
}

export default Skills;
