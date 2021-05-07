function processData(input) {
    let links = input.match(/http(s?):\/\/[a-zA-Z0-9\-]*(\.[a-zA-Z0-9\-]*)+[\/?"]/g);
    let domains = new Set();
    for (let link of links) {
        if (link.match("https"))
            l = link.slice(8, -1);
        else 
            l = link.slice(7, -1);
        if (l.slice(0, 3) == "www" || l.slice(0, 3) == "ww2") {
            domains.add(l.slice(4));
        }
        else {
            domains.add(l);
        }
    }
    domains = Array.from(domains).sort();
    console.log(domains.join(';'))
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
