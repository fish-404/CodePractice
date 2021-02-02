function processData(input) {
    let ids = getQuestionID(input);
    let titles = getTitle(input);
    let times = getTimes(input);
    
    for (let i=0; i < ids.length; i++) {
        console.log(ids[i] + ";" + titles[i] + ";" + times[i]);
    }
} 

function getTimes(fragment) {
    let quesTime = [];
    let times = fragment.match(/class="relativetime">(.*)<\/span>/g);
    for (let i of times) {
        quesTime.push(i.slice(21, -7));
    }
    
    return quesTime;
}

function getQuestionID(fragment) {
    let ids = [];
    let questions = fragment.match(/id="question-summary-\d+"/g);
    for (let i of questions) {
        ids.push(i.slice(21, -1));
    }
    
    return ids;
}

function getTitle(fragment) {
    let titles = [];
    let innerText = fragment.match(/class="question-hyperlink">.*<\/a>/g);
    for (let i of innerText) {
        titles.push(i.slice(27, -4));
    }
    
    return titles;
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
