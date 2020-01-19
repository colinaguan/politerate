// Content scripts can only access the Chrome

// puts in poli-main div
var referenceNode = document.querySelector(".category-summary");
var newNode = document.createElement("div");
newNode.className = "poli-main";
newNode.innerHTML = '<div class="poli-header">' +
    '<button class="highlight">HIGHLIGHT A TOPIC</button>' +
    '</div>' +
    '<div class="poli-body">' +
    '<h5 class="question">"...moderate voters remain skeptical..."</h5>' +
    '<h5 class="question">"...Medicare For All..."</h5>' +
    '<h5 hidden id="hidden-q" class="question">"...single-payer..."</h5>' +
    '</div>';

referenceNode.before(newNode);

// $(".poli-body").innerHTML();

$(".highlight").click(function () {
    var highlight = window.getSelection().toString();
    console.log(highlight);
    document.getElementById("hidden-q").hidden = false;
    // if (highlight === "")
    //     updateData();
});


// replace text
// var hlightButton =
//     '<button id="highlight" style=" font-family: din-2014,Helvetica Neue,Helvetica,Arial,sans-serif; padding: .5rem;letter-spacing: 2px;background-color: #fff3cd;border-color: #ffeeba;margin-bottom: 1rem;color: #856404;position: absolute; right: 15rem;">HIGHLIGHT</button>';
// var summaryDiv = $("div.category-summary").find("p");
// var content = "";

// content += hlightButton
// for (var i = 0; i < summaryDiv.length; i++) {
//     content += '<p>' + summaryDiv[i].innerHTML + '</p>';
// }
// $("div.category-summary").html(content);

// // console.log(content);

// $("#highlight").click(function () {
//     console.log("highlight clicked");
//     var highlight = window.getSelection().toString();
//     var divHolder = $("div.category-summary").find("p");
//     var hlightContent = "";

//     for (var i = 0; i < divHolder.length; i++) {
//         var text = divHolder[i].innerHTML;
//         var ind = text.indexOf(highlight);

//         if (ind === -1) hlightContent += '<p>' + text + '</p>';
//         else {
//             hlightContent += '<p>' + text.substring(0, ind) +
//                 '<mark>' + highlight + '</mark>' +
//                 text.substring(ind + highlight.length) + '</p>';
//         }
//         console.log(i);
//         console.log(hlightContent);
//     }
//     hlightContent += hlightButton;
//     $("div.category-summary").html(hlightContent);
// });