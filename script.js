function myFunction() {
	var druzynaa= parseFloat(document.getElementById("druzynaa").value);
	var remis = parseFloat(document.getElementById("remis").value);
	var druzynab = parseFloat(document.getElementById("druzynab").value);
const tablica = [];
const net = new brain.NeuralNetwork();
const wyniki = [
{ input: { h: 2.70, d: 3.45, a: 2.36 }, output: { "12": 1 } },
{ input: { h: 1.49, d: 3.60, a: 5.40 }, output: { "1": 1 } },
{ input: { h: 3, d: 2.90, a: 2.21 }, output: { "1X": 1 } },
{ input: { h: 2.12, d: 3.05, a: 3.55 }, output: { "1X": 1 } },
{ input: { h: 1.37, d: 4.10, a: 6.40 }, output: { "1": 1 } },
{ input: { h: 3.10, d: 3.30, a: 2.21 }, output: { "1X": 1 } },
{ input: { h: 1.71, d: 3.25, a: 4.30 }, output: { "1X": 1 } },
{ input: { h: 2.95, d: 3.30, a: 2.06 }, output: { "12": 1 } },
{ input: { h: 24, d: 9.20, a: 1.02 }, output: { "2": 1 } },
{ input: { h: 20, d: 7, a: 10.07 }, output: { "2": 1 } },
{ input: { h: 21, d: 11, a: 1.01 }, output: { "2": 1 } },
{ input: { h: 1.52, d: 3.90, a: 3.95 }, output: { "12": 1 } },
{ input: { h: 1.52, d: 3.90, a: 3.95 }, output: { "12": 1 } },
{ input: { h: 8.80, d: 5, a: 1.25 }, output: { "12": 1 } },
{ input: { h: 1.47, d: 4.10, a: 4.90 }, output: { "12": 1 } },
{ input: { h: 2.30, d: 3.20, a: 2.60 }, output: { "12": 1 } },
{ input: { h: 2.41, d: 3.40, a: 2.50 }, output: { "1X": 1 } },
{ input: { h: .46, d: 3.35, a: 2.46 }, output: { "X2": 1 } },
{ input: { h: 2.85, d: 2.08, a: 3.30 }, output: { "1X": 1 } },
{ input: { h: 2.60, d: 3.15, a: 2.45 }, output: { "X2": 1 } },
{ input: { h: 1.60, d: 4, a: 4.60 }, output: { "1": 1 } },
{ input: { h: 2.06, d: 2.80, a: 3.60 }, output: { "1X": 1 } },
{ input: { h: 2.90, d: 2.80, a: 2.40 }, output: { "X2": 1 } },
{ input: { h: 1.61, d: 3.95, a: 4.30 }, output: { "12": 1 } },
{ input: { h: 40, d: 9.40, a: 1.05 }, output: { "2": 1 } },
{ input: { h: 1.55, d: 3.80, a: 5.80 }, output: { "1": 1 } },
{ input: { h: 7.20, d: 4.40, a: 1.40 }, output: { "2": 1 } },
{ input: { h: 7.80, d: 5, a: 1.25 }, output: { "2": 1 } },
{ input: { h: 1.39, d: 3.75, a: 6.80 }, output: { "1": 1 } },
{ input: { h: 2.24, d: 3.10, a: 3.25 }, output: { "1X": 1 } },
{ input: { h: 1.90, d: 3.05, a: 3.90 }, output: { "1X": 1 } },
{ input: { h: 2.80, d: 3.35, a: 2.36 }, output: { "12": 1 } },
{ input: { h: 1.75, d: 3.35, a: 3.90 }, output: { "X": 1 } },
{ input: { h: 2.85, d: 4.30, a: 1.82 }, output: { "12": 1 } },
{ input: { h: 4.40, d: 3.65, a: 1.58 }, output: { "12": 1 } },
{ input: { h: 1.24, d: 5.00, a: 8.40 }, output: { "1": 1 } },
{ input: { h: 1.41, d: 4.10, a: 5.60 }, output: { "12": 1 } },
{ input: { h: 1.60, d: 3.80, a: 4.10 }, output: { "1": 1 } },
{ input: { h: 1.67, d: 3.90, a: 3.95 }, output: { "1": 1 } },
{ input: { h: 2.34, d: 3.40, a: 2.46 }, output: { "12": 1 } },
{ input: { h: 1.36, d: 4.40, a: 7 }, output: { "12": 1 } },
{ input: { h: 5.80, d: 4.20, a: 1.48 }, output: { "2": 1 } },
{ input: { h: 2.65, d: 2.95, a: 2.55 }, output: { "X": 1 } },
{ input: { h: 1.28, d: 4.20, a: 8.80 }, output: { "1": 1 } },
{ input: { h: 3.45, d: 2.01, a: 2 }, output: { "2": 1 } },
{ input: { h: 6.60, d: 4.50, a: 1.32 }, output: { "12": 1 }},];  
net.train(wyniki,{
	errorThresh: 0.005,  // error threshold to reach before completion
	iterations: 1000,   // maximum training iterations 
	log: true,           // console.log() progress periodically 
	logPeriod: 10,       // number of iterations between logging 
	learningRate: 0.3    // learning rate 
})

const output = net.run({ h: druzynaa, d: remis, a: druzynab }); // { white: 0.99, black: 0.002 }
tablica.push((output['1']),(output['2']),(output['12']),(output['X2']),(output['1X']),(output['X']));
tablica.sort(function(a, b){return b-a});
if (tablica[0] == output['1']) {
	document.getElementById('message').src = "images/1.png";
}
else if (tablica[0] == output['2']) {
	document.getElementById('message').src = "images/2.png";
}
else if (tablica[0] == output['12']) {
	document.getElementById('message').src = "images/12.png";
}
else if (tablica[0] == output['X2']) {
	document.getElementById('message').src = "images/x2.png";
}
else if (tablica[0] == output['1X']) {
	document.getElementById('message').src = "images/1x.png";
}
else if (tablica[0] == output['X']) {
	document.getElementById('message').src = "images/x.png";
}
else {
	console.log(Math.floor(tablica[0].toFixed(10)*100));
}
}