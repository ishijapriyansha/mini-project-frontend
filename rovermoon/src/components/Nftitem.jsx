import React from "react";
import newnewtarget from "./newnewtarget.jpg";
export default function Nftitem(props) {
	return (
		<div className=" image h-fit w-72 mt-28 border-2 border-solid border-black text-center rounded-md bg-pink-400 p-2 ml-10 ">
			<img
				className="border-2 border-black border-solid"
				src={props.imgsrc}
				alt="test"
			/>
			<div className="details ">
				<p className="font-bold">{props.title}</p>
				<p className="font-semibold"> Owned By {props.recipient}</p>
				<p className="font-mono"> {props.description}</p>
				<p className="font-mono"> Issued by Ishija P(0x1234567890)</p>
				<br />
				<a href={props.url} className="btn btn-danger ml-3 mb-2 w-36">
					{" "}
					View
				</a>
			</div>
		</div>
	);
}

Nftitem.defaultProps = {
	imgsrc: newnewtarget,
	title: "Certicate of Excellence",
	recipient: "Ishija Priyansha",
	description: "Ishija Priyansha the great!",
	url: "https://dictionary.cambridge.org/dictionary/english/legendary",
};
