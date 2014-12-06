$(document).ready(init);

function init(){
  $('#get-quote').click(getQuote);
  $('#quote').hide();
}

function getQuote(){
  var symbol = $('#symbol').val().toUpperCase();
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
  $.getJSON(url, function(data){
    console.log(data);
    $('#quote').text('Latest Price: $' + data.LastPrice);
    $('#quote').show();
    var status = data.Change;
    console.log(status);

    if (status < 0){
      $('#quote').css('background-color', 'red');
    }
  });
}
