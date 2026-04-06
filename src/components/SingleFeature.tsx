import React from "react";

const SingleFeature: React.FC<{
	image: string;
	icon: string;
	title: string;
	text: string;
}> = ({ image, icon, title, text }) => {
	return (
		<>
			<div className="grid items-center justify-center h-80">
				<img src={image} className="w-100 h-auto" />
			</div>
			<div className="flex justify-center font-averia h-80">
				<div className="grid items-center grid-rows-3">
					<div className="grid row-start-2 grid-cols-4">
						<div className="col-start-2 col-span-2">
							<svg className="bg-green-200 rounded-full p-2 w-15 h-10 mb-8">
								<use xlinkHref={`./icons.svg#icon-${icon}`}></use>
							</svg>
							<h1 className="text-2xl font-bold">{title}</h1>
							<p className="text-l">{text}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleFeature;
