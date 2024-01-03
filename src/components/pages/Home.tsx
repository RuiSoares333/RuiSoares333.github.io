import React from 'react';
import { IconType } from 'react-icons';

import MyInfo from '../components/MyInfo';

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

const Home: React.FC<HomeProps> = ({ links, pageTitle }) => {

    React.useEffect(() => {
        document.title = "Rui Soares | " + (pageTitle ? pageTitle : "Home");

        // Disable scroll when component mounts
        document.body.style.overflow = 'hidden';

        // Re-enable scroll when component unmounts
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [pageTitle]);

    return (
        <>
            <MyInfo links={links} />
            {/* <div id="egg"></div> */}
        </>
    )
}

export default Home