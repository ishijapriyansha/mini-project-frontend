import "./index.css";
import Firstdraft from "./components/Firstdraft";
import Nfts from "./components/Nfts";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NftView from "./components/NftView";

function App() {
	return (
		<BrowserRouter>
			{
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<Navbar /> <Nfts />
							</>
						}
					></Route>
					<Route
						exact
						path="/create"
						element={
							<>
								<Navbar />
								<Firstdraft />
							</>
						}
					></Route>
					<Route
						exact
						path="/:id"
						element={
							<>
								<Navbar />
								<NftView />
							</>
						}
					></Route>
				</Routes>
			}
		</BrowserRouter>
	);
}

export default App;
