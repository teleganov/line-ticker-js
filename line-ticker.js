/*
 * line-ticker.js library
 * Author: teleganov on GitHub
 * Version: 0.2
 */

var LineTicker = {

  new: function(p){
    var params = { // default parameters
      element: null,
      data: [],
      transition: 'fade',
      transitionLength: 500,
      showDuration: 4000,
      showDurationFull: 5000,
      itemCSS: {},
      shapeCSS: {},
      hover: false
    };
    $.extend(true, params, p);
    if(params.element === null || params.data === null){
      console.log("Line-ticker ERROR: Cannot create ticker with null element or null data");
      return null; // error
    }
    params.showDurationFull = params.showDuration + params.transitionLength*2;
    var ticker = {
      params: params,
      current: null,
      timer: null
    };
    this.render(ticker);
    return ticker;
  },

  render: function(ticker) {
    var params = ticker.params, elem = ticker.params.element, data = ticker.params.data;
    elem.append('<div class="ticker-box"><div class="ticker-text"></div><div class="ticker-shape"></div></div><div class="ticker-dropdown"></div>');
    elem.find('.ticker-box').css(params.itemCSS).hide();
    elem.find('.ticker-shape').css(params.shapeCSS);

    var dropdown = elem.find('.ticker-dropdown').append('<ul style="margin:0;padding:0;">').hide();
    for(var i = 0; i < data.length; i++){
      var cssp = {height:elem.height()+'px',padding:elem.find('.ticker-box').css('padding')};
      var item = $(document.createElement('li')).attr('id', 'ticker-list-'+data[i].keyword).addClass('ticker-dropdown-item').css(cssp);
      var liElement = dropdown.find('ul').append(item).find('#ticker-list-'+data[i].keyword);
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

    if(params.hover){
      elem.hover(function(){elem.find('.ticker-dropdown').fadeIn(100);}, function(){elem.find('.ticker-dropdown').fadeOut(200);});
    }
    this.show(ticker);
    return ticker;
  },

  updateItem: function(ticker, keyword, obj){
    var datapoint, index;
    index = this.findItemIndex(ticker, keyword);
    if(index >= 0){
      datapoint = ticker.params.data[index];
      if(obj.keyword != null) {
        console.log("Line-ticker.js ERROR: Cannot replace keyword of an item");
        return ticker;
      }
      $.extend(datapoint, obj);
      ticker.params.data[index] = datapoint;
      if(ticker.params.hover){
        var box = $('#ticker-list-'+keyword);
        if(ticker.params.data[index].link != null)
          box.find('.ticker-text').text('').append('<a href="' + ticker.params.data[index].link + '">' + ticker.params.data[index].text + '</a>');
        else
          box.find('.ticker-text').text(ticker.params.data[index].text);
        box.find('.ticker-shape').css('background-color', ticker.params.data[index].color);
      }
    }
    return ticker;
  },

  addItem: function(ticker, obj){
    if(obj.keyword != null && obj.text != null){
      if(this.findItemIndex(ticker, obj.keyword) === -1){
        ticker.params.data.push(obj);
        this.clear(ticker);
        this.render(ticker);
      } else { console.log("Line-ticker ERROR: Cannot insert item, another item with the same keyword already exists")}
    }
    return ticker;
  },

  removeItem: function(ticker, keyword){
    var index = this.findItemIndex(ticker, keyword);
    if(index >= 0){
      ticker.params.data.splice(index,1);
      this.clear(ticker);
      this.render(ticker);
    }
    return ticker;
  },

  show: function(ticker){
    clearTimeout(ticker.timer);
    var counter = 0, elem = ticker.params.element, params = ticker.params;
    var box = elem.find('.ticker-box'), dropdown = elem.find('.ticker-dropdown');
    var index = this.findItemIndex(ticker, ticker.current);
    if(index >= 0)
      counter = index;
    box.show();
    (function tickerTimer() {
      console.log('tickerTimer runs');
      if(counter >= ticker.params.data.length){
        counter = 0;
      }
      box.fadeOut(params.transitionLength, function(){
        if(ticker.params.data[counter].link != null)
          box.find('.ticker-text').text('').append('<a href="' + ticker.params.data[counter].link + '">' + ticker.params.data[counter].text + '</a>');
        else
          box.find('.ticker-text').text(ticker.params.data[counter].text);
        box.find('.ticker-shape').css('background-color', ticker.params.data[counter].color);

        var prevcounter = counter-1;
        if(prevcounter === -1)
          prevcounter = ticker.params.data.length - 1;
        dropdown.find('#ticker-list-'+ticker.params.data[prevcounter].keyword).removeClass('ticker-dropdown-item-active');
        dropdown.find('#ticker-list-'+ticker.params.data[counter].keyword).addClass('ticker-dropdown-item-active');

        ticker.current = ticker.params.data[counter].keyword;
        if(params.transition === 'fade')
          box.fadeIn(params.transitionLength);
        if(params.transition === 'slideDown')
          box.slideDown(params.transitionLength);
        if(params.transition === 'slideUp')
          box.slideUp(params.transitionLength);
        counter++;
      });
      ticker.timer = setTimeout(tickerTimer, params.showDurationFull);
    })();
    return ticker;
  },

  clear: function(ticker){
    ticker.params.element.empty();
    clearTimeout(ticker.timer);
  },

  findItemIndex: function(ticker, keyword){
    for(var i = 0; i < ticker.params.data.length; i++){
      if(ticker.params.data[i].keyword === keyword){
        return i;
      }
    }
    return -1;
  }

}