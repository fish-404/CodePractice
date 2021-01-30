function getTag(fragment) {
    let pattern = /<\/[a-z][a-z|\d]*>|<[a-z][^>]*\/>/g;
    let tags = fragment.match(pattern);
    let tagSet = new Set();
    for (let tag of tags) {
        pattern = /[a-z][a-z|\d]*/g;
        letter = tag.match(pattern);
        tagSet.add(letter[0]);
    }
    return Array.from(tagSet).sort();
} 

function getAttribute(tag, fragment) {
    let pattern = new RegExp('<' + tag + '\\b[^>]*>', 'g');
    let openLines = fragment.match(pattern);
    let attributeSet = new Set();
    for (let line of openLines) {
        pattern = /[a-z]+=["']/g;
        attribute = line.match(pattern);
        if (attribute != null) {
            for (let attr of attribute)
                attributeSet.add(attr);
        }
    }     
    return Array.from(attributeSet).sort();
}

function processData(input) {
    let tags = getTag(input);
    for (let tag of tags) {
        let s = tag + ":";
        let attrs = getAttribute(tag, input);
        if (attrs.length == 0) {
            console.log(s);
        }
        else {
            for (let attr of attrs) {
                s += attr.slice(0, -2) + ',';
            }
            console.log(s.slice(0,-1));
        }
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
})
