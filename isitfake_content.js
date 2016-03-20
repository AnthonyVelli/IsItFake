var port = chrome.runtime.connect({name:"mycontentscript"});
console.log('content script firedtest');
var title = document.title;
console.log(title);
chrome.runtime.sendMessage(title);
chrome.runtime.onMessage.addListener(function(hitCount){
	console.log(hitCount);
})
