/*
 * line-ticker.js library
 * Author: teleganov on GitHub
 * Version: 0.2
 */

var LineTicker = {

  render: function(p) {
    var params = { // default parameters
      element: null,
      data: [],
      transition: 'fade',
      transitionLength: 500,
      showDuration: 4000,
      padding: '0 0 0 0',
      shapeRadius: '0px',
      shapeSize: '13px',
      shapeBorder: '#000'
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
    elem.find('.square').css({
      width: params.shapeSize,
      height: params.shapeSize,
      borderRadius: params.shapeRadius,
      borderColor: params.shapeBorder
    });
    var counter = 0;
    (function tickerTimer() {
      elem.find('.ticker-box').fadeOut(params.transitionLength, function(){
        if(data[counter].link != null)
          elem.find('.text').text('').append('<a href="' + data[counter].link + '">' + data[counter].text + '</a>');
        else
          elem.find('.text').text(data[counter].text);
        elem.find('.square').css('background-color', data[counter].color);
        ticker.current = data[counter].keyword;
        if(params.transition === 'fade')
          elem.find('.ticker-box').fadeIn(params.transitionLength);
        if(params.transition === 'slideDown')
          elem.find('.ticker-box').slideDown(params.transitionLength);
        if(params.transition === 'slideUp')
          elem.find('.ticker-box').slideUp(params.transitionLength);
        counter++;
      });
      if(counter >= data.length){
        counter = 0;
      }
      setTimeout(tickerTimer, params.showDuration);
    })();
    return ticker;
  }

}