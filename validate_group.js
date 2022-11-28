function groupStringToCode(group_name) {
    spaceless_group_name = group_name.replace(/ /g, '').toLowerCase();
    switch (spaceless_group_name) {
        case '':
            return 'groupless';
        case 'seniorprepplus':
        case 'seniorprep+':
        case 'srprepplus':
        case 'srprep+':
            return 'swaq_srprep+';
        case 'seniorhighperformance':
        case 'seniorhp':
        case 'seniorhighperf':
        case 'srhighperformance':
        case 'srhp':
        case 'srhighperf':
        case 'hp':
        case 'high performance':
        case 'high perf':
            return 'swaq_srhp';
        case 'seniorreach':
        case 'srreach':
        case 'reach':
            return 'swaq_srreach';
        case 'seniorcompetitive':
        case 'seniorcomp':
        case 'srcompetitive':
        case 'srcomp':
        case 'competitive':
            return 'swaq_srcomp';
        case 'ncp':
        case 'northside':
        case 'ncpvarsity':
        case 'northsidevarsity':
        case 'varsity':
            return 'ncp_v';
        case 'ncpjv':
        case 'northsidejv':
        case 'jv':
        case 'juniorvarsity':
            return 'ncp_jv';
        default:
            return null;
    }
}

function groupCodeToGroupInfo(group_code) {
    switch (group_code) {
        case "swaq_srhp":
            pretty_name = "SR High Performance"
            width = 100
            team_image = swift_logo
            team_name = "Swift Aquatics"
            break;
        case "swaq_srreach":
            pretty_name = "Senior Reach"
            width = 100
            team_image = swift_logo
            team_name = "Swift Aquatics"
            break;
        case "swaq_srcomp":
            pretty_name = "Senior Competitive"
            width = 100
            team_image = swift_logo
            team_name = "Swift Aquatics"
            break;
        case "swaq_srprep+":
            pretty_name = "Senior Prep+"
            width = 100
            team_image = swift_logo
            team_name = "Swift Aquatics"
            break;
        case "ncp_v":
            pretty_name = "Varsity"
            width = 80
            team_image = ncp_logo
            team_name = "Northside"
            break;
        case "ncp_jv":
            pretty_name = "Junior Varsity"
            width = 80
            team_image = ncp_logo
            team_name = "Northside"
            break;
        default:
            return null;
    }

    return {
        "pretty_name": pretty_name,
        "width": width,
        "team_image": team_image,
        "team_name": team_name
    };
}

function validateGroupName() {
    if (!groupStringToCode(document.getElementById('group').value)) {
        alert("We Don't Know About that Group! (just use 1 group title)");
    }
}