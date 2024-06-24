import React from "react";

interface CardProps {
    color: string;
    title: string;
    description: JSX.Element;
    icon: React.ElementType;
}

const Card = ({color, title, description, icon: Icon}: CardProps) => {
    return (
        <div className="card hobby-card" style={{borderBottom: "0.3rem solid" + color}}>
            <div className={"hexagon"} style={{background: color}}><Icon className={"text-light"}/></div>
            <div className="card-body text-center px-1" style={{marginTop: "2.3rem"}}>
                <h6 className={"fw-bold"}>{title}</h6>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default Card