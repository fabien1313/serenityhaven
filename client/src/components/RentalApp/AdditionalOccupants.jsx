import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import "./additionalOccupant.css";
import aoInitialValues from "./schemas/aoInitialValues";
import aoValidationSchema from "./schemas/aoValidationSchema";

const AdditionalOccupants = () => {
	const initialValues = aoInitialValues

	const validationSchema = aoValidationSchema;

	// for testing purposes; remove later; form inputs are captured
	const onSubmit = (values) => {
		localStorage.setItem("additionalOccupants", JSON.stringify(values));
	};

	return (
		<div className="aoWrapper">
			<div className="aoContent">
				<h2 className="aoFormTitle">Additional Occupants</h2>
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					{() => (
						<Form>
							<h3 className="aoFormSubtitle">Additional Occupants</h3>
							<h5 className="aoFormSubSubtitle">(Please list all other occupants who will live here.)</h5>
							<h5 className="aoFormSubSubtitle">(If no other occupants, leave form blank.)</h5>
							<div className="aoOuterFormWrap">
								<div className="aoDataFields">
									<Field name="coOccupant1FullName" placeholder="Full Name" className="aoInput" />
									<div className="aoAgeWrap">
										<Field name="coOccupant1Age" placeholder="Age" className="aoInput" />
										<ErrorMessage name="coOccupant1Age" component="span" className="aoError important" />
									</div>
									<Field name="coOccupant1Relationship" placeholder="Relationship" className="aoInput" />
								</div>
								<div className="aoDataFields">
									<Field name="coOccupant2FullName" placeholder="Full Name" className="aoInput" />
									<div className="aoAgeWrap">
										<Field name="coOccupant2Age" placeholder="Age" className="aoInput" />
										<ErrorMessage name="coOccupant2Age" component="span" className="aoError" />
									</div>
									<Field name="coOccupant2Relationship" placeholder="Relationship" className="aoInput" />
								</div>
								<div className="aoDataFields">
									<Field name="coOccupant3FullName" placeholder="Full Name" className="aoInput" />
									<div className="aoAgeWrap">
										<Field name="coOccupant3Age" placeholder="Age" className="aoInput" />
										<ErrorMessage name="coOccupant3Age" component="span" className="aoError" />
									</div>
									<Field name="coOccupant3Relationship" placeholder="Relationship" className="aoInput" />
								</div>
								<div className="aoDataFields">
									<Field name="coOccupant4FullName" placeholder="Full Name" className="aoInput" />
									<div className="aoAgeWrap">
										<Field name="coOccupant4Age" placeholder="Age" className="aoInput" />
										<ErrorMessage name="coOccupant4Age" component="span" className="aoError" />
									</div>
									<Field name="coOccupant4Relationship" placeholder="Relationship" className="aoInput" />
								</div>
								<div className="aoDataFields">
									<Field name="coOccupant5FullName" placeholder="Full Name" className="aoInput" />
									<div className="aoAgeWrap">
										<Field name="coOccupant5Age" placeholder="Age" className="aoInput" />
										<ErrorMessage name="coOccupant5Age" component="span" className="aoError" />
									</div>
									<Field name="coOccupant5Relationship" placeholder="Relationship" className="aoInput" />
								</div>
							</div>
							<div className="aoOuterFormWrap">
								<h3 className="aoFormSubtitle">Pets</h3>
								<h5 className="aoFormSubSubtitle">(All pets must be approved. $500 security deposit for each.)</h5>
								<div className="aoPetOuterWrap">
									<div className="aoPetInnerWrap">
										<label htmlFor="isPet1" className="aoFieldLabels">
											Do you have a pet?
										</label>
										<Field id="isPet1" name="isPet1" as="select" className="aoInput">
											<option value="">N/A</option>
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</Field>
									</div>
									<div className="aoPetInnerWrap">
										<label htmlFor="typeOfPet1" className="aoFieldLabels">
											Type of Pet
										</label>
										<Field id="typeOfPet1" name="typeOfPet1" as="select" className="aoInput">
											<option value="">N/A</option>
											<option value="dog">Dog</option>
											<option value="cat">Cat</option>
											<option value="bird">Bird</option>
											<option value="fish">Fish</option>
											<option value="reptile">Reptile</option>
											<option value="other">Other</option>
										</Field>
									</div>
									<div className="aoPetInnerWrap2">
										<Field name="pet1License" type="text" placeholder="License Number" className="aoInput" />
									</div>
								</div>
								<div className="aoPetOuterWrap">
									<div className="aoPetInnerWrap">
										<label htmlFor="isPet2" className="aoFieldLabels">
											Additional Pet?
										</label>
										<Field id="isPet2" name="isPet2" as="select" className="aoInput">
											<option value="">N/A</option>
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</Field>
									</div>
									<div className="aoPetInnerWrap">
										<label htmlFor="typeOfPet2" className="aoFieldLabels">
											Type of Pet
										</label>
										<Field id="typeOfPet2" name="typeOfPet2" as="select" className="aoInput">
											<option value="">N/A</option>
											<option value="dog">Dog</option>
											<option value="cat">Cat</option>
											<option value="bird">Bird</option>
											<option value="fish">Fish</option>
											<option value="reptile">Reptile</option>
											<option value="other">Other</option>
										</Field>
									</div>
									<div className="aoPetInnerWrap2">
										<Field name="pet2License" type="text" placeholder="License Number" className="aoInput" />
									</div>
								</div>
								<div className="aoPetOuterWrap">
									<div className="aoPetInnerWrap">
										<label htmlFor="isPet3" className="aoFieldLabels">
											Additional Pet?
										</label>
										<Field id="isPet3" name="isPet3" as="select" className="aoInput">
											<option value="">N/A</option>
											<option value="yes">Yes</option>
											<option value="no">No</option>
										</Field>
									</div>
									<div className="aoPetInnerWrap">
										<label htmlFor="typeOfPet3" className="aoFieldLabels">
											Type of Pet
										</label>
										<Field id="typeOfPet3" name="typeOfPet3" as="select" className="aoInput">
											<option value="">N/A</option>
											<option value="dog">Dog</option>
											<option value="cat">Cat</option>
											<option value="bird">Bird</option>
											<option value="fish">Fish</option>
											<option value="reptile">Reptile</option>
											<option value="other">Other</option>
										</Field>
									</div>
									<div className="aoPetInnerWrap2">
										<Field name="pet3License" type="text" placeholder="License Number" className="aoInput" />
									</div>
								</div>
							</div>
							<button type="submit" className="aoSubmitBtn">
								Submit and Continue
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
export default AdditionalOccupants;
