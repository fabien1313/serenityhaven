import React, { useState } from "react";
import stateOptions from "./stateOptions.js";

const RentalApp = () => {
	const [referredOption, setReferredOption] = useState("");
	const [selectedState, setSelectedState] = useState(null);
	
	const handleReferralChange = (event) => {
		setReferredOption(event.target.value);
	};
	const handleStateChange = (selectedOption) => {
		setSelectedState(selectedOption);
	};

	return (
		<div className="ra-main-container">
			<form className="ra-main-form">
				<h1 className="ra-main-title">Rental Application</h1>
				<div className="ra-dropdown">
					<label>How did you hear about us?:
						<select	value={referredOption} onChange={handleReferralChange} className="ra-referral-dropdown" >
							<option value=""> -- Please choose an option -- </option>
							<option value="newspaper">Newspaper</option>
							<option value="referral">Referral</option>
							<option value="internet">Internet</option>
							<option value="signage">Signage</option>
							<option value="other">Other</option>
						</select>
					</label>
				</div>
				<div className="ra-applicant-info">
					<h2 className="ra-applicant-title">Applicant Information</h2>
					

				</div>
			</form>
		</div>
	);
};

export default RentalApp;
