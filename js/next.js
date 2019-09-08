var ourRequest = new XMLHttpRequest();
var contactInfo = document.getElementById("contacts");

ourRequest.open('GET', 'http://www.filltext.com/?rows=5&name=[%22Fluffy%22,%20%22Wiggles%22,%20%22Waggles%22,%20%22Shorty%22,%20%22Barky%22,%20%22Pickles%22,%20%22Harry%22]&FoodBrand=[%22Kibbles%20%27n%20Bits%22,%20%22Beneful%22,%20%22Milk-Bone%22]&picture=https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg');


ourRequest.onload = function() {
	var data = JSON.parse(ourRequest.responseText);
	renderHTML(data);
	
}

function renderHTML(d) {
	var rawTemplate = document.getElementById("dogsTemplate").innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(d);
	
	var dogContainer = document.getElementById("dogs");
	dogContainer.innerHTML = ourGeneratedHTML;
}

ourRequest.send();
	
	
