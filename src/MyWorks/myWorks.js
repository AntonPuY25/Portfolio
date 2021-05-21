import s from './myWorks.module.scss'
import Project from "./project";
import socialNetworkImg from '../img/socilaNetwork.jpg'
import KinoPoisk from '../img/KinoPoisk.jpg'
import github from '../img/github.jpg'
import Employees from '../img/Employees.jpg'
import Flickr from '../img/Flickr.jpg'
import Counter from '../img/Counter.jpg'
import GameOfThrones from '../img/GameOfThrones.jpg'
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


                    <Project title={'Photo Search'}
                             aboutProject={'Сайт на  котором можно найти любую  фотографии и сохранить себе в закладки.' +
                             ' И если потом она надоест то с лёгкостью удалить её Поиск фотографи реализован при помощи API с сайта https://www.flickr.com/ '  +
                                 ' Инструменты: React-Redux,Axios,TypeScript,Redux-Thunk,unit-test,Material-UI'}
                             style={Flickr} href={"https://antonpuy25.github.io/Flickr/"}/>

                    <Project title={'Github Search Engine'}
                             aboutProject={'На этом сайте можно найти всех пользователей GitHub '}
                             style={github} href={"https://antonpuy25.github.io/Search-for-git-users/"}/>

                    <Project title={'Social Network'}
                             aboutProject={'This is a working  social network with a working database of users. Where the messenger on WebSockets is implemented:' +
                             ' React,Redux,Thunk,TypeScript, Axios,WebSocket,Hooks(useState,useSelector,useDispatch,useEffect,useMemo,useCallback)' +
                             ',TypeScript,Redux-Form,Formik'}
                             style={socialNetworkImg} href={"https://antonpuy25.github.io/NewSocialNetwork/"}/>


                    <Project title={'Todolist'}
                             aboutProject={'Web application for adding tasks.' +
                             ' React,Redux(Toolkit),Thunk,TypeScript,Axios,Hooks (useState,useSelector,useDispatch,useEffect,useMemo)TypeScript,Formik\''}
                             style={todolistImg} href={"https://antonpuy25.github.io/ToDoList/"}/>


                    <Project title={'Currency-Converter'}
                             aboutProject={'Currency Conversion Application'}
                             style={CurrencyConverter}
                             href={"https://antonpuy25.github.io/Currency-Converter/"}/>

                    <Project title={'Game of Thrones'}
                             aboutProject={'Unfortunately, requests through github-phages do not work. Well, you can look at the code))'}
                             style={GameOfThrones} href={"https://antonpuy25.github.io/Characters-Houses/"}/>


                    <Project title={'Employees'}
                             aboutProject={'Unfortunately, requests through github-phages do not work. Well, you can look at the code))'}
                             style={Employees} href={"https://antonpuy25.github.io/Employees/"}/>


                    <Project title={'Home Works'}
                             aboutProject={"Here are 16 Homework assignments that were done in training at the IT Incubator." +
                             "Local-Storage,Api,Material-Ui,Redux,Browser-API"}

                             style={HomeWorks} href={"https://antonpuy25.github.io/HomeWorks/"}/>


                    <Project title={'Counter'}
                             aboutProject={''}
                             style={Counter} href={"https://antonpuy25.github.io/Counter/"}/>


                    <Project title={'KinoPoisk'}
                             aboutProject={'Unfortunately, requests through github-phages do not work. Well, you can look at the code))'}
                             style={KinoPoisk} href={"https://antonpuy25.github.io/SearchMovies/"}/>


                </div>
            </div>
        </div>
    );
}

export default MyWorks;
