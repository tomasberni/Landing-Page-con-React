import React from "react";
import Card from "./card.jsx"

const CardGroup = () => {
	return (
		<div className="container d-flex">
			<Card />
			<Card />
            <Card />
            <Card />
		</div>
	);
};

export default CardGroup;