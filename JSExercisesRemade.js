//Exercise 1: Write a JavaScript function to split a string using “a”and convert it into an array of words

function ronSplit(ron){
	var ronArray=ron.split('a');
	return ronArray;
}
console.log(ronSplit('Rabin Singh'));

//Exercise 2: Write a function that receives an array of strings and returns the longest string value

function long(a) {
	i = 0;
	var res = '';
	for(i=0;i<a.length;i++) {
		if (a[i].length>res.length){
			res = a[i];
		}
	}
	return res;
}

//Exercise 3: Write a function that receives an array of strings and returns the shortest string value

function short(a) {
	i = 1;
	var res = a[0];
	for(i=0;i<a.length;i++) {
		if (a[i].length<res.length){
			res = a[i];
		}
	}
	return res;
}

//Exercise 4: Write a function that receives an array of strings and counts the occurrences of letter “a” in each string and sums them. Example: sumA([“lolo”, ”la”, “my name is”]) returns 2

function sumA(a) {
	i = 0;
	var countA = 0;
	var slc;
	while(i<a.length) {
		slc = a[i].split('a');
		if (slc.length>1) {
			countA = countA + (slc.length-1);
		}
		i++;
	}
	return countA;
}

//25/04/2018 EXERCISES

//Exercise 1: Write a JavaScript function to split a string using “a”and convert it into an array of words

function sepB(a) {
	var res = a.split('b');
	return res;
}
console.log(sepB('Rabin Singh'));

//Exercise 2: Write a function that receives an array of strings and repeats the string as many times as its position (starting from 1).

function repS(a) {
	var res = [];
	var i = 1;
	while (i<a.length) {
		res[i] = a[i].repeat(i);
		i++;
	}
	return res;
}

/*Exercise 3: Write a function that receives an array of strings and counts the occurrences of letter “a” and “o” in each string and sums them 
Example: sumAO([“lolo”, ”la”, “my name is”]) returns 4 (2a+2o)*/

function sumAO(a) {
	 var i=0;
	var countAO=0;
	var temp;
	while(i<a.length){
		temp = a[i].split(/\a|\o/); //This is how you split a string into more than 1 parameters. In this case splitting in As and Os
		if (temp.length>1) {
			countAO=countAO+(temp.length-1);
		}
		i++;
	}
	return countAO;
}

//Exercise 4: Create the object Office with whatever attributes it might need to have, for example address, etc. 

function Office(address,floor,owner,country) {
	this.address = address;
	this.floor = floor;
	this.owner = owner;
	this.country = country;
}
var Office ('Ahad Haam',-1,'Avner','Israel')