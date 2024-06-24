import React from "react";
import Card from "./Card";
import {IoMusicalNoteOutline} from "react-icons/io5";
import {GiLeechingWorm} from "react-icons/gi";
import {LuGamepad} from "react-icons/lu";
import {MdLightbulbOutline} from "react-icons/md";

interface CardInfo {
    color: string;
    title: string;
    description: JSX.Element;
    icon: React.ElementType;
}

const HomeCard = () => {

    const hobbies: CardInfo[] = [
        {
            icon: IoMusicalNoteOutline,
            title: "Music",
            description: <p>I love playing <b>guitar</b> and listening to <b>Dream Theater</b> and Polyphia.</p>,
            color: "#FD1D1D",
        },
        {
            icon: GiLeechingWorm,
            title: "Movies",
            description: <p>My favorite movies are <b>Dune 2</b> and <b>The Revenge of the Sith</b>.</p>,
            color: "#FCB045"
        },
        {
            icon: LuGamepad,
            title: "Gaming",
            description: <p>I love to play video games, especially RPGs and strategy games.</p>,
            color: "#9747FF"
        },
        {
            icon: MdLightbulbOutline,
            title: "Programming",
            description: <p>My favorite areas involve <b>Front-End</b>, Java and C++.</p>,
            color: "#4F5A69"
        }
    ];

    const paragraphs = [
        {
            title: "Who Am I?",
            body: getDescription()
        },
        {
            title: "My Hobbies",
            body: getHobbiesCard()
        }
    ];

    function getDescription() {
        return <>
            <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id placerat elit. Suspendisse pharetra
                in
                libero a ultricies. Nulla tempor rutrum ornare. Proin in sodales orci, suscipit imperdiet ex. Sed
                tristique
                urna id purus auctor consectetur.
            </p>
            <p>
                Nam nulla magna, aliquet id nisl et, posuere bibendum nisl. Cras ultrices porta orci, quis volutpat odio
                feugiat ac. Maecenas commodo ac nisl sit amet tristique. In eu pharetra nibh, id fringilla dui. Morbi at
                arcu quis turpis pretium euismod at sit amet metus.
            </p>
        </>
    }

    function getHobbiesCard() {
        return (
            <div className={"d-flex flex-row flex-wrap justify-content-around"} style={{marginTop: "4rem"}}>
                {hobbies.map((hobby, index) => (
                    <Card key={index} color={hobby.color} title={hobby.title} description={hobby.description}
                          icon={hobby.icon}/>
                ))}
            </div>
        )
    }

    return (
        <div id="home-card" className="card mx-auto">

            <div className="d-flex flex-column justify-content-around">

                {paragraphs.map((item, index) => (
                    <div key={index} className="card-body">
                        <h5 className="fw-bold">{item.title}</h5>
                        {item.body}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeCard
