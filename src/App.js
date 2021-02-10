import './App.css';
import Header from "./Header/header";
import Main from "./Main/main";
import Skills from "./Skills/skills";
import MyWorks from "./MyWorks/myWorks";
import Distance from "./DistanceWork/distanceWork";
import FormComponent from "./Form/formComponent";
import Footer from "./Footer/footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Distance/>
            <FormComponent/>
            <Footer/>
        </div>
    );
}

export default App;
