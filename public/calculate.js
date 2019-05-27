var grades = [65.95,56.98,78.62,96.1,90.3,72.24,92.34,60.00,81.43,86.22,88.33,9.03,49.93,52.34,53.11, 50.10, 88.88, 55.32, 55.69, 61.68,70.44,70.54,90.0,71.11,80.01];
var max = 0;
var a1 = 0;
var a2 = 0;
var a3 = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var d = 0;
var f = 0;

window.onload = function() 
{
	max = parseFloat(document.getElementById("max").value);
	a1 = parseFloat(document.getElementById("A1").value);
	a2 = parseFloat(document.getElementById("A2").value);
	a3 = parseFloat(document.getElementById("A3").value);
	b1 = parseFloat(document.getElementById("B1").value);
	b2 = parseFloat(document.getElementById("B2").value);
	b3 = parseFloat(document.getElementById("B3").value);
	c1 = parseFloat(document.getElementById("C1").value);
	c2 = parseFloat(document.getElementById("C2").value);
	c3 = parseFloat(document.getElementById("C3").value);
	d = parseFloat(document.getElementById("D").value);
	f = parseFloat(document.getElementById("F").value);
	if (isNaN(max))
		window.alert("Wrong Input Type");
	if (max <= a1)
		window.alert("bounds of letter grade overlap");
	if (isNaN(a1))
		window.alert("Wrong Input Type");
	if (a1 <= a2)
		window.alert("bounds of letter grade overlap");
	if (isNaN(a2))
		window.alert("Wrong Input Type");
	if (a2 <= a3)
		window.alert("bounds of letter grade overlap");
	if (isNaN(a3))
		window.alert("Wrong Input Type");
	if (a3 <= b1)
		window.alert("bounds of letter grade overlap");
	if (isNaN(b1))
		window.alert("Wrong Input Type");
	if (b1 <= b2)
		window.alert("bounds of letter grade overlap");
	if (isNaN(b2))
		window.alert("Wrong Input Type");
	if (b2 <= b3)
		window.alert("bounds of letter grade overlap");
	if (isNaN(b3))
		window.alert("Wrong Input Type");
	if (b3 <= c1)
		window.alert("bounds of letter grade overlap");
	if (isNaN(c1))
		window.alert("Wrong Input Type");
	if (c1 <= c2)
		window.alert("bounds of letter grade overlap");
	if (isNaN(c2))
		window.alert("Wrong Input Type");
	if (c2 <= c3)
		window.alert("bounds of letter grade overlap");
	if (isNaN(c3))
		window.alert("Wrong Input Type");
	if (c3 <= d)
		window.alert("bounds of letter grade overlap");
	if (isNaN(d))
		window.alert("Wrong Input Type");
	if (d <= f)
		window.alert("bounds of letter grade overlap");
	if (isNaN(f))
		window.alert("Wrong Input Type");
	if (f < 0)
		window.alert("bounds of letter grade overlap");


	var i;
	var countA1 = 0;
	var countA2 = 0;
	var countA3 = 0;
	var countB1 = 0;
	var countB2 = 0;
	var countB3 = 0;
	var countC1 = 0;
	var countC2 = 0;
	var countC3 = 0;
	var countD = 0;
	var countF = 0;
	for (i=0;i<grades.length;i++)
	{
		if (grades[i] >= a1)
			countA1++;
		else if(grades[i] < a1 && grades[i] >= a2)
			countA2++;
		else if(grades[i] < a2 && grades[i] >= a3)
			countA3++;
		else if(grades[i] < a3 && grades[i] >= b1)
			countB1++;
		else if(grades[i] < b1 && grades[i] >= b2)
			countB2++;
		else if(grades[i] < b2 && grades[i] >= b3)
			countB3++;
		else if(grades[i] < b3 && grades[i] >= c1)
			countC1++;
		else if(grades[i] < c1 && grades[i] >= c2)
			countC2++;
		else if(grades[i] < c2 && grades[i] >= c3)
			countC3++;
		else if(grades[i] < c3 && grades[i] >= d)
			countD++;
		else if(grades[i] < d && grades[i] >= f)
			countF++;
	}
	document.getElementById("output1").innerHTML = countA1;
	document.getElementById("output2").innerHTML = countA2;
	document.getElementById("output3").innerHTML = countA3;
	document.getElementById("output4").innerHTML = countB1;
	document.getElementById("output5").innerHTML = countB2;
	document.getElementById("output6").innerHTML = countB3;
	document.getElementById("output7").innerHTML = countC1;
	document.getElementById("output8").innerHTML = countC2;
	document.getElementById("output9").innerHTML = countC3;
	document.getElementById("output10").innerHTML = countD;
	document.getElementById("output11").innerHTML = countF;	
};
window.addEventListener('keypress',function myfunction(e)
{
	if (e.keyCode ===13)
	{
		max = parseFloat(document.getElementById("max").value);
		a1 = parseFloat(document.getElementById("A1").value);
		a2 = parseFloat(document.getElementById("A2").value);
		a3 = parseFloat(document.getElementById("A3").value);
		b1 = parseFloat(document.getElementById("B1").value);
		b2 = parseFloat(document.getElementById("B2").value);
		b3 = parseFloat(document.getElementById("B3").value);
		c1 = parseFloat(document.getElementById("C1").value);
		c2 = parseFloat(document.getElementById("C2").value);
		c3 = parseFloat(document.getElementById("C3").value);
		d = parseFloat(document.getElementById("D").value);
		f = parseFloat(document.getElementById("F").value);
		if (isNaN(max))
			window.alert("Wrong Input Type");
		if (max <= a1)
			window.alert("bounds of letter grade overlap");
		if (isNaN(a1))
			window.alert("Wrong Input Type");
		if (a1 <= a2)
			window.alert("bounds of letter grade overlap");
		if (isNaN(a2))
			window.alert("Wrong Input Type");
		if (a2 <= a3)
			window.alert("bounds of letter grade overlap");
		if (isNaN(a3))
			window.alert("Wrong Input Type");
		if (a3 <= b1)
			window.alert("bounds of letter grade overlap");
		if (isNaN(b1))
			window.alert("Wrong Input Type");
		if (b1 <= b2)
			window.alert("bounds of letter grade overlap");
		if (isNaN(b2))
			window.alert("Wrong Input Type");
		if (b2 <= b3)
			window.alert("bounds of letter grade overlap");
		if (isNaN(b3))
			window.alert("Wrong Input Type");
		if (b3 <= c1)
			window.alert("bounds of letter grade overlap");
		if (isNaN(c1))
			window.alert("Wrong Input Type");
		if (c1 <= c2)
			window.alert("bounds of letter grade overlap");
		if (isNaN(c2))
			window.alert("Wrong Input Type");
		if (c2 <= c3)
			window.alert("bounds of letter grade overlap");
		if (isNaN(c3))
			window.alert("Wrong Input Type");
		if (c3 <= d)
			window.alert("bounds of letter grade overlap");
		if (isNaN(d))
			window.alert("Wrong Input Type");
		if (d <= f)
			window.alert("bounds of letter grade overlap");
		if (isNaN(f))
			window.alert("Wrong Input Type");
		if (f < 0)
			window.alert("bounds of letter grade overlap");
		countA1 = 0;
		countA2 = 0;
		countA3 = 0;
		countB1 = 0;
		countB2 = 0;
		countB3 = 0;
		countC1 = 0;
		countC2 = 0;
		countC3 = 0;
		countD = 0;
		countF = 0;
		var i;
		for (i=0;i<grades.length;i++)
		{
			if (grades[i] >= a1)
				countA1++;
			else if(grades[i] < a1 && grades[i] >= a2)
				countA2++;
			else if(grades[i] < a2 && grades[i] >= a3)
				countA3++;
			else if(grades[i] < a3 && grades[i] >= b1)
				countB1++;
			else if(grades[i] < b1 && grades[i] >= b2)
				countB2++;
			else if(grades[i] < b2 && grades[i] >= b3)
				countB3++;
			else if(grades[i] < b3 && grades[i] >= c1)
				countC1++;
			else if(grades[i] < c1 && grades[i] >= c2)
				countC2++;
			else if(grades[i] < c2 && grades[i] >= c3)
				countC3++;
			else if(grades[i] < c3 && grades[i] >= d)
				countD++;
			else if(grades[i] < d && grades[i] >= f)
				countF++;
		}
		document.getElementById("output1").innerHTML = countA1;
		document.getElementById("output2").innerHTML = countA2;
		document.getElementById("output3").innerHTML = countA3;
		document.getElementById("output4").innerHTML = countB1;
		document.getElementById("output5").innerHTML = countB2;
		document.getElementById("output6").innerHTML = countB3;
		document.getElementById("output7").innerHTML = countC1;
		document.getElementById("output8").innerHTML = countC2;
		document.getElementById("output9").innerHTML = countC3;
		document.getElementById("output10").innerHTML = countD;
		document.getElementById("output11").innerHTML = countF;
	}
})


