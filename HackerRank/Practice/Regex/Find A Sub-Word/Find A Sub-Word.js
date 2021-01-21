function processData(input) {
    input = input.split("\n");
    let n = Number(input[0]);
    let sentence = "";
    for (let i=0; i < n ; i++) {
        sentence += " " + input[i+1];
    }
    let q = Number(input[n+1]);
    for (let i=0; i < q; i++) {
        let check = input[n+2+i];
        check = "\\B" + check + "\\B";
        let re = new RegExp(check, 'g');
        let result = sentence.match(re);
        if (result != null)
            console.log(result.length);
        else
            console.log(0);
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
