/*
 * Ticker.js library
 * requires jQuery
 */

var Ticker = {

  create: function(p) {
    var params = {
      element: null, // jquery object
      data: [],      // array of data objects {keyword, text, color}
      transition: 'fade',
      transitionLength: 500,
      showDuration: 4000
    };
    $.extend(params, p);
    if(params.element == null || params.data == null){
      return null; // error
    }
    var elem = $(params.element), data = params.data;
    var ticker = {
      element: elem,
      data: data,
      current: null,
      timerId: null
    };
    // create single ticker div
    elem.append('<div class="ticker-box"><div class="text"></div><div class="square"></div></div>');
    elem.find('.ticker-box').hide();
    var counter = 0;
    var timer = setInterval(function(){
      elem.find('.ticker-box').fadeOut(params.transitionLength, function(){
        elem.find('.text').text(data[counter].text);
        elem.find('.square').css('background-color', data[counter].color);
        ticker = {
          element: elem,
          data: data,
          current: data[counter].keyword
        };
        if(params.transition == 'fade')
          elem.find('.ticker-box').fadeIn(params.transitionLength);
        if(params.transition == 'slide')
          elem.find('.ticker-box').slideDown(params.transitionLength);
        counter++;
      });
      if(counter == data.length){
        counter = 0;
      }
    }, params.showDuration);
    return ticker;
  }

}