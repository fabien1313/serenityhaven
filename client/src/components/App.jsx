import Home from "./Home";
// import Home from "./Home";
// import Dashboard from "./Dashboard";
// import Admin from "./Admin";
import RentalApp from "./RentalApp/RentalApp";

function App() {
	return (
		<div className="app-main-container">
			<Header/>
			<Routes>
				{/* <Home /> */}
				{/* <Dashboard /> */}
				{/* <Admin /> */}
				<RentalApp />
			</Routes>
		</div>
	);
}

export default App;
