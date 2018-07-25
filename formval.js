var username = 'RonnyEdel';
var email = 'ronedels85@gmail.com';
var pw = 'RonnyCodes123';
var phone = '0548020202';

var resu = username.match(/^[a-zA-Z\d]{5,15}$/);
var rese = email.match(/^([a-z\d\.\-_]+)@([a-z\d-]+)\.([a-z]+)$/i);
var resp = pw.match(/^[a-zA-Z\d\-\_\@]{8,20}$/);
var rest = phone.match(/^\d{10}$/);


console.log(username.match(resu));
console.log(email.match(rese));
console.log(pw.match(resp));
console.log(phone.match(rest));

