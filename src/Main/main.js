import s from './main.module.css'
function Main() {
    return (
        <div className={s.main}>
         <div className={s.mainContainer}>
                <div className={s.aboutMe}>
                    <span>Hi There</span>
                    <h1>I am Anton</h1>
                    <p>I am Fronted-Developer.</p>
                </div>
                <div className={s.myPhoto}>

                </div>
         </div>
        </div>
    );
}

export default Main;
