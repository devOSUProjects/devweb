var ourRequest = new XMLHttpRequest();
var contactInfo = document.getElementById("contacts");

ourRequest.open('GET', 'http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&@phonenumber={rows=3*number={phone|format}}&city={city}');


ourRequest.onload = function() {
	var data = JSON.parse(ourRequest.responseText);
	renderHTML(data);
	
}

function renderHTML(d) {
	for( i = 0; i < d.length; i++ )
	{
		var HTMLString = "";
		HTMLString += "<p>Name: " + d[i].fname + " " + d[i].lname + 
			"<br>City: " + d[i].city + 
			"<br>Contact me at: ";
				

		for( ii = 0; ii < d[i].phonenumber.length; ii++ )
		{
			if( ii == 0 ) {
				HTMLString += d[i].phonenumber[ii].number;
			}
			else {
				HTMLString += " or " + d[i].phonenumber[ii].number;
			}
		}

		HTMLString += "</p>"
		contactInfo.insertAdjacentHTML('beforeend', HTMLString);
	}
}

ourRequest.send();
	
	
