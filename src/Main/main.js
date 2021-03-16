import s from './main.module.scss'
import ava from '../img/ava.jpg'
function Main() {
    const avaPhoto = {
        backgroundImage: 'url(' + ava + ')',
    };
    return (
        <div className={s.main}>
         <div className={s.mainContainer}>
                <div className={s.aboutMe}>
                    <span>Hi There</span>
                    <h1>I am Anton</h1>
                    <p>I am Fronted-Developer.</p>
                </div>
                <div className={s.myPhoto} style={avaPhoto} >

                </div>
         </div>
        </div>
    );
}

export default Main;
