import s from './myWorks.module.scss'
import Project from "./project";
import socialNetworkImg from '../img/socilaNetwork.jpg'
import todolistImg from '../img/todolist.jpg'

function MyWorks() {
    return (
        <div className={s.myWorks}>
                <div className={s.works}>
                    <div className={s.title}>
                        <h3>Projects</h3>
                    </div>
                    <div className={s.allMyWorks}>

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
                                <Project title={'KinoGo'} aboutProject={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                                         style={socialNetworkImg} href={"https://antonpuy25.github.io/NewSocialNetwork/"}/>

                            </div>

                            <div>
                                <Project title={'Todolist'} aboutProject={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                         style={todolistImg} href={"https://antonpuy25.github.io/ToDoList/"}/>

                            </div>

                        </div>
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
                    </div>
                </div>
        </div>
    );
}

export default MyWorks;
