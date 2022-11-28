// parse string into our custom object
function getInfo(data) {
    const globalRestBetween = document.getElementById("restInterval").value;
    const group = groupStringToCode(document.getElementById('group').value);
    time_of_day = "";
    document.getElementsByName('time_of_day').forEach((element) => {
        if (element.checked) {
            time_of_day = element.value;
        }
    });
    info = {
        "date": document.getElementById('date').value.replace("/", "-"),
        "time_of_day": time_of_day,
        "group": group,
        "title": document.getElementById('title').value,
        "yards": 0,
        "time": 0,
        "rest": 0,
        "sets": []
    };
    currentRounds = 1;
    let currentSet = {
        des: "",
        lines: [],
        rounds: 1
    };
    let tooLong = false;
    data.forEach(line => {
        if (setLine.test(line)) {
            let array = setLine.exec(line);
            let rep = parseInt(array[2], 10);
            let dis = parseInt(array[4], 10);
            let int = array[5];
            let des = array[6];
            info.yards += currentRounds * rep * dis;
            info.time += currentRounds * rep * timeToInt(int);
            let currentLine = {
                "rep": rep,
                "dis": dis,
                "int": int,
                "des": des,
                "notes": []
            };
            currentSet.lines.push(currentLine);
        } else if (noRepLine.test(line)) {
            let array = noRepLine.exec(line);
            let rep = 1;
            let dis = parseInt(array[1], 10);
            let int = array[2];
            let des = array[3];
            info.yards += currentRounds * dis;
            info.time += currentRounds * timeToInt(int);
            let currentLine = {
                "rep": rep,
                "dis": dis,
                "int": int,
                "des": des,
                "notes": []
            };
            currentSet.lines.push(currentLine);
        } else if (roundLine.test(line)) {
            let array = roundLine.exec(line);
            currentRounds = parseInt(array[1], 10);
        } else if (restLine.test(line)) {
            let array = restLine.exec(line);
            let rep = 1;
            let dis = 0;
            let int = array[1];
            let des = array[2];
            info.time += currentRounds * timeToInt(int);
            let currentLine = {
                "rep": rep,
                "dis": dis,
                "int": int,
                "des": des,
                "notes": []
            };
            currentSet.lines.push(currentLine);
        } else if (setDes.test(line)) {
            let array = setDes.exec(line);
            info.rest += timeToInt(globalRestBetween);
            currentSet.des = array[1];
        } else if (noteLine.test(line)) {
            let array = noteLine.exec(line);
            currentSet.lines.at(-1).notes.push(array[1]);
        } else if (endRoundLine.test(line)) {
            if (currentSet.lines.length != 0) {
                currentSet.rounds = currentRounds;
                info.sets.push(currentSet);
                currentRounds = 1;
                currentSet = {
                    des: "",
                    lines: [],
                    rounds: 1
                };
            }
        } else if (line === "") {
            if (currentSet.lines.length != 0) {
                currentSet.rounds = currentRounds;
                info.sets.push(currentSet);
                currentRounds = 1;
                currentSet = {
                    des: "",
                    lines: [],
                    rounds: 1
                };
            }
        }
        if (line.length > 55) {
            tooLong = true;
        }
    });
    if (currentSet.lines.length != 0) {
        currentSet.rounds = currentRounds;
        info.sets.push(currentSet);
    }
    globalInfo = info;
    if (tooLong) {
        document.getElementById("workout").style.color = "red";
    } else {
        document.getElementById("workout").style.color = "black";
    }
    return info;
}
