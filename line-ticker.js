/*
 * line-ticker.js library
 * Author: teleganov on GitHub
 * Version: 0.1
 */

var LineTicker = {

  render: function(p) {
    var params = { // default parameters
      element: null,
      data: [],
      transition: 'fade',
      transitionLength: 500,
      showDuration: 4000,
      padding: '0 0 0 0'
    };
    $.extend(params, p);
    if(params.element === null || params.data === null){
      return null; // error
    }
    var elem = $(params.element), data = params.data;
    var ticker = {
      element: elem,
      data: data,
      current: null
    };
    elem.append('<div class="ticker-box"><div class="text"></div><div class="square"></div></div>');
    elem.find('.ticker-box').css('padding', params.padding).hide();
    var counter = 0;
    (function tickerTimer() {
      elem.find('.ticker-box').fadeOut(params.transitionLength, function(){
        elem.find('.text').text(data[counter].text);
        elem.find('.square').css('background-color', data[counter].color);
        ticker.current = data[counter].keyword;
        if(params.transition === 'fade')
          elem.find('.ticker-box').fadeIn(params.transitionLength);
        if(params.transition === 'slide')
          elem.find('.ticker-box').slideDown(params.transitionLength);
        counter++;
      });
      if(counter === data.length){
        counter = 0;
      }
      setTimeout(tickerTimer, params.showDuration);
    })();
    return ticker;
  }

}