function updateData() {
    chrome.storage.local.get(['questions'], function (result) {
        console.log("get");
        console.log(result.questions[0]);
    });
}