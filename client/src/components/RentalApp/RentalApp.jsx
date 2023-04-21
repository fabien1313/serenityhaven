import React, { useState } from "react";
import "./rentalApp.css";
import stateOptions from "./stateOptions.js";
import { months, days, years } from "./date.js";


const RentalApp = () => {
	const [referredOption, setReferredOption] = useState("");
	const [applicantFirstName, setApplicantFirstName] = useState("");
	const [applicantMiddleName, setApplicantMiddleName] = useState("");
	const [applicantLastName, setApplicantLastName] = useState("");
	const [applicantIDNumber, setApplicantIDNumber] = useState("");
	const [applicantState, setApplicantState] = useState("");
	const [applicantBirthMonth, setApplicantBirthMonth] = useState("");
	const [applicantBirthDay, setApplicantBirthDay] = useState("");
	const [applicantBirthYear, setApplicantBirthYear] = useState("");
	const [applicantSSN, setApplicantSSN] = useState("");
	const [applicantPhone, setApplicantPhone] = useState("");
	const [applicantEmail, setApplicantEmail] = useState("");
	const [applicantEmailIsValid, setApplicantEmailIsValid] = useState(true);
	const [coApplicantFirstName, setCoApplicantFirstName] = useState("");
	const [coApplicantMiddleName, setCoApplicantMiddleName] = useState("");
	const [coApplicantLastName, setCoApplicantLastName] = useState("");
	const [coApplicantIDNumber, setCoApplicantIDNumber] = useState("");
	const [selectedCoApplicantState, setSelectedCoApplicantState] = useState("");
	const [selectedCoApplicantBirthMonth, setselectedCoApplicantBirthMonth] = useState("");
	const [selectedCoApplicantBirthDay, setselectedCoApplicantBirthDay] = useState("");
	const [selectedCoApplicantBirthYear, setselectedCoApplicantBirthYear] = useState("");
	const [coApplicantSSN, setCoApplicantSSN] = useState("");
	const [coApplicantPhone, setCoApplicantPhone] = useState("");
	const [coApplicantEmail, setCoApplicantEmail] = useState("");
	const [coApplicantEmailIsValid, setCoApplicantEmailIsValid] = useState(true);
	const [coOccupant1Name, setCoOccupant1Name] = useState("");
	const [coOccupant1age, setCoOccupant1age] = useState("");
	const [coOccupant1Relationship, setCoOccupant1Relationship] = useState("");
	const [coOccupant2Name, setCoOccupant2] = useState("");
	const [coOccupant2age, setCoOccupant2age] = useState("");
	const [coOccupant2Relationship, setCoOccupant2Relationship] = useState("");
	const [coOccupant3Name, setCoOccupant3] = useState("");
	const [coOccupant3age, setCoOccupant3age] = useState("");
	const [coOccupant3Relationship, setCoOccupant3Relationship] = useState("");
	const [coOccupant4Name, setCoOccupant4] = useState("");
	const [coOccupant4age, setCoOccupant4age] = useState("");
	const [coOccupant4Relationship, setCoOccupant4Relationship] = useState("");
	const [coOccupant5Name, setCoOccupant5] = useState("");
	const [coOccupant5age, setCoOccupant5age] = useState("");
	const [coOccupant5Relationship, setCoOccupant5Relationship] = useState("");


	const handleReferralChange = (event) => {
		setReferredOption(event.target.value);
	};
	const handleApplicantFirstNameChange = (event) => {
		setApplicantFirstName(event.target.value);
	};
	const handleApplicantMiddleNameChange = (event) => {
		setApplicantMiddleName(event.target.value);
	};
	const handleApplicantLastNameChange = (event) => {
		setApplicantLastName(event.target.value);
	};
	const handleApplicantIDNumberChange = (event) => {
		setApplicantIDNumber(event.target.value);
	};
	const handleApplicantStateChange = (event) => {
		setApplicantState(event.target.value);
	};
	const handleApplicantBirthMonthChange = (event) => {
		setApplicantBirthMonth(event.target.value);
	};
	const handleApplicantBirthDayChange = (event) => {
		setApplicantBirthDay(event.target.value);
	};
	const handleApplicantBirthYearChange = (event) => {
		setApplicantBirthYear(event.target.value);
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
	const handleCoApplicantFirstNameChange = (event) => {
		setCoApplicantFirstName(event.target.value);
	};
	const handleCoApplicantMiddleNameChange = (event) => {
		setCoApplicantMiddleName(event.target.value);
	};
	const handleCoApplicantLastNameChange = (event) => {
		setCoApplicantLastName(event.target.value);
	};
	const handleCoApplicantIDNumberChange = (event) => {
		setCoApplicantIDNumber(event.target.value);
	};
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
	const handleCoOccupant1Name = (event) => {
		setCoOccupant1Name(event.target.value);
	};
	const handleCoOccupant1Age = (event) => {
		setCoOccupant1age(event.target.value);
	};
	const handleCoOccupant1Relationship = (event) => {
		setCoOccupant1Relationship(event.target.value);
	};
	const handleCoOccupant2Name = (event) => {
		setCoOccupant2(event.target.value);
	};
	const handleCoOccupant2Age = (event) => {
		setCoOccupant2age(event.target.value);
	};
	const handleCoOccupant2Relationship = (event) => {
		setCoOccupant2Relationship(event.target.value);
	};
	const handleCoOccupant3Name = (event) => {
		setCoOccupant3(event.target.value);
	};
	const handleCoOccupant3Age = (event) => {
		setCoOccupant3age(event.target.value);
	};
	const handleCoOccupant3Relationship = (event) => {
		setCoOccupant3Relationship(event.target.value);
	};
	const handleCoOccupant4Name = (event) => {
		setCoOccupant4(event.target.value);
	};
	const handleCoOccupant4Age = (event) => {
		setCoOccupant4age(event.target.value);
	};
	const handleCoOccupant4Relationship = (event) => {
		setCoOccupant4Relationship(event.target.value);
	};
	const handleCoOccupant5Name = (event) => {
		setCoOccupant5(event.target.value);
	};
	const handleCoOccupant5Age = (event) => {
		setCoOccupant5age(event.target.value);
	};
	const handleCoOccupant5Relationship = (event) => {
		setCoOccupant5Relationship(event.target.value);
	};

	return (
		<div className="ra-main-container">
			<h2 className="ra-main-title">Rental Application</h2>
			<div className="ra-dropdown">
				<select	value={referredOption} onChange={handleReferralChange} className="ra-referral-dropdown dropdownInputField" >
					<option value=""> -- How did you hear about us? -- </option>
					<option value="newspaper">Newspaper</option>
					<option value="referral">Referral</option>
					<option value="internet">Internet</option>
					<option value="signage">Signage</option>
					<option value="other">Other</option>
				</select>
			</div>
			<form className="ra-main-form">
				<div className="ra-applicant-info ra-column-container">
					<h3 className="ra-applicant-title ra-section-title">Applicant Information</h3>
					<div className="ra-applicant-identity-container ra-row-container-wrap">
						<input value={applicantFirstName} onChange={handleApplicantFirstNameChange} className="ra-applicant-first-name textInputField" type="text" placeholder="First Name"/>
						<input value={applicantMiddleName} onChange={handleApplicantMiddleNameChange} className="ra-applicant-middle-name textInputField" type="text" placeholder="Middle Name"/>
						<input value={applicantLastName} onChange={handleApplicantLastNameChange} className="ra-applicant-last-name textInputField" type="text" placeholder="Last Name"/>
						<input value={applicantIDNumber} onChange={handleApplicantIDNumberChange} type="text" className="ra-applicant-id-number textInputField" placeholder="Driver License or ID#"/>
						<select value={applicantState} onChange={handleApplicantStateChange} className="ra-applicant-id-state-dropdown dropdownInputField">
							<option value="" className="ra-applicant-id-option-default">State</option>
							{stateOptions.map((state) => (
								<option key={state.value} value={state.value} className="ra-applicant-id-options">
									{state.label}
								</option>
							))}
						</select>
					</div>
					<div className="ra-applicant-vital-container ra-row-container-wrap">
						<h3>D.O.B.</h3>
						<select value={applicantBirthMonth} onChange={handleApplicantBirthMonthChange} className="ra-applicant-birth-month-dropdown textInputField">
							<option value="" className="ra-applicant-birth-month-option-default">Month</option>
							{months.map((month) => (
								<option key={month.value} value={month.value} className="ra-applicant-birth-month-options">
									{month.label}
								</option>
							))}
						</select>
						<select value={applicantBirthDay} onChange={handleApplicantBirthDayChange} className="ra-applicant-birth-day-dropdown textInputField">
							<option value="" className="ra-applicant-birth-day-option-default">Day</option>
							{days.map((day) => (
								<option key={day.value} value={day.value} className="ra-applicant-birth-day-options">
									{day.label}
								</option>
							))}
						</select>
						<select value={applicantBirthYear} onChange={handleApplicantBirthYearChange} className="ra-applicant-birth-year-dropdown textInputField">
							<option value="" className="ra-applicant-birth-year-option-default">Year</option>
							{years.map((year) => (
								<option key={year.value} value={year.value} className="ra-applicant-birth-year-options">
									{year.label}
								</option>
							))}
						</select>
						<input value={applicantSSN} onChange={handleApplicantSSChange} type="text" className='ra-applicant-ssn textInputField' maxLength={11} placeholder="Social Security #" />
						<input value={applicantPhone} onChange={handleApplicantPhoneChange} type="text" className='ra-applicant-phone textInputField' maxLength={14} placeholder="Phone Number" />
						<div className='ra-applicant-email-container'>
							{!applicantEmailIsValid && <div className="ra-applicant-invalid-email invalidEmailMessage" >Please enter a valid email address.</div>}
							<input value={applicantEmail} onChange={handleApplicantEmailChange} type="text" className="ra-applicant-email textInputField" placeholder="Email" />
						</div>
					</div>
				</div>
				<div className="ra-co-applicant-info ra-column-container">
					<h3 className="ra-co-applicant-title ra-section-title">Co-Applicant Information</h3>
					<div className="ra-co-applicant-identity-container ra-row-container-wrap">
						<input value={coApplicantFirstName} onChange={handleCoApplicantFirstNameChange} className="ra-co-applicant-first-name textInputField" type="text" placeholder="First Name"/>
						<input value={coApplicantMiddleName} onChange={handleCoApplicantMiddleNameChange} className="ra-co-applicant-middle-name textInputField" type="text" placeholder="Middle Name"/>
						<input value={coApplicantLastName} onChange={handleCoApplicantLastNameChange} className="ra-co-applicant-last-name textInputField" type="text" placeholder="Last Name"/>
						<input value={coApplicantIDNumber} onChange={handleCoApplicantIDNumberChange} type="text" className="ra-co-applicant-id-number textInputField" placeholder="Driver License or ID#"/>
						<select value={selectedCoApplicantState} onChange={handleCoApplicantStateChange} className="ra-co-applicant-id-state-dropdown dropdownInputField">
							<option value="" className="ra-co-applicant-id-option-default">State</option>
							{stateOptions.map((state) => (
								<option key={state.value} value={state.value} className="ra-co-applicant-id-options">
									{state.label}
								</option>
							))}
						</select>
					</div>
					<div className="ra-co-applicant-vital-container ra-row-container-wrap">
						<h3>D.O.B.</h3>
						<select value={selectedCoApplicantBirthMonth} onChange={handleCoApplicantBirthMonthChange} className="ra-co-applicant-birth-month-dropdown textInputField">
							<option value="" className="ra-co-applicant-birth-month-option-default">Month</option>
							{months.map((month) => (
								<option key={month.value} value={month.value} className="ra-co-applicant-birth-month-options">
									{month.label}
								</option>
							))}
						</select>
						<select value={selectedCoApplicantBirthDay} onChange={handleCoApplicantBirthDayChange} className="ra-co-applicant-birth-day-dropdown textInputField">
							<option value="" className="ra-co-applicant-birth-day-option-default">Day</option>
							{days.map((day) => (
								<option key={day.value} value={day.value} className="ra-co-applicant-birth-day-options">
									{day.label}
								</option>
							))}
						</select>
						<select value={selectedCoApplicantBirthYear} onChange={handleCoApplicantBirthYearChange} className="ra-co-applicant-birth-year-dropdown textInputField">
							<option value="" className="ra-co-applicant-birth-year-option-default">Year</option>
							{years.map((year) => (
								<option key={year.value} value={year.value} className="ra-co-applicant-birth-year-options">
									{year.label}
								</option>
							))}
						</select>
						<input type="text" value={coApplicantSSN} className='ra-co-applicant-ssn textInputField' onChange={handleCoApplicantSSChange} maxLength={11} placeholder="Social Security #" />
						<input type="text" value={coApplicantPhone} className='ra-co-applicant-phone textInputField' onChange={handleCoApplicantPhoneChange} maxLength={14} placeholder="Phone Number" />
						<div className='ra-co-applicant-email-container'>
							{!coApplicantEmailIsValid && <div className="ra-co-applicant-invalid-email invalidEmailMessage" >Please enter a valid email address.</div>}
							<input type="text" value={coApplicantEmail} className="ra-co-applicant-email textInputField" onChange={handleCoApplicantEmailChange} placeholder="Email" />
						</div>
					</div>
				</div>
				<div className="ra-other-occupants-container ra-column-container">
					<h3 className="ra-other-occupants-title ra-section-title">Additional Occupants</h3>
					<h5 className="ra-other-occupants-subtitle subtitle">(Please list all other occupants who will live here.)</h5>
					<div className="ra-occupant1-container ra-row-container-wrap">
						<input className='ra-other-occupants-name1 textInputField' value={coOccupant1Name} onChange={handleCoOccupant1Name} placeholder='Additional Occupant Name'/>
						<input className='ra-other-occupants-age1 textInputField' value={coOccupant1age} onChange={handleCoOccupant1Age} placeholder='Age'/>
						<input className='ra-other-occupants-relationship1 textInputField' value={coOccupant1Relationship} onChange={handleCoOccupant1Relationship} placeholder='Relationship'/>
					</div>
					<div className="ra-occupant2-container ra-row-container-wrap">
						<input className='ra-other-occupants-name2 textInputField' value={coOccupant2Name} onChange={handleCoOccupant2Name} placeholder='Additional Occupant Name'/>
						<input className='ra-other-occupants-age2 textInputField' value={coOccupant2age} onChange={handleCoOccupant2Age} placeholder='Age'/>
						<input className='ra-other-occupants-relationship2 textInputField' value={coOccupant2Relationship} onChange={handleCoOccupant2Relationship} placeholder='Relationship'/>
					</div>
					<div className="ra-occupant3-container ra-row-container-wrap">
						<input className='ra-other-occupants-name3 textInputField' value={coOccupant3Name} onChange={handleCoOccupant3Name} placeholder='Additional Occupant Name'/>
						<input className='ra-other-occupants-age3 textInputField' value={coOccupant3age} onChange={handleCoOccupant3Age} placeholder='Age'/>
						<input className='ra-other-occupants-relationship3 textInputField' value={coOccupant3Relationship} onChange={handleCoOccupant3Relationship} placeholder='Relationship'/>
					</div>
					<div className="ra-occupant4-container ra-row-container-wrap">
						<input className='ra-other-occupants-name4 textInputField' value={coOccupant4Name} onChange={handleCoOccupant4Name} placeholder='Additional Occupant Name'/>
						<input className='ra-other-occupants-age4 textInputField' value={coOccupant4age} onChange={handleCoOccupant4Age} placeholder='Age'/>
						<input className='ra-other-occupants-relationship4 textInputField' value={coOccupant4Relationship} onChange={handleCoOccupant4Relationship} placeholder='Relationship'/>
					</div>
					<div className="ra-occupant5-container ra-row-container-wrap">
						<input className='ra-other-occupants-name5 textInputField' value={coOccupant5Name} onChange={handleCoOccupant5Name} placeholder='Additional Occupant Name'/>
						<input className='ra-other-occupants-age5 textInputField' value={coOccupant5age} onChange={handleCoOccupant5Age} placeholder='Age'/>
						<input className='ra-other-occupants-relationship5 textInputField' value={coOccupant5Relationship} onChange={handleCoOccupant5Relationship} placeholder='Relationship'/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RentalApp;