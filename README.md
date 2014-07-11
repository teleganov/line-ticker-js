line-ticker.js
=========

A simple line-by-line color-coded ticker plugin (requires jQuery)

Installation
------------
Installation is easy. Just include line-ticker.js and line-ticker.css in your html file
```sh
<script src="line-ticker.js"></script>
<script src="line-ticker.css"></script>
```

Usage
-----
To create a line-ticker, you need the following parameters:
```sh
var params = {
    element: $('.tickerContainer'),
    data: [
        {keyword: 'msg1', text: 'This is message one', color: '#ffffff'},
        {keyword: 'msg2', text: 'This is message two', color: '#0f0f0f'}
    ],
    transition: 'fade',
    transitionLength: 500,
    showDuration: 4000
};
```
- *required* - **element:** A jQuery element in which the ticker will be rendered. The ticker will use 100% of the width and height of this element
- *required* - **data:** An array of {keyword, text, color} objects.
- optional - **transition:** (default: 'fade') The type of transition between items ('slide' or 'fade')
- optional - **transitionLength:** (default: 500) Length of the transition (in milliseconds)
- optional - **showDuration:** (default: 4000) Amount of time a single item is displayed (in milliseconds)

To render the ticker, simply pass in the parameters you created to LineTicker.render()
```sh
var myTicker = LineTicker.render(params);
```
If you need to modify the data in the ticker, just reference the var you created for it (or find the entry by an item keyword - i.e. 'msg1')
```sh
myTicker.data[0].text = "This is a new message";
```

Version
----

0.1