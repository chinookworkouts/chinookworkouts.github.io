// RegExp's used throughout this website
const setLine = new RegExp('^(\\s|{)*(\\d+)\\s*(x|\u{00D7})\\s*(\\d+)\\s*@\\s*(\\d\\d:\\d\\d|\\d:\\d\\d|:\\d\\d|\\d\\d|\\d)\\s+(.*)$');
const noRepLine = new RegExp('^(\\d+)\\s*@\\s*(\\d\\d:\\d\\d|\\d:\\d\\d|:\\d\\d|\\d\\d|\\d)\\s+(.*)$');
const roundLine = new RegExp('(\\d+)\\s*(x|\u{00D7})\\s*{$');
const setDes = new RegExp('//\\s*(.*)');
const noteLine = new RegExp('--\\s*(.*)');
const endRoundLine = new RegExp('^}$');
const restLine = new RegExp('^(\\d\\d:\\d\\d|\\d:\\d\\d|:\\d\\d)\\s*(.*)$')
const time0 = new RegExp('^(\\d\\d):(\\d\\d)$');
const time1 = new RegExp('^(\\d):(\\d\\d)$');
const time2 = new RegExp('^:(\\d\\d)$');
const time3 = new RegExp('^(\\d\\d)$');
const time4 = new RegExp('^(\\d)$');
