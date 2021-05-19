import s from './footer.module.scss'
import git from "../img/icons/git.png";
import linkedin from '../img/icons/linkedin.png'
import facebook from '../img/icons/facebook.png'
import mail from '../img/icons/mail.png'
import codeWars from "../img/icons/codewars.png";


function Footer() {
    return (
        <div className={s.footer} >
            <div className={s.headerIcons}>
                <a href={'https://github.com/AntonPuY25'}><img src={git} alt={'Git'}/></a>
                <a href={'https://www.facebook.com/profile.php?id=100028411452654'}><img src={facebook} alt={'Facebook'}/></a>
                <a href={'https://t.me/PuY27'}><img src={mail} alt={'Mail'}/></a>
                <a href={'https://www.linkedin.com/in/anton-kliaschonak-395896202/'}><img src={linkedin} alt={'linkedin'}/></a>
                <a href={'https://www.codewars.com/users/PuY25'}><img src={codeWars} alt={'CodeWars'}/></a>

            </div>
            <div className={s.footerInfo}>
                Copyright © 2021 centurycoding. All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;
