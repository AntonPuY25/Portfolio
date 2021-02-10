import s from './myWorks.module.css'

function MyWorks() {
    return (
        <div className={s.myWorks}>
            <div className={s.myWorksContainer}>
                <div className={s.works}>
                    <h3>My Works</h3>
                    <div className={s.allMyWorks}>
                        <div className={s.work}>
                            <div className={s.photoProject}>
                                <img alt={'Photo Project'} src={
                                    ('https://arte1.ru/images/detailed/4/23608.jpg')}/>
                                <div className={s.showProject}>
                                    <a href={"#"}>Show</a>
                                </div>

                            </div>


                            <div className={s.infoProject}>
                                <div className={s.titleProject}>
                                    Project One
                                </div>
                                <div className={s.textProject}>
                                    <p>About Project</p>

                                </div>
                            </div>

                        </div>

                        <div className={s.work}>
                            <div className={s.photoProject}>
                                <img alt={'Photo Project'} src={
                                    ('https://arte1.ru/images/detailed/4/23608.jpg')}/>
                                <div className={s.showProject}>
                                    <a href={"#"}>Show</a>
                                </div>

                            </div>


                            <div className={s.infoProject}>
                                <div className={s.titleProject}>
                                    Project Two
                                </div>
                                <div className={s.textProject}>
                                    <p>About Project</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
