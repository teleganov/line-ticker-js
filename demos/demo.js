var myTicker;
$(document).ready(function(){
	var params = {
		element: $('.tickerContainer'),
		data: [
			{keyword: 'msg1', text: 'Message One is a LINK!', color: "#54B5E1", link:'#'},
			{keyword: 'msg2', text: 'This is message two', color: "#52CD83"},
			{keyword: 'msg3', text: 'This is the third message', color: "#EC6F5A"}
		],
		transition: 'fade',
		transitionLength: 500,
		showDuration: 4000,
		padding: '7px 9px 0px 9px',
    shapeRadius: '0px',
    shapeSize: '13px',
    shapeBorder: '#888'
	};
	myTicker = LineTicker.render(params);
});