function getTag(fragment) {
    let pattern = /<\/[a-z][a-z|\d]*>|<[a-z][^<>]*\/>/g
    let tags = fragment.match(pattern);
    let tagSet = new Set(tags);
    let result = new Set();
    for (let tag of tagSet.keys()) {
        pattern = /[a-z][a-z|\d]*/g;
        letter = tag.match(pattern);
        result.add(letter[0]);
    }
    let resultTag = Array.from(result)
    console.log(resultTag.sort().join(";"));
}

function processData(input) {
    //Enter your code here
    getTag(input);
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
