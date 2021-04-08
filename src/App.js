import Header from "./Header/header";
import Main from "./Main/main";
import Skills from "./Skills/skills";
import MyWorks from "./MyWorks/myWorks";
import Distance from "./DistanceWork/distanceWork";
import FormComponent from "./Form/formComponent";
import Footer from "./Footer/footer";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {useDispatch, useSelector} from "react-redux";
import {setScrollAC} from "./Store/reducer";
import { Link } from "react-scroll";

function App() {
    const state = useSelector(state => state.reducer.scroll);
    const dispatch = useDispatch();
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 600) {
            dispatch(setScrollAC(true))
        } else {
            dispatch(setScrollAC(false))

        }

    });


    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Distance/>
            <FormComponent/>
            <Footer/>
            {state ?
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}
                  style={{position: 'fixed', bottom: '20px', right: '50px',cursor:'pointer'}}>
                <ArrowUpwardIcon fontSize={"large"} color={"primary"}/>
                </Link> : null}

        </div>
    );
}

export default App;
