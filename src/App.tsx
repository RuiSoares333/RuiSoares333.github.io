import './App.css';
import NavBar from './components/components/NavBar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { FaGithub, FaEnvelope, FaScroll, FaLinkedin, FaBuildingColumns, FaLocationDot, FaPhone, FaBoxArchive } from "react-icons/fa6";

import Home from './components/pages/Home';
import Curriculo from './components/pages/Curriculo';


const linksData = [
    { href: "/curriculo", icon: FaScroll, text: "Resumé", name: "" },
    { href: "/projetos", icon: FaBoxArchive, text: "Projects", name: "" },

    { href: "https://sigarra.up.pt/feup/", icon: FaBuildingColumns, text: "", name: "FEUP" },
    { href: "https://g.co/kgs/4qnVRA9", icon: FaLocationDot, text: "", name: "Porto, Portugal" },
    { href: "tel:351912744563", icon: FaPhone, text: "", name: "912 744 563" },
    { href: "rui.rprs3@gmail.com", icon: FaEnvelope, text: "Email", name: "rui.rprs3@gmail.com" },
    { href: "https://github.com/RuiSoares333", icon: FaGithub, text: "Github", name: "RuiSoares333" },
    { href: "https://www.linkedin.com/in/rui-soares333/", icon: FaLinkedin, text: "Linkedin", name: "rui-soares333" },
]

const navLinks = [
    linksData[0], linksData[1], linksData[6], linksData[7]
]

const homeLinks = linksData.slice(2, 8);


function App() {

    return (
        <>
            <Router>
                <NavBar links={navLinks} />
                <Routes>
                    <Route path="/" element={<Home links={homeLinks} pageTitle="Home" />} />
                    <Route path="/curriculo" element={<Curriculo pageTitle="Curriculum" />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
