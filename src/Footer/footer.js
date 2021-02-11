import s from './footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <div>Антон Клещенок</div>
                <div className={s.footerEmptyContainer}>
                    <div className={s.insideEmpty}>1</div>
                    <div className={s.insideEmpty}>2</div>
                    <div className={s.insideEmpty}>3</div>
                    <div className={s.insideEmpty}>4</div>

                </div>
                <div>Все права Защищены</div>
            </div>
        </div>
    );
}

export default Footer;
