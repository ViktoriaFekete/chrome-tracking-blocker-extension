// const color = '#3aa757';
//
// chrome.runtime.onload.addListener(() => {
//     chrome.storage.sync.set({ color });
//     console.log('Default background color set to %cgreen', `color: ${color}`);
// });
//

function send(request, sender, sendResponse) {
    return new Promise((resolve, reject) => {
    if (request.greeting == "hello") {
        console.log("hello");
        sendResponse({farewell: "goodbye"});
    }});
}

console.log("hello worker", chrome);