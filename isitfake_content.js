var port = chrome.runtime.connect({name:"mycontentscript"});
console.log('content script firedtest');
title = document.title;
debugger;
chrome.runtime.sendMessage(title, function(modifiedtitle){
	console.log("response received");
	console.log(modifiedtitle);
});
