function getTag(fragment) {
    let pattern = /<\/[a-z][a-z|\d]*>|<[a-z][^>]*\/>/g
    let tags = fragment.match(pattern);
    let tagSet = new Set();
    for (let tag of tags) {
        pattern = /[a-z][a-z|\d]*/g;
        letter = tag.match(pattern);
        tagSet.add(letter[0]);
    }
    let resultTag = Array.from(tagSet)
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
