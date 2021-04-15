import s from './main.module.scss'
import ava from '../img/ava.jpg'
import {Button} from "@material-ui/core";
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'

function Main() {

    return (
        <div className={s.main} id='about'>

            <div className={s.aboutMe}>

                <Fade left>
                    About me
                </Fade>


            </div>

            <div className={s.containerAboutMe}>
                <Tilt className="Tilt" options={{max: 25}}>
                    <div className={s.myPhoto}>
                        <img src={ava} alt={'MyPhoto'}/>
                    </div>
                </Tilt>

                <div className={s.aboutMeInfo}>
                    Front-end developer with experience
                        in creating SPA using React, Redux,
                        TS, HTML, CSS. Determined to
                        become a Full stack developer. Spend
                        my free time improving competence in
                        English, and expanding my
                        professional horizons. Self-motivated,
                        hard-working, responsible and
                        competent.


                    <div className={s.buttonAboutMe}>
                        <Fade right>
                            <Button variant="contained" color="primary">
                                <a className={'CVlink'} href="https://disk.yandex.by/i/RZ8_EHiLU7Wj-g">Download CV</a>
                            </Button>

                        </Fade>


                    </div>
                </div>

            </div>


        </div>
    );
}

export default Main;
