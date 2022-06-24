// save to db
function saveJson() {
    fetch('https://lively-mud-8fe8731b4065481abf4cebb8e3fcc455.azurewebsites.net/workout', {
	method: 'POST', // or 'PUT'
	headers: {
	    'Content-Type': 'application/json',
	},
	body: JSON.stringify(globalInfo),
    })
	.then(response => response.json())
	.then(data => {
	    console.log('Success:', data);
	})
	.catch(error => {
	    console.error('Error:', error);
	});
}

// load from db
function loadJson() {
    url = `https://lively-mud-8fe8731b4065481abf4cebb8e3fcc455.azurewebsites.net/workout?date=${globalInfo.date}&group=${globalInfo.groups.join('')}&time=${globalInfo.time_of_day}`
    console.log(url);
    fetch(url, {
	method: 'GET',
    })
	.then(response => response.json())
	.then(data => {
	    console.log('Success:', data);
	})
	.catch(error => {
	    console.log('Error:', error);
	});
}
