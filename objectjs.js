// DATA OBJECTS EXERCISES

//Exercise 1: Write a JavaScript function that returns the current year

function show_year() {

	var dt= new Date();

	var my_year=dt.getFullYear();

	return my_year;

}

//Exercise 2: Write a JavaScript function that returns the current day

function show_day() {

	var dt= new Date();

	var my_day=dt.getDate();

	return my_day;

}

//Exercise 3: Write a JavaScript function that shows the current time

function show_hour() {

	var dt= new Date();

	var my_hour=dt.getHours()+':'+dt.getMinutes();

	return my_hour;

}

//Exercise 4: Write a JavaScript function that compares 2 dates and returns the biggest one.

function comp_date() {
	var dt1= new Date();
	var dt2= new Date();
	if (dt1>dt2) {
		return dt1;
	}
	else {
		return dt2;
	}
	
}

//Exercise 5: Write a JavaScript function that compares 2 dates and returns the smallest one.

function comp_dateS() {
	var dt1= new Date();
	var dt2= new Date();
	if (dt1<dt2) {
		return dt1;
	}
	else if (dt1=dt2){
		return 'They are the same';
	}
	else {
		return dt2;
	}
	
}

//Exercise 6: Write a JavaScript function that returns the current date in this format: 24/04/2018, show it on console.

function fullDate() {
	var dt = new Date();
	var fullDate = dt.getDate()+'/'+(dt.getMonth()+1)+'/'+ dt.getFullYear();
	return fullDate;
}

//Exercise 7: Set a Date and then show it on console. The date should show: Tue Sep 19 2026 13:54:34 GMT+0300

var d = new Date();
d.setFullYear(2026);
d.setMonth(8);
d.setDate(19);
d.setHours(13);
d.setMinutes(54);
d.setDay(3);

console.log(d);

//Exercise 8: Set a Date and then show it on console. The date should show: Tue Sep 20 2016 13:54:34 GMT+0300

var d = new Date();
d.setFullYear(2016);
d.setMonth(8);
d.setDate(20);
d.setHours(13);
d.setMinutes(54);
d.setDay(3);

console.log(d);

//Exercise 9: Write a JavaScript function to test whether a date is a weekend in Israel and then another for the rest of the world

function isWkIL(a) {
	var day =a.getDay();
	if ((a.getDate() = 5) || (a.getDate() = 6)) { // Each day has a value in JavaScript. Sunday is 0, Monday is 1...Saturday is 6.
		return 'Weekend!';
	}
	else {
		return 'Weekdays!'
	}
}

function isWkWD(a) {
	var day =a.getDay();
	if ((a.getDate() = 6) || (a.getDate() = 0)) { // Each day has a value in JavaScript. Sunday is 0, Monday is 1...Saturday is 6.
		return 'Weekend!';
	}
	else {
		return 'Weekdays!'
	}
}