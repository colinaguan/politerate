// bootstrap scripts
var bootstrap1 = document.createElement("link");
bootstrap1.rel = "stylesheet";
bootstrap1.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.cs";
bootstrap1.integrity = "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh";
bootstrap1.crossOrigin = "anonymous";

var bootstrap2 = document.createElement("script");
bootstrap2.src = "https://code.jquery.com/jquery-3.4.1.slim.min.js";
bootstrap2.integrity = "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n";
bootstrap2.crossOrigin = "anonymous";

var bootstrap3 = document.createElement("script");
bootstrap3.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
bootstrap3.integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo";
bootstrap3.crossOrigin = "anonymous";

var bootstrap4 = document.createElement("script");
bootstrap4.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js";
bootstrap4.integrity = "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6";
bootstrap4.crossOrigin = "anonymous";

var head = document.getElementsByTagName('head')[0];
head.appendChild(bootstrap1);
head.appendChild(bootstrap2);
head.appendChild(bootstrap3);
head.appendChild(bootstrap4);

console.log(head);
console.log("Appended");