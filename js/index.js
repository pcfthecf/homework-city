// 1. Get value of input field (city name, abbreviation, nickname)
// 2. Submit value via button (.click)
// 3. If city = inputX --> change background to corresponding image for inputX
// 4. Establish conditionals for input1 – name, abbreviation, nickname
// 5. Else if city = inputY --> change background to corresponding image for inputY
// 6. Repeat for function for all cities defined in var city

$(document).ready(function(){

	$('#submit-btn').click(function(){

		//prevent page refresh
		event.preventDefault();

		var city = $('#city-type').val();
		$('#city-type').val(''); //reset user input field after submission

		//change background for ny
		if(city == 'new york city' || city == 'new york' || city =='nyc'){
			$('body').attr('class','nyc');
		}

		//change background for la
		else if(city == 'los angeles' || city == 'la' || city =='lax'){
			$('body').attr('class', 'la');
		}

		//change background for sf
		else if(city == 'san francisco' || city == 'sf' || city =='bay area'){
			$('body').attr('class', 'sf');
		}

		//change background for austin
		else if(city == 'austin' || city == 'atx'){
			$('body').attr('class', 'austin');
		}

		//change background for sydney
		else if(city == 'sydney' || city == 'syd'){
			$('body').attr('class', 'sydney');
		}

	})
})


