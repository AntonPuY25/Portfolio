import s from './skills.module.css'

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.skillsContainer}>
                <div className={s.mySkills}>
                    <h3>My skills</h3>
                    <div className={s.allSkills}>
                        <div className={s.skillOne}>
                            <h4>HTML</h4>
                            <p>About HTML language</p>
                        </div>
                        <div className={s.skillTwo}>

                            <h4>CSS</h4>
                            <p>About CSCSS langCSS
                                langCSS langCSS langCSS lang
                                langCSS langCSS langCSS lang
                                langCSS langCSS langCSS lang
                                langCSS langCSS langCSS lang
                                S language</p>
                        </div>
                        <div className={s.skillThree}>

                            <h4>JS</h4>
                            <p>About JS language</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
