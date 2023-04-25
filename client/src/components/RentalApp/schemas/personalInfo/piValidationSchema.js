import * as yup from "yup";

const pivalidationSchema = yup.object().shape({
	applicantFirstName: yup.string().required("Required"),
	applicantMiddleName: yup.string().required("Required"),
	applicantLastName: yup.string().required("Required"),
	applicantSSN: yup.string().matches(/^[0-9]\d{8}$/, {message: "Must be 9 digits.", excludeEmptyString: false}).required('Required'),
	applicantPhone: yup.string().matches(/^[0-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required('Required'),
	applicantEmail: yup.string().email("Please enter a valid email").required("Required"),
	applicantIDNumber: yup.string().required("Required"),
	coApplicantFirstName: yup.string(),
	coApplicantMiddleName: yup.string(),
	coApplicantLastName: yup.string(),
	coApplicantSSN: yup.string().matches(/^[0-9]\d{8}$/, {message: "Must be 9 digits.", excludeEmptyString: false}),
	coApplicantPhone: yup.string().matches(/^[0-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}),
	coApplicantEmail: yup.string().email("Please enter a valid email"),
	coApplicantIDNumber: yup.string(),
});

export default pivalidationSchema;
