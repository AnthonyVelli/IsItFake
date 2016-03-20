// var promisify = require("promisify-node");
var google = require('google'); 
// var google = promisify('google');
var querystring = require('querystring');
// var searchDB = require('./model');
querystring.escape = function(query){
	return query.replace(/\s/g,'%20');
}
  
google.resultsPerPage = 25
console.log('outside of listener'); 

chrome.runtime.onMessage.addListener(function(pageTitle, sender, responseFunc){
	var fakePageTitle = pageTitle + ' fake story';
	var hitCounts = {}
	hitCounts.fakepagetitle = fakePageTitle;
	hitCounts.pagetitle = pageTitle;
	google(pageTitle, function(err, origRes){
		var origbody = origRes.body
		hitCounts.hitCount = Number(origbody.match(/(\>About )([0-9|\,]+)( results\<)/)[2].split(',').join(''));
		google(fakePageTitle, function(err, fakeRes){
			console.log('error ' + err);
			hitCounts.fakehitCount = Number(fakeRes.body.match(/(\>About )([0-9|\,]+)( results\<)/)[2].split(',').join(''));
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  			chrome.tabs.sendMessage(tabs[0].id, hitCounts);
			});
		})
	})
})

