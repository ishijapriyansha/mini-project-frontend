import { useParams } from "react-router-dom";
import newnewtarget from "./newnewtarget.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NftView(props) {
	const { id } = useParams();
	const [data, setData] = useState();
	const fetchData = async () => {
		const { data } = await axios.get(
			`http://127.0.0.1:5172/credential?id=${id}`
		);
		setData(data.result[0]);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return data ? (
		<>
			<div className=" image h-max w-96 mt-28 border-2 border-solid border-black text-center rounded-md bg-pink-400 p-2 ml-96 ">
				<img
					className="border-2 border-black border-solid"
					src={data.image}
					alt="test"
				/>
				<div className="details h-1/2 w-96 text-xl ">
					<p className="font-bold">{data.title}</p>
					<p className="font-semibold">
						{" "}
						Owned By {data.owner.substring(0, 10)}...
					</p>
					<p className="font-mono"> {data.description}</p>
					<p className="font-mono">
						{" "}
						Issued by {data.creator.substring(0, 15)}...
					</p>
				</div>
			</div>
		</>
	) : (
		"Loading..."
	);
}

NftView.defaultProps = {
	imgsrc: newnewtarget,
	title: "Certicate of Excellence",
	recipient: "Ishija Priyansha",
	description: "Ishija Priyansha the great!",
	url: "https://dictionary.cambridge.org/dictionary/english/legendary",
};
