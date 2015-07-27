$(function(){
  
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    q: searchTerm,
    r: 'json',
    part: 'snippet',
    key: 'AIzaSyDj4jeBBkIl7oh_f0ushUeEzAc-Fve0hVw'
  };

  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + '<b>' + value.snippet.title + '</b>' + '</p>';
    html += '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '">' + '<img src="' + value.snippet.thumbnails.default.url + '"/>' + '</a>';
    html += value.snippet.description;
    
    console.log(value.snippet.title);
  });
  $('#search-results').html(html);
}


