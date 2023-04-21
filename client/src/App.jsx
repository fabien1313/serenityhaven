import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";
import RentalApp from "./components/RentalApp/RentalApp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
	return (
		<div className="app-main-container">
			<Header/>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/dashboard" element={<Dashboard/>} />
					<Route path="/rentalApp" element={<RentalApp/>} />
					<Route path="/admin" element={<Admin/>} />
					{/* <Route path='/login' element={Login} /> */}
					{/* <Route path='/signup' element={signup} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
