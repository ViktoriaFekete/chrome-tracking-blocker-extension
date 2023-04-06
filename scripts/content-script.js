(async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});
    // do something with response here, not outside the function
    console.log(response);
})();

console.log("CS", document.querySelector('h1').textContent);