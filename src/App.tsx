import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/components/NavBar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from './components/pages/Home';
import Curriculo from './components/pages/Curriculo';

import { FaGithub, FaEnvelope, FaScroll, FaLinkedin } from "react-icons/fa";
const items = ["Github", "Email", "Curriculum", "Linkedin"];
const icons = [FaGithub, FaEnvelope, FaScroll, FaLinkedin];
const links = ["https://github.com/RuiSoares333", "rui.rprs3@gmail.com", "/curriculo", "https://www.linkedin.com/in/rui-soares333/"]

function App() {

    return (
        <>
            <Router>
                <NavBar items={items} links={links} />
                <Routes>
                    <Route path="/" element={<Home items={items} icons={icons} links={links} />} />
                    <Route path="/curriculo" element={<Curriculo />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
