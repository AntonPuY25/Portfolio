import s from './myWorks.module.scss'
import Project from "./project";
import socialNetworkImg from '../img/socilaNetwork.jpg'
import KinoPoisk from '../img/KinoPoisk.jpg'
import Counter from '../img/Counter.jpg'
import CurrencyConverter from '../img/Currency-Converter.jpg'
import  HomeWorks from '../img/HomeWorks.jpg'
import todolistImg from '../img/todolist.jpg'
import Fade from 'react-reveal/Fade';

function MyWorks() {
    return (
        <div className={s.myWorks} id='works' >
                <div className={s.works}>

                        <Fade left>
                            <div className={s.title}>
                        <h3 >Projects</h3>
                            </div>

                        </Fade>
                    <div  className={s.allMyWorks}>

                        <div>
                            <div>
                                <Project title={'Social Network'} aboutProject={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                                         style={socialNetworkImg} href={"https://antonpuy25.github.io/NewSocialNetwork/"}/>

                            </div>

                            <div>
                                <Project title={'Todolist'} aboutProject={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                         style={todolistImg} href={"https://antonpuy25.github.io/ToDoList/"}/>

                            </div>

                        </div>

                        <div>
                            <div>
                                <Project title={'KinoPoisk'} aboutProject={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                                         style={KinoPoisk} href={"https://antonpuy25.github.io/SearchMovies/"}/>

                            </div>

                            <div >
                                <Project title={'Currency-Converter'} aboutProject={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                         style={CurrencyConverter} href={"https://antonpuy25.github.io/Currency-Converter/"}/>

                            </div>

                        </div>
                        <div>
                            <div>
                                <Project title={'Home Works'} aboutProject={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                                         style={HomeWorks} href={"https://antonpuy25.github.io/HomeWorks/"}/>

                            </div>

                            <div>
                                <Project title={'Counter'} aboutProject={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                         style={Counter} href={"https://antonpuy25.github.io/Counter/"}/>

                            </div>

                        </div>
                    </div>
                </div>
        </div>
    );
}

export default MyWorks;
