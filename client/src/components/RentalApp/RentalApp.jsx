import React, { useState } from "react";
import "./rentalApp.css";
import stateOptions from "./stateOptions.js";
import { months, days, years } from "./date.js";


const RentalApp = () => {
	const [referredOption, setReferredOption] = useState("");
	const [selectedApplicantState, setSelectedApplicantState] = useState("");
	const [selectedApplicantBirthMonth, setselectedApplicantBirthMonth] = useState("");
	const [selectedApplicantBirthDay, setselectedApplicantBirthDay] = useState("");
	const [selectedApplicantBirthYear, setselectedApplicantBirthYear] = useState("");
	const [applicantSSN, setApplicantSSN] = useState("");
	const [applicantPhone, setApplicantPhone] = useState("");
	const [applicantEmail, setApplicantEmail] = useState("");
	const [applicantEmailIsValid, setApplicantEmailIsValid] = useState(true);
	const [selectedCoApplicantState, setSelectedCoApplicantState] = useState("");
	const [selectedCoApplicantBirthMonth, setselectedCoApplicantBirthMonth] = useState("");
	const [selectedCoApplicantBirthDay, setselectedCoApplicantBirthDay] = useState("");
	const [selectedCoApplicantBirthYear, setselectedCoApplicantBirthYear] = useState("");
	const [coApplicantSSN, setCoApplicantSSN] = useState("");
	const [coApplicantPhone, setCoApplicantPhone] = useState("");
	const [coApplicantEmail, setCoApplicantEmail] = useState("");
	const [coApplicantEmailIsValid, setCoApplicantEmailIsValid] = useState(true);

	const handleReferralChange = (event) => {
		setReferredOption(event.target.value);
	};
	const handleStateChange = (event) => {
		setSelectedApplicantState(event.target.value);
	};
	const handleApplicantBirthMonthChange = (event) => {
		setselectedApplicantBirthMonth(event.target.value);
	};
	const handleApplicantBirthDayChange = (event) => {
		setselectedApplicantBirthDay(event.target.value);
	};
	const handleApplicantBirthYearChange = (event) => {
		setselectedApplicantBirthYear(event.target.value);
	};
	const handleApplicantSSChange = (event) => {
		const inputApplicantSSN = event.target.value.replace(/\D/g, "").substring(0, 9); // remove non-digits and limit to 9 digits
		const formattedApplicantSSN = inputApplicantSSN.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3"); // add dashes to format
		setApplicantSSN(formattedApplicantSSN);
	};
	const handleApplicantPhoneChange = (event) => {
		const inputApplicantPhone = event.target.value.replace(/\D/g, "").substring(0, 10); // remove non-digits and limit to 10 digits
		const formattedApplicantPhone = inputApplicantPhone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"); // add dashes to format
		setApplicantPhone(formattedApplicantPhone);
	};
	const handleApplicantEmailChange = (event) => {
		const inputEmail = event.target.value.trim(); // remove leading and trailing white space
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression for email validation
		const isValidEmail = emailRegex.test(inputEmail); // check if the input is a valid email address
		setApplicantEmail(inputEmail);
		setApplicantEmailIsValid(isValidEmail);
  	}
	const handleCoApplicantStateChange = (event) => {
		setSelectedCoApplicantState(event.target.value);
	};
	const handleCoApplicantBirthMonthChange = (event) => {
		setselectedCoApplicantBirthMonth(event.target.value);
	};
	const handleCoApplicantBirthDayChange = (event) => {
		setselectedCoApplicantBirthDay(event.target.value);
	};
	const handleCoApplicantBirthYearChange = (event) => {
		setselectedCoApplicantBirthYear(event.target.value);
	};
	const handleCoApplicantSSChange = (event) => {
		const inputCoApplicantSSN = event.target.value.replace(/\D/g, "").substring(0, 9); // remove non-digits and limit to 9 digits
		const formattedCoApplicantSSN = inputCoApplicantSSN.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3"); // add dashes to format
		setCoApplicantSSN(formattedCoApplicantSSN);
	};
	const handleCoApplicantPhoneChange = (event) => {
		const inputCoApplicantPhone = event.target.value.replace(/\D/g, "").substring(0, 10); // remove non-digits and limit to 10 digits
		const formattedCoApplicantPhone = inputCoApplicantPhone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"); // add dashes to format
		setCoApplicantPhone(formattedCoApplicantPhone);
	};
	const handleCoApplicantEmailChange = (event) => {
		const inputEmail = event.target.value.trim(); // remove leading and trailing white space
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression for email validation
		const isValidEmail = emailRegex.test(inputEmail); // check if the input is a valid email address
		setCoApplicantEmail(inputEmail);
		setCoApplicantEmailIsValid(isValidEmail);
	};

	return (
		<div className="ra-main-container">
			<form className="ra-main-form">
				<h2 className="ra-main-title">Rental Application</h2>
				<div className="ra-dropdown">
					<select	value={referredOption} onChange={handleReferralChange} className="ra-referral-dropdown" >
						<option value=""> -- How did you hear about us? -- </option>
						<option value="newspaper">Newspaper</option>
						<option value="referral">Referral</option>
						<option value="internet">Internet</option>
						<option value="signage">Signage</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div className="ra-applicant-info">
					<h3 className="ra-applicant-title">Applicant Information</h3>
					<div className="ra-applicant-identity-container">
						<input className="ra-applicant-first-name" type="text" placeholder="First Name"/>
						<input className="ra-applicant-middle-name" type="text" placeholder="Middle Name"/>
						<input className="ra-applicant-last-name" type="text" placeholder="Last Name"/>
						<input type="text" className="ra-applicant-id-number" placeholder="Driver License or ID#"/>
						<select value={selectedApplicantState} onChange={handleStateChange} className="ra-applicant-id-state-dropdown">
							<option value="" className="ra-applicant-id-option-default">State</option>
							{stateOptions.map((state) => (
								<option key={state.value} value={state.value} className="ra-applicant-id-options">
									{state.label}
								</option>
							))}
						</select>
						<div className="ra-applicant-birthday-container">
							<h3>D.O.B.</h3>
							<select value={selectedApplicantBirthMonth} onChange={handleApplicantBirthMonthChange} className="ra-applicant-birth-month-dropdown">
								<option value="" className="ra-applicant-birth-month-option-default">Month</option>
								{months.map((month) => (
									<option key={month.value} value={month.value} className="ra-applicant-birth-month-options">
										{month.label}
									</option>
								))}
							</select>
							<select value={selectedApplicantBirthDay} onChange={handleApplicantBirthDayChange} className="ra-applicant-birth-day-dropdown">
								<option value="" className="ra-applicant-birth-day-option-default">Day</option>
								{days.map((day) => (
									<option key={day.value} value={day.value} className="ra-applicant-birth-day-options">
										{day.label}
									</option>
								))}
							</select>
							<select value={selectedApplicantBirthYear} onChange={handleApplicantBirthYearChange} className="ra-applicant-birth-year-dropdown">
								<option value="" className="ra-applicant-birth-year-option-default">Year</option>
								{years.map((year) => (
									<option key={year.value} value={year.value} className="ra-applicant-birth-year-options">
										{year.label}
									</option>
								))}
							</select>
							<input type="text" value={applicantSSN} className='ra-applicant-ssn' onChange={handleApplicantSSChange} maxLength={11} placeholder="Social Security #" />
							<input type="text" value={applicantPhone} className='ra-applicant-phone' onChange={handleApplicantPhoneChange} maxLength={14} placeholder="Phone Number" />
							<div className='ra-applicant-email-container' style={{ display: "flex", flexDirection: "column" }}>
  								{!applicantEmailIsValid && <div className="ra-applicant-invalid-email" >Please enter a valid email address.</div>}
  								<input type="text" value={applicantEmail} className="ra-applicant-email" onChange={handleApplicantEmailChange} placeholder="Email" />
							</div>
						</div>
					</div>
				</div>
				<div className="ra-co-applicant-info">
					<h3 className="ra-co-applicant-title">Co-Applicant Information</h3>
					<div className="ra-co-applicant-identity-container">
						<input className="ra-co-applicant-first-name" type="text" placeholder="First Name"/>
						<input className="ra-co-applicant-middle-name" type="text" placeholder="Middle Name"/>
						<input className="ra-co-applicant-last-name" type="text" placeholder="Last Name"/>
						<input type="text" className="ra-co-applicant-id-number" placeholder="Driver License or ID#"/>
						<select value={selectedCoApplicantState} onChange={handleCoApplicantStateChange} className="ra-co-applicant-id-state-dropdown">
							<option value="" className="ra-co-applicant-id-option-default">State</option>
							{stateOptions.map((state) => (
								<option key={state.value} value={state.value} className="ra-co-applicant-id-options">
									{state.label}
								</option>
							))}
						</select>
						<div className="ra-co-applicant-birthday-container">
							<h3>D.O.B.</h3>
							<select value={selectedCoApplicantBirthMonth} onChange={handleCoApplicantBirthMonthChange} className="ra-co-applicant-birth-month-dropdown">
								<option value="" className="ra-co-applicant-birth-month-option-default">Month</option>
								{months.map((month) => (
									<option key={month.value} value={month.value} className="ra-co-applicant-birth-month-options">
										{month.label}
									</option>
								))}
							</select>
							<select value={selectedCoApplicantBirthDay} onChange={handleCoApplicantBirthDayChange} className="ra-co-applicant-birth-day-dropdown">
								<option value="" className="ra-co-applicant-birth-day-option-default">Day</option>
								{days.map((day) => (
									<option key={day.value} value={day.value} className="ra-co-applicant-birth-day-options">
										{day.label}
									</option>
								))}
							</select>
							<select value={selectedCoApplicantBirthYear} onChange={handleCoApplicantBirthYearChange} className="ra-co-applicant-birth-year-dropdown">
								<option value="" className="ra-co-applicant-birth-year-option-default">Year</option>
								{years.map((year) => (
									<option key={year.value} value={year.value} className="ra-co-applicant-birth-year-options">
										{year.label}
									</option>
								))}
							</select>
							<input type="text" value={coApplicantSSN} className='ra-co-applicant-ssn' onChange={handleCoApplicantSSChange} maxLength={11} placeholder="Social Security #" />
							<input type="text" value={coApplicantPhone} className='ra-co-applicant-phone' onChange={handleCoApplicantPhoneChange} maxLength={14} placeholder="Phone Number" />
							<div className='ra-co-applicant-email-container' style={{ display: "flex", flexDirection: "column" }}>
								{!coApplicantEmailIsValid && <div className="ra-co-applicant-invalid-email" >Please enter a valid email address.</div>}
								<input type="text" value={coApplicantEmail} className="ra-co-applicant-email" onChange={handleCoApplicantEmailChange} placeholder="Email" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RentalApp;