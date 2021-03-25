import s from './nav.module.scss';
import logo from '../../img/portfolio.png'
import MenuPopupState from "./navMobile";

export const functest = (event) => {
    event.preventDefault();

    document.querySelector("" + event.currentTarget.hash).scrollIntoView({
        behavior: "smooth",
        block: 'start'
    })
}

function Nav() {

    return (
        <div className={s.navContainer}>
            <div className={s.logo}>
                <img src={logo} alt={"logo"}/>
            </div>
            <div className={s.nav}>
                <a href='#home'>Home</a>
                <a href='#about' onClick={functest}>About</a>
                <a href='#skills' onClick={functest}>Skills</a>
                <a href='#works' onClick={functest}>Projects</a>
                <a href='#footer' onClick={functest}>Contact</a>
            </div>
            <div className={s.mobileMenu}>
                <MenuPopupState/>

            </div>
        </div>

    );
}

export default Nav;
