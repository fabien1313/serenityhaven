import * as yup from "yup";

const aoValidationSchema = yup.object().shape({
	coOccupant1FullName: yup.string(),
	coOccupant1Age: yup.string().matches(/^([0-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/, { message: 'Age must be between 0 and 120', excludeEmptyString: true }),
	coOccupant1Relationship: yup.string(),
	coOccupant2FullName: yup.string(),
	coOccupant2Age: yup.string().matches(/^([0-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/, { message: 'Age must be between 0 and 120', excludeEmptyString: true }),
	coOccupant2Relationship: yup.string(),
	coOccupant3FullName: yup.string(),
	coOccupant3Age: yup.string().matches(/^([0-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/, { message: 'Age must be between 0 and 120', excludeEmptyString: true }),
	coOccupant3Relationship: yup.string(),
	coOccupant4FullName: yup.string(),
	coOccupant4Age: yup.string().matches(/^([0-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/, { message: 'Age must be between 0 and 120', excludeEmptyString: true }),
	coOccupant4Relationship: yup.string(),
	coOccupant5FullName: yup.string(),
	coOccupant5Age: yup.string().matches(/^([0-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/, { message: 'Age must be between 0 and 120', excludeEmptyString: true }),
	coOccupant5Relationship: yup.string(),
    isPet1: yup.string(),
	typeOfPet1: yup.string(),
	pet1License: yup.string(),
	isPet2: yup.string(),
	typeOfPet2: yup.string(),
	pet2License: yup.string(),
	isPet3: yup.string(),
	typeOfPet3: yup.string(),
	pet3License: yup.string(),

});

export default aoValidationSchema;