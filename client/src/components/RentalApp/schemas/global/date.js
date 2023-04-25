//! This file is used to supply data for the dropdowns for the date of birth

// creates an array for the months from 1 to 12
// formats them as {value: "01", label: "01"} and pushes them to the array
// if the month is less than 10, it adds a 0 in front of it
const months = [{ value: "", label: "MM" }]; // will be the default value on the dropdown
for (let i = 1; i <= 12; i++) {
	const value = i < 10 ? `0${i}` : `${i}`;
	months.push({ value, label: value });
}

// creates an array for the days from 1 to 31
// formats them as {value: "01", label: "01"} and pushes them to the array
// if the day is less than 10, it adds a 0 in front of it
const days = [{ value: "", label: "DD" }];  // will be the default value on the dropdown
for (let i = 1; i <= 31; i++) {
	const value = i < 10 ? `0${i}` : `${i}`;
	days.push({ value, label: value });
}

// creates an array for the years from 1900 to 2023
// formats them as {value: "1900", label: "1900"}
const years = [{ value: "", label: "YYYY" }];  // will be the default value on the dropdown
for (let i = 2023; i >= 1900; i--) {
	years.push({ value: i.toString(), label: i.toString() });
}

export { months, days, years };
