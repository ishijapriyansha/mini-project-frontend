import React, { useEffect, useState } from "react";
import Nftitem from "./Nftitem";
import newnewtarget from "./newnewtarget.jpg";
import axios from "axios";

export default function Nfts() {
	const [nfts, setNfts] = useState();

	const fetchData = async () => {
		const { data } = await axios.get("http://127.0.0.1:5172/credentials");
		setNfts(data.result);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<div className=" h-screen w-100  ">
				<img src={newnewtarget} alt="test" />
			</div>
			<div className="bgimagediv min-h-full w-screen absolute top-0 z-10 backdrop-blur ">
				<div className="container">
					<div className="row">
						{nfts &&
							nfts.map((element, key) => {
								return (
									<div className="col-md-4" key={key}>
										<Nftitem
											imgsrc={element.img}
											title={element.title}
											recipient={element.owner}
											description={element.description}
											url={element.id}
										/>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}
