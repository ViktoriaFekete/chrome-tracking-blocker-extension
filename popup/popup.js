import {lookupValues, personalInfo, customerInfo, dummyDataLayerObject} from "../scripts/mapper.js";
function setListeners(elements, listener, action, fn) {
    if (elements){
        for (var i=0; i<elements.length; i++){
            if (elements[i] && elements[i].getAttribute(listener) != 'true'){
                elements[i].addEventListener(action, fn);
                elements[i].setAttribute(listener, 'true');
            }
        }
    }
}

function filterCookies(cookie, cookieName) {
    if (cookie && cookieName) {
        // console.log("searching for cookie", cookieName);
        for (let i = 0; i < cookie.length; i++) {
            if (cookie[i].name.trim() == cookieName.trim()) {
                // console.log("cookie found", cookie[i]);
                return cookie[i];
            }
        }
    }
    return undefined;
}

async function getTrackerList() {
    let cookie = await getCookieInfo();
    let trackerList = [];
    for (let i = 0; i < cookie.length; i++) {
        let prettyDomain = cookie[i].domain.replaceAll(/(^\.)|www\.?|(\.$)/g, '');
        if (!trackerList.includes(prettyDomain)) {
            trackerList.push(prettyDomain);
        }
    }
    return trackerList;
}
function getCookieInfo(){
    return new Promise((resolve, reject) => {
        try {
            chrome.tabs.query({
                "status": "complete",
                "windowId": chrome.windows.WINDOW_ID_CURRENT,
                "active": true
            }, function (tab) {
                chrome.cookies.getAll({"url": tab[0].url}, function (cookie) {
                    resolve(cookie);
                });
            });
        } catch (e) {
            reject(e);
        }
    });
}

function getDataFromDataLayer(key, value) {
    let dataLayer = dummyDataLayerObject;

    if (dataLayer && dataLayer.length > 0) {
        for (let i = 0; i < dataLayer.length; i++) {
            let data = dataLayer.filter((item) => Object.keys(item)[0] == key && (Object.values(item)[0].includes(value) | value == true));
            // console.log("data", data);
            return data;
        }
    }
}

function getDataFromLocalStorage() {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.get(null, function(items) { // v2 este asi fungovalo takto, v3 uz nie
                // console.log("items",items);
                var allKeys = Object.keys(items);
                // console.log(allKeys);
                resolve(allKeys);
            });
        } catch (e) {
            reject(e);
        }
    })
}

function createDataLayerItem(key, value){
    // console.log(key, value);
    let dataLayerItem = document.createElement("li");
    dataLayerItem.classList.add("data-layer-item");
    dataLayerItem.innerText = key + (value ? ": " + JSON.stringify(value) : '');
    return dataLayerItem;
}

function addDataLayerContent(itemInfo, itemContentElement){
    let dataLayerContent = getDataFromDataLayer(itemInfo.dataLayer.key, itemInfo.dataLayer.value);
    // console.log("dataLayerContent", dataLayerContent, itemInfo.dataLayer);

    const dataLayerEventListElement = itemContentElement.querySelector("#tracker-data-layer #list-of-events");
    dataLayerEventListElement.innerHTML = "";
    dataLayerContent.forEach((data) => {
        // console.log(data);
        let eventItem = createDataLayerItem(data[itemInfo.dataLayer.event], data[itemInfo.dataLayer.properties]);
        dataLayerEventListElement.appendChild(eventItem);
    })
}
async function addContentToItem(itemInfo) {
    const itemContentElement = document.getElementById("item-content");

    let cookies = await getCookieInfo();
    let cookie = filterCookies(cookies, itemInfo?.cookie);
    let localStorage = await getDataFromLocalStorage();

    if (itemInfo.dataLayer){
        // console.log("dataLayer", itemInfo.dataLayer);
        addDataLayerContent(itemInfo, itemContentElement);
    } else {
        // itemContentElement.querySelector("#tracker-data-layer").style.display = "none";
    }

    itemContentElement.querySelector("#tracker-name").innerText = itemInfo?.name || itemInfo;
    itemContentElement.querySelector("#tracker-cookies").innerText = "Cookie: " + cookie?.value;


    // itemContentElement.querySelector("#tracker-storage").innerText = localStorage;

}
function createItem(itemListElement, itemInfo){
    // console.log("iteminfo", itemInfo);
    const listItemElement = document.createElement("li");
    listItemElement.classList.add("item");
    listItemElement.innerText = itemInfo?.name || itemInfo;

    listItemElement.addEventListener("click", () => {
        itemListElement.querySelectorAll(".item").forEach((item) => {
            item.classList.remove("active");
        });
        listItemElement.classList.add("active");
        addContentToItem(itemInfo);
    });
    return listItemElement;
}
async function loadDashboardContent() {

    // const trackerList = ["Google Analytics", "Google Tag Manager", "Biano", "Bloomreach"];
    let trackerList = Object.keys(lookupValues);
    let domains = await getTrackerList();
    // console.log("domains", domains);
    trackerList = trackerList.concat(domains);

    // console.log(trackerList);
    const itemListElement = document.getElementById("list-of-sections");

    trackerList.forEach((item) => {
        let itemInfo = lookupValues[item] || {
            name: item,
            cookie: item,
            id: item
        };
        const listItemElement = createItem(itemListElement, itemInfo);
        itemListElement.appendChild(listItemElement);
    });
}


function showContent(num) {
    // Hide all content divs
    console.log("hello");

    var contentDivs = document.querySelectorAll('.content');
    for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = 'none';
    }

    // Remove 'active' class from all list items
    var listItems = document.querySelectorAll('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('active');
    }

    // Show selected content div and add 'active' class to corresponding list item
    document.getElementById('content' + num).style.display = 'block';
    document.querySelector('li:nth-child(' + num + ')').classList.add('active');
}

// RUN ON LOAD
loadDashboardContent();



// // Initialize button with users' preferred color
// const changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', ({ color }) => {
//     changeColor.style.backgroundColor = color;
// });
//
// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener('click', async () => {
//     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: setPageBackgroundColor
//     });
// });
//
// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//     chrome.storage.sync.get('color', ({ color }) => {
//         document.body.style.backgroundColor = color;
//     });
// }