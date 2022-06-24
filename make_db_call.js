// save to db
function saveJson() {
    fetch('https://lively-mud-8fe8731b4065481abf4cebb8e3fcc455.azurewebsites.net/workout', {
    // fetch('http://127.0.0.1:5000/workout', {
	method: 'PUT',
	headers: {
	    'Content-Type': 'application/json'
	},
	body: JSON.stringify(globalInfo)
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
    // url = `http://127.0.0.1:5000/workout?date=${globalInfo.date}&group=${globalInfo.groups.join('')}&time=${globalInfo.time_of_day}`
    fetch(url, {
	method: 'GET',
    })
	.then(response => response.json())
	.then(data => {
	    console.log(data);
	})
	.catch(error => {
	    console.error('Error:', error);
	});
}
