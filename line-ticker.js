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
      itemCSS: {},
      shapeCSS: {},
      hover: false
    };
    $.extend(true, params, p);
    if(params.element === null || params.data === null){
      return null; // error
    }
    params.showDuration += params.transitionLength*2;
    var elem = $(params.element), data = params.data;
    var ticker = {
      element: elem,
      data: data,
      current: null
    };
    elem.append('<div class="ticker-box"><div class="ticker-text"></div><div class="ticker-shape"></div></div><div class="ticker-dropdown"></div>');
    elem.find('.ticker-box').css(params.itemCSS).hide();
    elem.find('.ticker-shape').css(params.shapeCSS);

    var dropdown = elem.find('.ticker-dropdown').append('<ul style="margin:0;padding:0;">').hide();
    var padtop = elem.find('.ticker-box').css('padding-top').slice(0,-2);
    for(var i = 0; i < data.length; i++){
      var cssp = {height:elem.height()+'px',padding:elem.find('.ticker-box').css('padding')};
      var item = $(document.createElement('li')).attr('id', data[i].keyword).addClass('ticker-dropdown-item').css(cssp);
      var liElement = dropdown.find('ul').append(item).find('#'+data[i].keyword);
      liElement.append('<div class="ticker-text"></div><div class="ticker-shape"></div>')
      liElement.find('.ticker-shape').css(params.shapeCSS).css('background-color', data[i].color);
      if(data[i].link != null)
        liElement.find('.ticker-text').text('').append('<a href="' + data[i].link + '">' + data[i].text + '</a>');
      else
        liElement.find('.ticker-text').text(data[i].text);
    }
    dropdown.append('</ul>');
    dropdown.css('background-color', elem.css('background-color')).css('top', elem.height()).css('border-color', elem.css('border-color'));
    dropdown.css({top:elem.height(),border:elem.css('border')});

    var counter = 0;
    if(params.hover){
      elem.hover(function(){elem.find('.ticker-dropdown').fadeIn(100);}, function(){elem.find('.ticker-dropdown').fadeOut(200);});
    }
    (function tickerTimer() {
      var box = elem.find('.ticker-box');
      box.fadeOut(params.transitionLength, function(){
        if(data[counter].link != null)
          box.find('.ticker-text').text('').append('<a href="' + data[counter].link + '">' + data[counter].text + '</a>');
        else
          box.find('.ticker-text').text(data[counter].text);
        box.find('.ticker-shape').css('background-color', data[counter].color);

        var prevcounter = counter-1;
        if(prevcounter === -1)
          prevcounter = data.length - 1;
        dropdown.find('#'+data[prevcounter].keyword).removeClass('ticker-dropdown-item-active');
        dropdown.find('#'+data[counter].keyword).addClass('ticker-dropdown-item-active');

        ticker.current = data[counter].keyword;
        if(params.transition === 'fade')
          box.fadeIn(params.transitionLength);
        if(params.transition === 'slideDown')
          box.slideDown(params.transitionLength);
        if(params.transition === 'slideUp')
          box.slideUp(params.transitionLength);
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