function careateHttpRequest(){var e=null;return window.ActiveXObject?e=new ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest&&(e=new XMLHttpRequest),e}function careateLrcElement(e,t){var n=document.createElement("p");n.id=e,n.innerHTML=t,document.getElementById("lrc").appendChild(n)}function loadLrc(){for(var e=0;e<lrclist.length;e++)careateLrcElement("lrc"+e,lrclist[e].lineLyric),0===parseInt(lrclist[e].time)&&(lrcLastIndex=e,document.getElementById("lrc"+e).className="active")}function activateLrc(e){for(var t=0;t<lrclist.length;t++)parseInt(lrclist[t].time)===e&&(t>=2&&(document.getElementById("lrc").getElementsByTagName("p")[0].style.marginTop="-"+.24*(t-1)+"rem"),document.getElementById("lrc"+lrcLastIndex).className="",document.getElementById("lrc"+t).className="active",lrcLastIndex=t)}function secondToString(e){var t=parseInt(e/60);return t+":"+(e-60*t)}function setStartTime(e){document.getElementById("starttime").innerHTML=e}function setEndTime(e){document.getElementById("endtime").innerHTML=e}function setProgress(){player.ended&&(document.getElementById("btn-control").style.display="none",stop()),document.getElementById("progress-bar").style.cssText="width: "+3.4*progressWidth*Math.ceil(player.currentTime)/songTime+"px; background: #56929F;",setStartTime(secondToString(Math.ceil(player.currentTime))),activateLrc(Math.ceil(player.currentTime))}function play(){intervalId=setInterval(function(){setProgress()},1e3),player.play(),document.getElementById("btn-control").onclick=stop,toggleBtnState("icon-weibiaoti1")}function stop(){player.pause(),document.getElementById("btn-control").onclick=play,toggleBtnState("icon-bofang"),clearInterval(intervalId)}function toggleBtnState(e){e="iconfont "+e,document.getElementById("btn-control-icon").className=e}function addClass(e,t){var n=e.className;e.className=n+" "+t}var intervalId,songTime,progressWidth,lrclist,lrcLastIndex,lrcIndex,player=document.getElementById("player");!function(){document.documentElement.style.fontSize=parseInt(window.innerWidth/4.14)+"px",progressWidth=parseInt(window.innerWidth/4.14),toggleBtnState("icon-bofang"),player.addEventListener("canplay",function(){songTime=Math.ceil(player.duration),setStartTime("0:00"),setEndTime(secondToString(songTime))}),document.getElementById("btn-control").onclick=play;var e=careateHttpRequest();e&&(e.open("get","http://m.kuwo.cn/newh5/singles/songinfoandlrc?musicId=3205315",!0),e.send(null),e.onreadystatechange=function(){4===e.readyState&&(200===e.status?(lrclist=JSON.parse(e.responseText).data.lrclist,loadLrc()):lrclist=[{time:"0",lineLyric:"暂无歌词"}])})}();