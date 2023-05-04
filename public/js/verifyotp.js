'use strict';

function getotp(){

var x = document.getElementById('m_num').value;
console.log(x);
    

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		Token: 'undefined',
// 		'X-RapidAPI-Key': 'c5c672a559msh452ce13690d1c64p16a716jsnf2f2c6544e0f',
// 		'X-RapidAPI-Host': 'd7-verify.p.rapidapi.com'
// 	},
// 	body: '{"originator":"SignOTP","recipient":"+9715097525xx","content":"Greetings from D7 API, your mobile verification code is: {}","expiry":"600","data_coding":"text"}'
// };

// fetch('https://d7-verify.p.rapidapi.com/verify/v1/otp/send-otp', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




var y = document.getElementById('m_num').value;
var z = document.getElementById('c_otp').value;
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		Token: 'undefined',
		'X-RapidAPI-Key': 'c5c672a559msh452ce13690d1c64p16a716jsnf2f2c6544e0f',
		'X-RapidAPI-Host': 'd7-verify.p.rapidapi.com'
	},
	body: '{"originator":"SignOTP","recipient":"y":"Greetings from D7 API, your mobile verification code is: {}","expiry":"600","data_coding":"text"}'
};

var z = fetch('https://d7-verify.p.rapidapi.com/verify/v1/otp/send-otp', )
	z.then(response => response.json())
	z.then(response => console.log(response))
	z.catch(err => console.error(err));
}
