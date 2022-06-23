// helper functions
const timeToString = (data) => {
    let hours = Math.floor(data / 3600);
    data -= hours * 3600;
    let minutes = Math.floor(data / 60);
    data -= minutes * 60;
    let seconds = data;
    return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}

const timeToInt = (data) => {
    if (time0.test(data)) {
        let array = time0.exec(data);
        return parseInt(array[1], 10) * 60 + parseInt(array[2], 10);
    }
    if (time1.test(data)) {
        let array = time1.exec(data);
        return parseInt(array[1], 10) * 60 + parseInt(array[2], 10);
    }
    if (time2.test(data)) {
        let array = time2.exec(data);
        return parseInt(array[1], 10);
    }
    if (time3.test(data)) {
        let array = time3.exec(data);
        return parseInt(array[1], 10);
    }
    if (time4.test(data)) {
        let array = time4.exec(data);
        return parseInt(array[1], 10) * 60;
    }
    alert("This is a problem");
    return 0;

}

const short_name = (group_name) => {
    if(group_name == "Senior-High-Performance") {
	return "Sr HP"
    } else if(group_name == "Senior-Reach") {
	return "Sr Reach"
    } else if(group_name == "Senior-Prep+") {
	return "Sr Prep+"
    } else if(group_name == "Senior-Competetive") {
	return "Sr Comp"
    }
    return ""
}

const group_label = () => {
    grouplabel = ""
    if(globalInfo.groups.length > 1) {
	globalInfo.groups.forEach((group) => {
	    grouplabel += (short_name(group) + ", ")
	});
	grouplabel = grouplabel.slice(0, -2);
    } else if(globalInfo.groups.length == 1) {
	grouplabel = globalInfo.groups[0].replaceAll("-", " ");
    }
    return grouplabel
}
