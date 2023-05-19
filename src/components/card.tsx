import React from "react";

interface CardProps {
	ip: string;
	date: string;
	time: string;
}

const Card: React.FC<CardProps> = ({ ip, time, date }) => {
	return (
		<div className="flex flex-col justify-center items-center mt-10">
			<div className="flex flex-col justify-center items-center bg-white sm:text-base text-xs text-stone-950 sm:w-cardWidth w-smCardWidth rounded-lg">
				<h1 className="mt-5">Someone just visited your site!</h1>

				<div className="flex flex-row justify-center items-center mt-2 mb-5 font-bold">
					<p className="sm:ml-4 sm:mr-4 ml-2 mr-2">ip:{ip}</p>

					<p className="sm:ml-4 sm:mr-4 ml-2 mr-2">date:{date}</p>

					<p className="sm:ml-4 sm:mr-4 ml-2 mr-2">time:{time}</p>
				</div>
			</div>
		</div>
	);
};
export default Card;
