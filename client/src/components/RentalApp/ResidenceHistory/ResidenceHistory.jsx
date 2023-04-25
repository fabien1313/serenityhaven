import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import "./residenceHistory.css";
import rhInitialValues from "../schemas/residenceHistory/rhInitialValues";
import rhValidationSchema from "../schemas/residenceHistory/rhValidationSchema";
import { months, days, years } from "../schemas/global/date.js";
import stateOptions from "../schemas/global/stateOptions.js";

const ResidenceHistory = () => {
	const initialValues = rhInitialValues;

	const validationSchema = rhValidationSchema;

	// for testing purposes; remove later; form inputs are captured
	const onSubmit = (values) => {
		localStorage.setItem("residenceHistory", JSON.stringify(values));
	};

	return (
		<div className="rhWrapper">
			<div className="rhContent">
				<h2 className="rhFormTitle">Residence History</h2>
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					{() => (
						<Form>
							<div className="rhOuterFormWrap">
								<h5 className="rhFormSubSubtitle">Current Address</h5>
								<div className="rhInnerFormWrap">
									<div className="rhErrorContainer">
										<ErrorMessage name="rhCurrentAddress" component="span" className="rhError" />
										<Field name="rhCurrentAddress" placeholder="Street Address" className="rhCurrentStreetAddress" />
									</div>
								</div>
								<div className="rhInnerFormWrap">
									<div className="rhErrorContainer">
										<ErrorMessage name="rhCurrentCity" component="span" className="rhError" />
										<Field name="rhCurrentCity" placeholder="City" className="rhInput" />
									</div>
									<div className="rhErrorContainer">
										<ErrorMessage name="rhCurrentState" component="span" className="rhError" />
										<Field name="rhCurrentState" as="select" className="rhInput">
											{stateOptions.map((state) => (
												<option key={state.value} value={state.value}>
													{state.label}
												</option>
											))}
										</Field>
									</div>
									<div className="rhErrorContainer">
										<ErrorMessage name="rhCurrentZip" component="span" className="rhError" />
										<Field name="rhCurrentZip" placeholder="Zip" className="rhInput" />
									</div>
								</div>

								<div className="rhLandlordOuterWrap">
									<div className="rhLandlordInnerWrap">
										<div className="rhErrorContainer">
											<ErrorMessage name="rhCurrentLandlord" component="span" className="rhError" />
											<Field name="rhCurrentLandlord" placeholder="Landlord Name" className="rhInput rhLandlordField" />
										</div>
										<div className="rhErrorContainer">
											<ErrorMessage name="rhCurrentLandlordPhone" component="span" className="rhError" />
											<Field name="rhCurrentLandlordPhone" placeholder="Landlord Phone" className="rhInput rhLandlordField" />
										</div>
										<div className="rhErrorContainer">
											<ErrorMessage name="rhCurrentMonthlyRent" component="span" className="rhError" />
											<Field name="rhCurrentMonthlyRent" placeholder="Rent $ / month" className="rhInput rhLandlordField" />
										</div>
									</div>
								</div>
								<div className="rhLandlordTextField">
									<div className="rhErrorContainer">
										<Field name="rhCurrentReasonForLeaving" placeholder="Reason for Moving" component="textarea" rows={2} className="rhInput rhLandlordTextField" />
									</div>
								</div>
								<div className="rhTimeFrameWrap">
									<span className="rhTimeFrame">From:</span>
									<div className="rhErrorContainer">
										<ErrorMessage name="rhCurrentFromMonth" component="span" className="rhError" />
										<Field name="rhCurrentFromMonth" as="select" className="rhDateInput">
											{months.map((month) => (
												<option key={month.value} value={month.value}>
													{month.label}
												</option>
											))}
										</Field>
									</div>
									<div className="rhErrorContainer">
										<ErrorMessage name="rhCurrentFromDay" component="span" className="rhError" />
										<Field name="rhCurrentFromDay" as="select" className="rhDateInput">
											{days.map((day) => (
												<option key={day.value} value={day.value}>
													{day.label}
												</option>
											))}
										</Field>
									</div>
									<div className="rhErrorContainer">
										<ErrorMessage name="rhCurrentFromYear" component="span" className="rhError" />
										<Field name="rhCurrentFromYear" as="select" className="rhDateInput">
											{years.map((year) => (
												<option key={year.value} value={year.value}>
													{year.label}
												</option>
											))}
										</Field>
									</div>
								</div>
								<div className="rhTimeFrameWrap">
									<span className="rhTimeFrame">To:</span>
									<div>
										<ErrorMessage name="rhCurrentToMonth" component="span" className="rhError" />
										<Field name="rhCurrentToMonth" as="select" className="rhDateInput">
											{months.map((month) => (
												<option key={month.value} value={month.value}>
													{month.label}
												</option>
											))}
										</Field>
									</div>
									<div>
										<ErrorMessage name="rhCurrentToDay" component="span" className="rhError" />
										<Field name="rhCurrentToDay" as="select" className="rhDateInput">
											{days.map((day) => (
												<option key={day.value} value={day.value}>
													{day.label}
												</option>
											))}
										</Field>
									</div>
									<div>
										<ErrorMessage name="rhCurrentToYear" component="span" className="rhError" />
										<Field name="rhCurrentToYear" as="select" className="rhDateInput">
											{years.map((year) => (
												<option key={year.value} value={year.value}>
													{year.label}
												</option>
											))}
										</Field>
									</div>
								</div>
							</div>

							<div className="rhOuterFormWrap">
								<h5 className="rhFormSubSubtitle">Previous Address 1</h5>

								<div className="rhInnerFormWrap">
									<Field name="rhPreviousAddress1" placeholder="Street Address" className="rhCurrentStreetAddress" />
								</div>
								<div className="rhInnerFormWrap">
									<Field name="rhPreviousCity1" placeholder="City" className="rhInput" />
									<div className="rhErrorContainer">
										<Field name="rhPreviousState1" as="select" className="rhInput">
											{stateOptions.map((state) => (
												<option key={state.value} value={state.value}>
													{state.label}
												</option>
											))}
										</Field>
									</div>
									<Field name="rhPreviousZip1" placeholder="Zip" className="rhInput" />
								</div>
								<div className="rhTimeFrameOuterWrap">
									<div className="rhTimeFrameWrap">
										<span className="rhTimeFrame">From:</span>
										<div>
											<Field name="rhPreviousFromMonth1" as="select" className="rhDateInput">
												{months.map((month) => (
													<option key={month.value} value={month.value}>
														{month.label}
													</option>
												))}
											</Field>
										</div>
										<div>
											<Field name="rhPreviousFromDay1" as="select" className="rhDateInput">
												{days.map((day) => (
													<option key={day.value} value={day.value}>
														{day.label}
													</option>
												))}
											</Field>
										</div>
										<div>
											<Field name="rhPreviousFromYear1" as="select" className="rhDateInput">
												{years.map((year) => (
													<option key={year.value} value={year.value}>
														{year.label}
													</option>
												))}
											</Field>
										</div>
									</div>
									<div className="rhTimeFrameWrap">
										<span className="rhTimeFrame">To:</span>
										<div>
											<Field name="rhPreviousToMonth1" as="select" className="rhDateInput">
												{months.map((month) => (
													<option key={month.value} value={month.value}>
														{month.label}
													</option>
												))}
											</Field>
										</div>
										<div>
											<Field name="rhPreviousToDay1" as="select" className="rhDateInput">
												{days.map((day) => (
													<option key={day.value} value={day.value}>
														{day.label}
													</option>
												))}
											</Field>
										</div>
										<div>
											<Field name="rhPreviousToYear1" as="select" className="rhDateInput">
												{years.map((year) => (
													<option key={year.value} value={year.value}>
														{year.label}
													</option>
												))}
											</Field>
										</div>
									</div>
								</div>
								<div className="rhLandlordOuterWrap">
									<div className="rhLandlordInnerWrap">
										<Field name="rhPreviousLandlord1" placeholder="Landlord Name" className="rhInput rhLandlordField" />
										<Field name="rhPreviousLandlordPhone1" placeholder="Landlord Phone" className="rhInput rhLandlordField" />
										<Field name="rhPreviousMonthlyRent1" placeholder="Rent $ / month" className="rhInput rhLandlordField" />
									</div>
									<div className="rhLandlordInnerWrap">
										<Field name="rhPreviousReasonForLeaving1" placeholder="Reason for Moving" component="textarea" rows={2} className="rhInput rhLandlordTextField" />
									</div>
								</div>
							</div>

							<div className="rhOuterFormWrap">
								<h5 className="rhFormSubSubtitle">Previous Address 2</h5>
								<div className="rhInnerFormWrap">
									<Field name="rhPreviousAddress2" placeholder="Street Address" className="rhCurrentStreetAddress" />
								</div>
								<div className="rhInnerFormWrap">
									<Field name="rhPreviousCity2" placeholder="City" className="rhInput" />
									<div className="rhErrorContainer">
										<Field name="rhPreviousState2" as="select" className="rhInput">
											{stateOptions.map((state) => (
												<option key={state.value} value={state.value}>
													{state.label}
												</option>
											))}
										</Field>
									</div>
									<Field name="rhPreviousZip2" placeholder="Zip" className="rhInput" />
								</div>
								<div className="rhTimeFrameOuterWrap">
									<div className="rhTimeFrameWrap">
										<span className="rhTimeFrame">From:</span>
										<div>
											<Field name="rhPreviousFromMonth2" as="select" className="rhDateInput">
												{months.map((month) => (
													<option key={month.value} value={month.value}>
														{month.label}
													</option>
												))}
											</Field>
										</div>
										<div>
											<Field name="rhPreviousFromDay2" as="select" className="rhDateInput">
												{days.map((day) => (
													<option key={day.value} value={day.value}>
														{day.label}
													</option>
												))}
											</Field>
										</div>
										<div>
											<Field name="rhPreviousFromYear2" as="select" className="rhDateInput">
												{years.map((year) => (
													<option key={year.value} value={year.value}>
														{year.label}
													</option>
												))}
											</Field>
										</div>
									</div>
									<div className="rhTimeFrameWrap">
										<span className="rhTimeFrame">To:</span>
										<div>
											<Field name="rhPreviousToMonth2" as="select" className="rhDateInput">
												{months.map((month) => (
													<option key={month.value} value={month.value}>
														{month.label}
													</option>
												))}
											</Field>
										</div>
										<div>
											<Field name="rhPreviousToDay2" as="select" className="rhDateInput">
												{days.map((day) => (
													<option key={day.value} value={day.value}>
														{day.label}
													</option>
												))}
											</Field>
										</div>
										<div>
											<Field name="rhPreviousToYear2" as="select" className="rhDateInput">
												{years.map((year) => (
													<option key={year.value} value={year.value}>
														{year.label}
													</option>
												))}
											</Field>
										</div>
									</div>
								</div>
								<div className="rhLandlordOuterWrap">
									<div className="rhLandlordInnerWrap">
										<Field name="rhPreviousLandlord2" placeholder="Landlord Name" className="rhInput rhLandlordField" />
										<Field name="rhPreviousLandlordPhone2" placeholder="Landlord Phone" className="rhInput rhLandlordField" />
										<Field name="rhPreviousMonthlyRent2" placeholder="Rent $ / month" className="rhInput rhLandlordField" />
									</div>
									<div className="rhLandlordInnerWrap">
										<Field name="rhPreviousReasonForLeaving2" placeholder="Reason for Moving" component="textarea" rows={2} className="rhInput rhLandlordTextField" />
									</div>
								</div>
							</div>
							<button type="submit" className="rhSubmitBtn">
								Submit and Continue
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default ResidenceHistory;
