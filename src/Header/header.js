import s from './header.module.scss'
import Nav from "./Nav/nav"
import facebook from '../img/icons/facebook.png'
import mail from '../img/icons/mail.png'
import git from '../img/icons/git.png'
import vk from '../img/icons/vk.png'
import linkedin from '../img/icons/linkedin.png'

function Header() {

    return (
        <div className={s.header} id='home'>

            <Nav/>

            <div className={s.headerInfo}>

                <h3 className={s.hello}>Hello I'm</h3>

                <div className={s.name}>
                    <h1>Anton Kliaschonak</h1>
                </div>
                <div className={s.headerIcons}>
                    <a href={'/#'}><img src={facebook} alt={'facebook'}/></a>
                    <a href={'/#'}><img src={mail} alt={'mail'}/></a>
                    <a href={'/#'}><img src={git} alt={'Git'}/></a>
                    <a href={'/#'}><img src={vk} alt={'vk'}/></a>
                    <a href={'/#'}><img src={linkedin} alt={'linkedin'}/></a>

                </div>

            </div>

        </div>
    );
}

export default Header;
