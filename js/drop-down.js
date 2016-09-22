//	1. Add cities to index
//	2. 

$(document).ready(function(){

	event.preventDefault();

	//var city = $('#city-type').val();
	cities = ['nyc', 'la', 'sf', 'atx', 'syd'];
	//city.push('ldn'); --> TEST
	
	cities.forEach(function(element, index){

		$('select').append('<option value='+element+'>'+element+'</option>');
	})


	$('select').change(changeBackground);
		function changeBackground(){

		var city = $('#city-type').val();

		if(city =='nyc'){
			$('body').attr('class', 'nyc');
		}

		else if (city == 'la'){
			$('body').attr('class', 'la');
		}

		else if (city == 'sf'){
			$('body').attr('class', 'sf');
		}

		else if (city == 'atx'){
			$('body').attr('class', 'austin');
		}

		else if (city == 'syd'){
			$('body').attr('class', 'sydney');
		}
	
	}
})



// $(this).val()