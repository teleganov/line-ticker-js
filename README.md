line-ticker.js
=========

A simple line-by-line color-coded ticker plugin (requires jQuery)

[Demo here](http://htmlpreview.github.io/?https://raw.githubusercontent.com/teleganov/line-ticker-js/master/demos/demo.html)

Installation
------------
Installation is easy. Just include line-ticker.js and line-ticker.css in your html file
```html
<script src="line-ticker.js"></script>
<link href="line-ticker.css" rel="stylesheet" type="text/css">
```

Usage
-----
To create a line-ticker, you need the following parameters:
```javascript
var params = {
    element: $('.tickerContainer'),
    data: [
        {keyword: 'msg1', text: 'This is message one', color: '#ffffff'},
        {keyword: 'msg2', text: 'This is message two', color: '#0f0f0f'}
    ],
    transition: 'fade',
    transitionLength: 500,
    showDuration: 4000,
    shapeCSS: {borderRadius:'10px',width:'13px',height:'13px',border:'1px solid #EFEFEF'},
    itemCSS: {padding:'7px 9px 0px 9px'}
};
```
- *required* - **element:** A jQuery element in which the ticker will be rendered. The ticker will fit to the size of this element
- *required* - **data:** An array of data objects.
- optional - **transition:** (default: 'fade') The type of transition between items ('fade', 'slideUp', 'slideDown)
- optional - **transitionLength:** (default: 500) Length of the transition (in milliseconds)
- optional - **showDuration:** (default: 4000) Amount of time a single item is displayed (in milliseconds)
- optional - **shapeCSS:** (default: {}) Camel-case CSS options for the shape
- optional - **itemCSS:** (default: {}) Camel-case CSS options for the main ticker item

To render the ticker, simply pass in the parameters you created to LineTicker.new()
```javascript
var myTicker = LineTicker.new(params);
```
If you need to modify the data in the ticker, call LineTicker.updateItem:
```javascript
// LineTicker.updateItem(tickerVar, keyword, {params});
LineTicker.updateItem(myTicker, "msg1", {text:"This is the new text for message 1", color:"#f0f0f0"});
```
To add new items to the ticker, call LineTicker.addItem:
```javascript
// LineTicker.addItem(tickerVar, {params});
LineTicker.addItem(myTicker, {keyword:"msg4", text:"This is a new message, msg4", color:"#f0f0f0"});
```
To remove items from the ticker, call LineTicker.removeItem:
```javascript
// LineTicker.removeItem(tickerVar, keyword);
LineTicker.removeItem(myTicker, "msg1");
```

Data
----
A data object must consist of (at least) a keyword, text, and a color: `{keyword:'msg1', text:'text', color:'#fff'}`  
  
**Additional parameters:**
- Adding a 'link' parameter (i.e. `link: 'newpage.html'`) will turn the element into a hyperlink to the indicated page

Customization
-------------
To further customize the styling of the ticker, you can modify line-ticker.css directly

Version
----

0.2