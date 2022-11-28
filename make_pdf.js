// use our custom object to create a pdf file and download it
const makePdf = () => {
    const {
        jsPDF
    } = window.jspdf;
    const newLineDist = 17;
    const smallerSpace = 12;
    const tab = 25;
    const margin = 20;

    let pdf = new jsPDF({
        unit: 'px'
    });
    logo_width = groupCodeToGroupInfo(globalInfo.group);
    pdf.addImage(logo_width.team_image, 'jpeg', (426.5 - logo_width.width), 20, logo_width.width, 80);
    pdf.setFont("Courier", "normal");
    pdf.setFontSize(32);

    pdf.text(groupCodeToGroupInfo(globalInfo.group).pretty_name, margin, 36);
    pdf.setFontSize(20);
    pdf.text(globalInfo.date + (globalInfo.time_of_day === "" ? "" : " | " + globalInfo.time_of_day), margin, 56);
    pdf.setFontSize(18);
    pdf.setFont("Courier", "italic");
    pdf.text(globalInfo.title, margin, 76);

    pdf.setFontSize(16);
    pdf.setFont("Courier", "normal");

    let left = margin;
    let top = 94;
    globalInfo.sets.forEach(set => {
        pdf.setFont("Courier", "bold");
        if (set.des) {
            pdf.text(set.des, left, top);
            top += newLineDist;
        }
        pdf.setFont("Courier", "normal");
        if (set.rounds != 1) {
            pdf.text(set.rounds + " x {", left, top);
            left = margin + tab;
            top += newLineDist;
        }
        set.lines.forEach(line => {
            pdf.text((line.rep > 1 ? line.rep + " x " : "") + (line.dis > 0 ? line.dis + " @ " : "") + line.int + " " + line.des, left, top);
            if (line.notes.length > 0) {
                pdf.setFontSize(12);
                pdf.setFont("Courier", "italic");
                line.notes.forEach(note => {
                    top += smallerSpace;
                    pdf.text('\u2022 ' + note, left + tab, top);
                });
                pdf.setFontSize(16);
                pdf.setFont("Courier", "normal");
            }
            top += newLineDist;
        });
        if (left === margin + tab) {
            left = margin;
        }
        top += smallerSpace;
    });
    pdf.save(globalInfo.date + "_" + globalInfo.group + ".pdf");
};
