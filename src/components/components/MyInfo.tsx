import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

interface Props {
    href: string;
    icon: IconType;
    text: string;
    name: string;
}

interface MyInfoProps {
    links: Props[];
}

const MyInfo: React.FC<MyInfoProps> = ({ links }) => {
    return (
        <div id="my-info" className="card">
            <img src="gato-github.png" className="card-img-top" alt="My Github Image" />
            <h5 className="fw-bold">Rui Soares</h5>
            <p>3rd year Student of <b>Informatics</b> and <b>Computer Engineering</b></p>
            <div className="card-body d-flex flex-column">
                {links.map((item, index) => (
                    <li key={index} className="nav-item my-1">
                        <Link to={item.href}><item.icon className="me-3"/><b>{item.name}</b></Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default MyInfo