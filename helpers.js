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