import React from 'react';
import {IconType} from 'react-icons';

import MyInfo from '../components/MyInfo';
import HomeCard from '../components/HomeCard';

interface Props {
    href: string;
    icon: IconType;
    text: string;
    name: string;
}

interface HomeProps {
    links: Props[];
    pageTitle: string;
}

const Home: React.FC<HomeProps> = ({links, pageTitle}) => {

    React.useEffect(() => {
        document.title = "Rui Soares | " + (pageTitle ? pageTitle : "Home");
    }, [pageTitle]);

    return (
        <>
            <div id="egg"></div>
            <div className={"d-flex flex-row"}>
                <MyInfo links={links}/>
                <HomeCard/>
            </div>

        </>
    )
}

export default Home
