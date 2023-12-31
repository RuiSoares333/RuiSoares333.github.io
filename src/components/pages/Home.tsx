import React from 'react';
import Links from '../components/Links';

interface Props {
    items: string[];
    icons: string[];
    links: string[];
}

const Home = ({ items, icons, links }: Props) => {
    React.useEffect(() => {
        // Disable scroll when component mounts
        document.body.style.overflow = 'hidden';

        // Re-enable scroll when component unmounts
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <>
            <Links items={items} icons={icons} links={links} />
            <div id="egg"></div>
        </>
    )
}

export default Home