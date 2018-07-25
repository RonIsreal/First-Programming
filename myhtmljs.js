elems = document.getElementsByTagName("li");
var w = 0;
while (w<elems.length) {
	console.log('Haiush');
	if(w==10){
		break;
	}
}
console.log("End loop");

//This code counts all the elements in the page that have the <li> tag on them. Looking at the html <ol>, you'll see that you only have 4 listed items
//therefore your JS result will return 4. If you add more, then it'll return the amount of listed items you added.
//You can also add other conditions so you won't loop it forever.

// var myArray = [];
// myArray["Entrance"] = 25;
// myArray["Room"] = 50;
// myArray["Bedroom"] = "coffee";
// myArray["Bathroom"] = 200;

//myArray2 = [1, 2, 40]; //It creates an array with 3 "houses" (because of 3 values specified) and each house has the value you put IN ORDER.
//myArray2.length; //It shows you how many positions (houses) your current array has.

//break; = This command breaks you out of the loop entirely.
//continue; = This command skips the loop when you choose a specific value. For example:

for (i = 0; i < 10; i++) {
	console.log(i);
	if (i===7) {
		break;
	}
}
console.log("I am out of the loop");

//In the code above I break out of the loop whenever I reach i=7;

for (i = 0; i < 10; i++) {
	if (i===5) || (i===3){
		continue;
	}
	console.log(i);
	if (i===7) {
		break;
	}
}
console.log("I am out of the loop");

//In this second code above, the continue code will to run but it'll skip the loop when it reaches 3, going straight to 4 and then it'll skip 5,
//going straight to 6 and so on.
