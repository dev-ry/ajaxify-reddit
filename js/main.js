/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var newPage = 'https://www.reddit.com/new/.json';
var risingPage = 'https://www.reddit.com/rising/.json';
var controversialPage = 'https://www.reddit.com/controversial/.json';
var topPage = 'https://www.reddit.com/top/.json';
var gildedPage = 'https://www.reddit.com/top/.json';
var wikiPage = 'https://www.reddit.com/wiki/index/.json';

var pages = [frontPage, newPage, risingPage, controversialPage, topPage, gildedPage, wikiPage]



$(document).ready(function(){
/* FUNCTION EXECUTION HERE */
  console.log('Go forth and code!');
});
  // pages.forEach(function(page) {
    // console.log(page);

  $.ajax ({
    method: 'GET',
    url: ('https://www.reddit.com/.json'),
    dataType: 'json',
    data: '',
    success: onSuccess,
    error: onError
  });
// });

function onSuccess(data) {
  console.log('ON SUCCESS!!!');
  var firstTitle = data.data.children[0].data.title;
  var firstImage = data.data.children[0].data.url;
  var titleImageContainer = firstTitle + ' ' + firstImage;
$('#main').append(titleImageContainer);
 // console.log(data.data.children[0].data.url);
  //console.log(data);
}

function onError() {
  console.log('not working');
}
