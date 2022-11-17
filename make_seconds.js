// use our custom object to create a seconds file to use in the app
const makeSeconds = () => {
    const globalRestBetween = document.getElementById("restInterval").value;
    let seconds = {};
    seconds._type = "pack";
    seconds.name = "Shared Timers";
    seconds.items = [];
    let folder = {};
    folder._type = "pack";
    folder.name = group_label() + " " + globalInfo.date;
    folder.color = 3;
    folder.items = [];
    globalInfo.sets.forEach(setItem => {
        let set = {};
        set.overrun = false;
        set._type = "cust";
        set.type = 0;
        set.name = setItem.des;
        set.soundScheme = 1;
        set.activity = 46;
        set.intervals = [];
        for (let i = 0; i < setItem.rounds; i++) {
            setItem.lines.forEach(line => {
                for (let j = 0; j < line.rep; j++) {
                    let secondsLine = {};
                    secondsLine.splitRest = 0;
                    secondsLine.ducked = false;
                    secondsLine.rest = false;
                    secondsLine.color = (globalColor % 9) + 1;
                    secondsLine.indefinite = false;
                    secondsLine.split = false;
                    secondsLine.vibration = false;
                    secondsLine.halfwayAlert = false;
                    secondsLine.duration = timeToInt(line.int);
                    secondsLine._type = "int";
                    secondsLine.name = (line.dis > 0 ? line.dis + " " : "") + line.des;

                    set.intervals.push(secondsLine);
                }
                globalColor++;
            });
        }
        folder.items.push(set);
    });

    let wholeWorkout = {};
    wholeWorkout.overrun = false;
    wholeWorkout._type = "cust";
    wholeWorkout.type = 0;
    wholeWorkout.name = "Everything";
    wholeWorkout.soundScheme = 1;
    wholeWorkout.activity = 46;
    wholeWorkout.intervals = [];
    globalInfo.sets.forEach(setItem => {
        let restLine = {};
        restLine.splitRest = 0;
        restLine.ducked = false;
        restLine.rest = false;
        restLine.color = (globalColor % 9) + 1;
        restLine.indefinite = false;
        restLine.split = false;
        restLine.vibration = false;
        restLine.halfwayAlert = false;
        restLine.duration = timeToInt(globalRestBetween);
        restLine._type = "int";
        restLine.name = "Rest, Setting up Next Set";

	if(setItem.des) {
	    wholeWorkout.intervals.push(restLine);
	    globalColor++;
	}
        for (let i = 0; i < setItem.rounds; i++) {
            setItem.lines.forEach(line => {
                for (let j = 0; j < line.rep; j++) {
                    let secondsLine = {};
                    secondsLine.splitRest = 0;
                    secondsLine.ducked = false;
                    secondsLine.rest = false;
                    secondsLine.color = (globalColor % 9) + 1;
                    secondsLine.indefinite = false;
                    secondsLine.split = false;
                    secondsLine.vibration = false;
                    secondsLine.halfwayAlert = false;
                    secondsLine.duration = timeToInt(line.int);
                    secondsLine._type = "int";
                    secondsLine.name = (line.dis > 0 ? line.dis + " " : "") + line.des + " (" + (j + 1) + "/" + line.rep + ")" + " [" + (i + 1) + "/" + setItem.rounds + "]";

                    wholeWorkout.intervals.push(secondsLine);
                }
                globalColor++;
            });
        }
        globalColor++;
    });
    folder.items.push(wholeWorkout);


    seconds.items.push(folder);

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(seconds)));
    element.setAttribute('download', globalInfo.date + "_" + group_label() + ".seconds");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
