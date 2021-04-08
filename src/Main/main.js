import s from './main.module.scss'
import ava from '../img/ava.jpg'
import {Button} from "@material-ui/core";
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'

function Main() {

    return (
        <div className={s.main} id='about'>

            <div className={s.aboutMe}>

                <Fade left>
                    About me
                </Fade>


            </div>

            <div className={s.containerAboutMe}>
                <Tilt className="Tilt" options={{max: 25}}>
                    <div className={s.myPhoto}>
                        <img src={ava} alt={'MyPhoto'}/>
                    </div>
                </Tilt>

                <div className={s.aboutMeInfo}>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.
                        Massa tempor nec feugiat nisl pretium fusce id velit ut. Neque vitae tempus quam pellentesque
                        nec nam. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. </b>
                    <br/> <br/>
                    Amet mattis vulputate enim nulla. Porttitor leo a diam sollicitudin tempor id. Scelerisque viverra
                    mauris in aliquam sem. Mattis aliquam faucibus purus in massa tempor nec. Quisque id diam vel quam
                    elementum pulvinar etiam non. Non curabitur gravida arcu ac tortor. Tincidunt praesent semper
                    feugiat nibh sed pulvinar proin gravida.
                    <div className={s.buttonAboutMe}>
                        <Fade right>
                            <Button variant="contained" color="primary">
                                Download Cv
                            </Button>

                        </Fade>


                    </div>
                </div>

            </div>


        </div>
    );
}

export default Main;