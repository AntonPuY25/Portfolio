import s from './nav.module.scss';
import logo from '../../img/portfolio.png'
import MenuPopupState from "./navMobile";
import { Link } from "react-scroll";


function Nav({state}) {

    return (
        <div className={state?s.navContainerTwo:s.navContainer}>
            <div className={s.logo}>
                {!state&&   <img src={logo} alt={"logo"}/>}
            </div>
            <div className={s.nav}>
                <Link
                    activeClass={s.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                >Home</Link>
                <Link
                    activeClass={s.active}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                >About</Link>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                >Projects</Link>
                <Link
                    activeClass={s.active}
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                >Contact</Link>
            </div>
            <div className={s.mobileMenu}>
                <MenuPopupState/>

            </div>
        </div>

    );
}

export default Nav;
