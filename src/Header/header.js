import s from './header.module.css'
import Nav from "./Nav/nav";

function Header() {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    );
}

export default Header;
