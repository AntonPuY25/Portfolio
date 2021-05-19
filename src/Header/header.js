import s from './header.module.scss'
import Nav from "./Nav/nav"
import mail from '../img/icons/mail.png'
import linkedin from '../img/icons/linkedin.png'
import Particles from "react-particles-js";
import Zoom from 'react-reveal/Zoom';
import ReactTypingEffect from 'react-typing-effect';
import {setHeaderScrollAC} from "../Store/reducer";
import {useDispatch, useSelector} from "react-redux";
import facebook from "../img/icons/facebook.png";
import git from "../img/icons/git.png";
import codeWars from "../img/icons/codewars.png";



const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {},
            enable: true,
            value_area: 800
        }
    }
}

function Header() {
    const state = useSelector(state => state.reducer.headerScroll);
    const dispatch = useDispatch();
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 10&&window.innerWidth>1000) {
            dispatch(setHeaderScrollAC(true))
        } else {
            dispatch(setHeaderScrollAC(false))

        }
    });

    return (
        <div className={s.header} id='home'>
            <Particles className={s.particle} params={particlesOptions}/>
            <Nav state={state} />


            <div className={s.headerInfo}>
                <Zoom left>

                    <h3 className={s.hello}>Hello I'm</h3>
                </Zoom>


                <div className={s.name}>
                    <h1>
                        <ReactTypingEffect
                            text={["Anton Kliaschonak"]}
                        />
                    </h1>

                </div>

                <div className={s.headerIcons}>
                    <a href={'https://github.com/AntonPuY25'}><img src={git} alt={'Git'}/></a>
                    <a href={'https://www.facebook.com/profile.php?id=100028411452654'}><img src={facebook} alt={'Facebook'}/></a>
                    <a href={'https://t.me/PuY27'}><img src={mail} alt={'Mail'}/></a>
                    <a href={'https://www.linkedin.com/in/anton-kliaschonak-395896202/'}><img src={linkedin} alt={'linkedin'}/></a>
                    <a href={'https://www.codewars.com/users/PuY25'}><img src={codeWars} alt={'CodeWars'}/></a>


                </div>

            </div>

        </div>
    );
}

export default Header;
