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
    padding: '5px 9px 0px 9px',
    shapeRadius: '0px',
    shapeSize: '13px',
    shapeBorder: '#444'
};
```
- *required* - **element:** A jQuery element in which the ticker will be rendered. The ticker will fit to the size of this element
- *required* - **data:** An array of data objects.
- optional - **transition:** (default: 'fade') The type of transition between items ('fade', 'slideUp', 'slideDown)
- optional - **transitionLength:** (default: 500) Length of the transition (in milliseconds)
- optional - **showDuration:** (default: 4000) Amount of time a single item is displayed (in milliseconds)
- optional - **padding:** (default: '0 0 0 0') CSS padding for ticker items (top, right, bottom, left)
- optional - **shapeRadius:** (default: '0px') border-radius of the shape
- optional - **shapeSize:** (default: '13px') width and height of the shape (equal)
- optional - **shapeBorder:** (default: '#000') Border color for the shape

To render the ticker, simply pass in the parameters you created to LineTicker.render()
```javascript
var myTicker = LineTicker.render(params);
```
If you need to modify the data in the ticker, just reference the var you created for it:
```javascript
myTicker.data[0].text = "This is a new message";
```

Data
----
A data object must consist of (at least) a keyword, text, and a color: `{keyword:'msg1', text:'text', color:'#fff'}`  
  
**Additional parameters:**
- Adding a 'link' parameter (i.e. `link: 'newpage.html'`) will turn the element into a hyperlink to the indicated page

Version
----

0.2