//clockwidget
var time;
var timedata;
var timehour;
var timeminute;
var timeseconds;
var morning;


function updateTime() {
	time=new Date();
	timehour=time.getHours();
	timeminutes=time.getMinutes();
	timeseconds=time.getSeconds();
	morning="AM"
	if(timehour>12){
		timehour-=12;
		morning="PM"
	}
	if(timeminutes<10){
		timeminutes="0"+timeminutes;
	}
	if(timeseconds<10){
		timeseconds="0"+timeseconds;
	}
	timedata.value=timehour+":"+timeminutes+":"+timeseconds+" "+morning;
}

function start() {
	timedata=document.getElementById("hour");
	intId=setInterval(function(){updateTime()},1000);
}