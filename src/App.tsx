import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Operation from "./components/Operation";
import PeopleReview from "./components/PeopleReview";
import EndingPage from "./components/EndingPage";

function App() {
	return (
		<>
			<div className="h-screen">
				<NavBar />
				<Hero />
				<Features />
				<Operation />
				{/* <PeopleReview /> */}
				{/* <EndingPage /> */}
			</div>
		</>
	);
}

export default App;
