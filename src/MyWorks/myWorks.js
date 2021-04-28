import s from './myWorks.module.scss'
import Project from "./project";
import socialNetworkImg from '../img/socilaNetwork.jpg'
import KinoPoisk from '../img/KinoPoisk.jpg'
import Flickr from '../img/Flickr.jpg'
import Counter from '../img/Counter.jpg'
import CurrencyConverter from '../img/Currency-Converter.jpg'
import HomeWorks from '../img/HomeWorks.jpg'
import todolistImg from '../img/todolist.jpg'
import Fade from 'react-reveal/Fade';

function MyWorks() {
    return (
        <div className={s.myWorks} id='works'>
            <div className={s.works}>

                <Fade left>
                    <div className={s.title}>
                        <h3>Projects</h3>
                    </div>

                </Fade>
                <div className={s.allMyWorks}>

                    <div>
                        <div>
                            <Project title={'Social Network'}
                                     aboutProject={'This is a working social network with a working database of users. Where the messenger on WebSockets is implemented:' +

                                  ' React,Redux,Thunk,TypeScript,Axios,WebSocket,Hooks(useState,useSelector,useDispatch,useEffect,useMemo,useCallback)' +
                                     ',TypeScript,Redux-Form,Formik'}
                                     style={socialNetworkImg} href={"https://antonpuy25.github.io/NewSocialNetwork/"}/>

                        </div>

                        <div>
                            <Project title={'Todolist'}
                                     aboutProject={'Web application for adding tasks.' +
                                     ' React,Redux(Toolkit),Thunk,TypeScript,Axios,Hooks (useState,useSelector,useDispatch,useEffect,useMemo)TypeScript,Formik\''}
                                     style={todolistImg} href={"https://antonpuy25.github.io/ToDoList/"}/>

                        </div>

                    </div>

                    <div>

                        <div>
                            <Project title={'Photo Search'}
                                     aboutProject={'Photo search engine using API Flickr. Also save favorite photos to your bookmarks.'}
                                     style={Flickr} href={"https://antonpuy25.github.io/Flickr/"}/>

                        </div>

                        <div>
                            <Project title={'Currency-Converter'}
                                     aboutProject={'Currency Conversion Application'}
                                     style={CurrencyConverter}
                                     href={"https://antonpuy25.github.io/Currency-Converter/"}/>

                        </div>

                    </div>
                    <div>
                        <div>
                            <Project title={'Home Works'}
                                     aboutProject={"Here are 16 Homework assignments that were done in training at the IT Incubator." +
                                     "Local-Storage,Api,Material-Ui,Redux,Browser-API"}

                                     style={HomeWorks} href={"https://antonpuy25.github.io/HomeWorks/"}/>

                        </div>

                        <div>
                            <Project title={'Counter'}
                                     aboutProject={''}
                                     style={Counter} href={"https://antonpuy25.github.io/Counter/"}/>

                        </div>
                        <div>
                            <Project title={'KinoPoisk'}
                                     aboutProject={'Unfortunately, requests through github-phages do not work. Well, you can look at the code))'}
                                     style={KinoPoisk} href={"https://antonpuy25.github.io/SearchMovies/"}/>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
