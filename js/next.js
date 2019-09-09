var dogData =
		[
			{
				"name": "Fluffy",
				"food": "Beneful",
				"picture": "https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__340.jpg"
			},
			{
				"name": "Pickles",
				"food": "Pedigree",
				"picture": "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg"
			},
			{
				"name": "Waffles",
				"food": "Cesar",
				"picture": "https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281__340.jpg"
			}
		];

renderHTML(dogData);
	

function renderHTML(d) {
	var rawTemplate = document.getElementById("dogsTemplate").innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(d);
	
	var dogContainer = document.getElementById("dogs");
	dogContainer.innerHTML = ourGeneratedHTML;
}

	
	
