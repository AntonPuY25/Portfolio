import s from './nav.module.css'
function Nav() {
    return (
        <div className={s.nav}>
            <a href='/23r'>Главная</a>
            <a href='/23r'>Скилы</a>
            <a href='/23r'>Работы</a>
            <a href='/23r'>Контакты</a>
        </div>
    );
}

export default Nav;
