marked.setOptions({
    breaks: true,
    highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    }
});

/* redefine checkbox style */
const renderer = {
  listitem(text, task, checked) {
    if (task) {
      text = text.replace("disabled", "");
      return '<li style="list-style-type:none">' + text + '</li>\n';
    }
    else {
      return '<li>' + text + '</li>\n';
    }
  }
};

marked.use({ renderer });

let textChanged = true;

function textChange() {
  textChanged = true;
};

function render() {
  if (textChanged) {
    textChanged = false;
    document.getElementById("output").innerHTML = marked(document.getElementById("editor").value);     
    MathJax.typesetPromise(); // not a good practice, need modify
  }
};

setInterval(render, 3000); // not a good practice, need modify

/* The textarea render is modified from https://codepen.io/kob58im/pen/wvWgOEZ/ */
