import React from "react";

interface CardProps {
	ip: string;
	date: string;
	time: string;
}

const Card: React.FC<CardProps> = ({ ip, time, date }) => {
	return (
		<div className="flex flex-col justify-center items-center mt-10">
			<div className="flex flex-col justify-center items-center bg-white text-md text-stone-950 w-cardWidth rounded-lg">
				<h1 className="mt-5">Someone just visited your site!</h1>

				<div className="flex flex-row justify-center items-center mt-2 mb-5 font-bold">
					<p className="ml-4 mr-4">ip:{ip}</p>

					<p className="ml-4 mr-4">date:{date}</p>

					<p className="ml-4 mr-4">time:{time}</p>
				</div>
			</div>
		</div>
	);
};
export default Card;
