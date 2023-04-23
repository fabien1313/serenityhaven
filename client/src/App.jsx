import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";
import PersonalInfo from "./components/RentalApp/PersonalInfo";
import AdditionalOccupants from "./components/RentalApp/AdditionalOccupants";
import ResidenceHistory from "./components/RentalApp/ResidenceHistory";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
	return (
		<div className="app-main-container">
			<Header/>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/dashboard" element={<Dashboard/>} />
					<Route path="/admin" element={<Admin/>} />
					{/* <Route path='/login' element={Login} /> */}
					{/* <Route path='/signup' element={signup} /> */}
					<Route path="/application/personalInfo" element={<PersonalInfo/>} />
					<Route path="/application/additionalOccupants" element={<AdditionalOccupants/>} />
					<Route path="/application/residenceHistory" element={<ResidenceHistory/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
