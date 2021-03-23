import s from './nav.module.scss';
import logo from '../../img/portfolio.png'
import MenuPopupState from "./navMobile";
function Nav() {
    return (
        <div className={s.navContainer}>
            <div className={s.logo} >
                <img src={logo} alt={"logo"}/>
            </div>
            <div className={s.nav}>
                <a href='/23r'>Home</a>
                <a href='/23r'>About</a>
                <a href='/23r'>Skills</a>
                <a href='/23r'>Projects</a>
                <a href='/23r'>Contact</a>
            </div>
            <div className={s.mobileMenu}>
                <MenuPopupState/>

            </div>
        </div>

    );
}

export default Nav;
