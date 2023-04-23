import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import "./personalInfo.css";
import piInitialValues from "./schemas/piInitialValues";
import piValidationSchema from "./schemas/piValidationSchema";
import stateOptions from "./schemas/stateOptions.js";
import { months, days, years } from "./schemas/date.js";

const PersonalInfo = () => {
	const initialValues = piInitialValues;

	const validationSchema = piValidationSchema;

	// for testing purposes; remove later; form inputs are captured
	const onSubmit = (values) => {
		localStorage.setItem("personalInfo", JSON.stringify(values));
	};

	return (
		<div className="raWrapper">
			<div className="raContent">
				<h2 className="raFormTitle">Personal Information</h2>
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					{() => (
						<Form>
							<h3 className="raFormSubtitle">Applicant</h3>
							<div className="raOuterFormWrap">
								<div className="raDataFields">
									<Field name="applicantFirstName" placeholder="First Name" className="raInput" />
									<ErrorMessage name="applicantFirstName" component="span" className="raError" />
								</div>
								<div className="raDataFields">
									<Field name="applicantMiddleName" placeholder="Middle Name" className="raInput" />
									<ErrorMessage name="applicantMiddleName" component="span" className="raError" />
								</div>
								<div className="raDataFields">
									<Field name="applicantLastName" placeholder="Last Name" className="raInput" />
									<ErrorMessage name="applicantLastName" component="span" className="raError" />
								</div>

								<div className="raDataFields">
									<Field name="applicantSSN" placeholder="Social Security #" className="raInput" />
									<ErrorMessage name="applicantSSN" component="span" className="raError" />
								</div>
								<div className="raBdayWrap">
									<span className="ra-dob">Date of Birth</span>
									<div>
										<Field name="applicantDOBMonth" as="select" className="raInput">
											{months.map((month) => (
												<option key={month.value} value={month.value}>
													{month.label}
												</option>
											))}
										</Field>
									</div>
									<div>
										<Field name="applicantDOBDay" as="select" className="raInput">
											{days.map((day) => (
												<option key={day.value} value={day.value}>
													{day.label}
												</option>
											))}
										</Field>
									</div>
									<div>
										<Field name="applicantDOBYear" as="select" className="raInput">
											{years.map((year) => (
												<option key={year.value} value={year.value}>
													{year.label}
												</option>
											))}
										</Field>
									</div>
								</div>
								<div className="raDataFields">
									<Field name="applicantPhone" placeholder="Phone #" className="raInput" />
									<ErrorMessage name="applicantPhone" component="span" className="raError" />
								</div>

								<div className="raDataFields">
									<Field name="applicantEmail" placeholder="Email Address" className="raInput" />
									<ErrorMessage name="applicantEmail" component="span" className="raError" />
								</div>
								<div className="raDataFields">
									<Field id="applicantIDNumber" name="applicantIDNumber" placeholder="Driver License or ID #" className="raInput" />
									<ErrorMessage name="applicantIDNumber" component="span" className="raError" />
								</div>
								<div className="raDataFields">
									<Field id="applicantIDState" name="applicantIDState" as="select" className="raInput">
										{stateOptions.map((state) => (
											<option key={state.value} value={state.value}>
												{state.label}
											</option>
										))}
									</Field>
								</div>
							</div>
							<h3 className="raFormSubtitle">Co-Applicant</h3>
							<div className="raOuterFormWrap">
								<div className="raDataFields">
									<Field name="coApplicantFirstName" placeholder="Co-Applicant First Name" className="raInput" />
									<ErrorMessage name="coApplicantFirstName" component="span" className="raError" />
								</div>
								<div className="raDataFields">
									<Field name="coApplicantMiddleName" placeholder="Co-Applicant Middle Name" className="raInput" />
									<ErrorMessage name="coApplicantMiddleName" component="span" className="raError" />
								</div>

								<div className="raDataFields">
									<Field name="coApplicantLastName" placeholder="Co-Applicant Last Name" className="raInput" />
									<ErrorMessage name="coApplicantLastName" component="span" className="raError" />
								</div>
								<div className="raDataFields">
									<Field name="coApplicantSSN" placeholder="Co-Applicant SSN" className="raInput" />
									<ErrorMessage name="coApplicantSSN" component="span" className="raError" />
								</div>
								<div className="raBdayWrap">
									<div>
										<Field name="coApplicantDOBMonth" as="select" className="raInput">
											{months.map((month) => (
												<option key={month.value} value={month.value}>
													{month.label}
												</option>
											))}
										</Field>
									</div>
									<div>
										<Field name="coApplicantDOBDay" as="select" className="raInput">
											{days.map((day) => (
												<option key={day.value} value={day.value}>
													{day.label}
												</option>
											))}
										</Field>
									</div>
									<div>
										<Field name="coApplicantDOBYear" as="select" className="raInput">
											{years.map((year) => (
												<option key={year.value} value={year.value}>
													{year.label}
												</option>
											))}
										</Field>
									</div>
								</div>
								<div className="raDataFields">
									<Field name="coApplicantPhone" placeholder="Co-Applicant Phone" className="raInput" />
									<ErrorMessage name="coApplicantPhone" component="span" className="raError" />
								</div>

								<div className="raDataFields">
									<Field name="coApplicantEmail" placeholder="Co-Applicant Email" className="raInput" />
									<ErrorMessage name="coApplicantEmail" component="span" className="raError" />
								</div>
								<div className="raDataFields">
									<Field name="coApplicantIDNumber" placeholder="Co-Applicant ID Number" className="raInput" />
									<ErrorMessage name="coApplicantIDNumber" component="span" className="raError" />
								</div>
								<div>
									<Field id="coApplicantIDState" name="coApplicantIDState" as="select" className="raInput">
										{stateOptions.map((state) => (
											<option key={state.value} value={state.value}>
												{state.label}
											</option>
										))}
									</Field>
								</div>
							</div>
							<button type="submit" className="raSubmitBtn">
								Submit and Continue
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
export default PersonalInfo;
