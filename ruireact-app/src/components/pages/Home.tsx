import Links from '../components/Links';

interface Props {
    items: string[];
    icons: string[];
    links: string[];
}

const Home = ({ items, icons, links }: Props) => {
    return (
        <>
            <Links items={items} icons={icons} links={links} />
            <div id="egg"></div>
        </>
    )
}

export default Home