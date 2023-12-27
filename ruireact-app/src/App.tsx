import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Links from './components/Links';
import NavBar from './components/NavBar';

import { FaGithub, FaEnvelope, FaScroll, FaLinkedin } from "react-icons/fa";
const items = ["Github", "Email", "Curriculum", "Linkedin"];
const icons = [FaGithub, FaEnvelope, FaScroll, FaLinkedin];
const links = ["https://github.com/RuiSoares333", "rui.rprs3@gmail.com", "/curriculo.html", "https://www.linkedin.com/in/rui-soares333/"]


function App() {
    // return <div className='alert alert-primary'><Button onClick={() => console.log("banana")}>My Button</Button></div>;
    return (
        <>
            <NavBar items={items} links={links} />
            <Links items={items} icons={icons} links={links} />
            <div id="egg"></div>
        </>
    )
}

export default App;
