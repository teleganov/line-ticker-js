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
		transitionLength: 300,
		showDuration: 1000,
		itemCSS: {padding:'7px 9px 0px 9px'},
    shapeCSS: {borderRadius:'10px',width:'13px',height:'13px',border:'1px solid #EFEFEF'},
    hover: true
	};
	myTicker = LineTicker.new(params);
});