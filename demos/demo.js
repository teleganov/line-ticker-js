$(document).ready(function(){
	var params = {
		element: $('.tickerContainer'),
		data: [
			{keyword: 'msg1', text: 'Message One', color: "#54B5E1"},
			{keyword: 'msg2', text: 'This is message two', color: "#52CD83"},
			{keyword: 'msg3', text: 'This is the third message', color: "#EC6F5A"}
		],
		transition: 'fade',
		transitionLength: 500,
		showDuration: 4000,
		padding: '5px 9px 0px 9px'
	};
	var myTicker = LineTicker.render(params);
});