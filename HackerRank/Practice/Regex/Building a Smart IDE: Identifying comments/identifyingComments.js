function removeLeadingSpace(comment) {
    if (comment.match(/\/\*/g)) {
        lines = comment.split('\n');
        for (let line=0; line < lines.length; line++) {
            lines[line] = lines[line].trimStart();
        }
        return lines.join('\n');
    }
    else {
        return comment;
    }
}

function processData(input) {
    let pattern = /(\/\/.*)|((\/\*)(.|[\n])*?\*\/)/g;
    let comments = input.match(pattern);
    for (let comment of comments) {
        console.log(removeLeadingSpace(comment));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
