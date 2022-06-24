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
	    alert(`Succesfully uploaded workout with id ${data.id}!`);
	})
	.catch(error => {
	    alert(`Error: ${error}`);
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
	    document.getElementById('title').value = data.title;
	    set_text = "";
	    data.sets.forEach((set) => {
		if(set.des) {
		    set_text += `// ${set.des}\n`;
		}
		if(set.rounds > 1) {
		    set_text += `${set.rounds} x {\n`;
		}
		set.lines.forEach((line) => {
		    set_text += `${line.rep} x ${line.dis} @ ${line.int} ${line.des}\n`;
		    line.notes.forEach((note) => {
			set_text += `-- ${note}\n`
		    });
		});
		if(set.rounds > 1) {
		    set_text += `}\n`;
		}
		set_text += '\n';
	    });
	    document.getElementById('workout').value = set_text;
	    process();
	})
	.catch(error => {
	    alert('Error:', error);
	});
}
