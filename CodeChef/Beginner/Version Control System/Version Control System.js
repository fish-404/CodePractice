process.stdin.resume();
process.stdin.setEncoding('utf8');

_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split("\n"));
});

function processData(input) {
    let t = input[0];
    for (let i = 0; i < t; i++) {
        let cases = input[3*i+1];
        let ignore = input[3*i+2];
        let follow = input[3*i+3];
        vcs(cases.split(' '), ignore, follow);
    }
}

function vcs(cases, ignore, follow) {
    let n = Number(cases[0]);
    let orIgnFlw = new Set((ignore + " " + follow).split(' ')) // get union of ignore set and follow set
    let noCount = n - orIgnFlw.size;
    let Count = ignore.split(' ').length + follow.split(' ').length - orIgnFlw.size;
    console.log(Count, noCount);
}
