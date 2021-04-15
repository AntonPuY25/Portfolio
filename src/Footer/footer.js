import s from './footer.module.scss'
import facebook from "../img/icons/facebook.png";
import mail from "../img/icons/mail.png";
import git from "../img/icons/git.png";
import vk from "../img/icons/vk.png";
import linkedin from '../img/icons/linkedin.png'


function Footer() {
    return (
        <div className={s.footer} >
            <div className={s.headerIcons}>
                <a href={'/#'}><img src={facebook} alt={'facebook'}/></a>
                <a href={'/#'}><img src={mail} alt={'mail'}/></a>
                <a href={'/#'}><img src={git} alt={'Git'}/></a>
                <a href={'/#'}><img src={vk} alt={'vk'}/></a>
                <a href={'/#'}><img src={linkedin} alt={'linkedin'}/></a>
            </div>
            <div className={s.footerInfo}>
                Copyright © 2021 centurycoding. All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;
