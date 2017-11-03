/**
 * 
 * @jomsou
 * @date    2017-10-29 09:24:01
 * @version 1.0
 */
/*--------------------------------简单tab切换----------------------------------------*/

window.onload = function ()
{
	var oDiv = document.getElementById('div1');
	var aBtn = oDiv.getElementsByTagName('input');
	var aDiv = oDiv.getElementsByTagName('div');
	for (var i=0;i<aBtn.length;i++)
	{
		aBtn[i].index = i;
		aBtn[i].onclick = function()
		{
			for (var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className = '';			
				aDiv[i].style.display = 'none';
			}
			this.className = 'active';
			aDiv[this.index].style.display = 'block';
		}
	}
};

/*--------------------------------分享到----------------------------------------*/

window.onload = function () {
	var oDiv1 = document.getElementById('div1');
	oDiv1.onmouseover = function() {
		startMove(0);
	}
	oDiv1.onmouseout = function() {
		startMove(-150);
	}
};
var timer = null;
function startMove(iTage) {
	var oDiv1 = document.getElementById('div1');

	clearInterval(timer);
	timer = setInterval(function(){
		var speed = 0;

		if (oDiv1.offsetLeft>iTage) {
			speed = -10;
		}
		else {
			speed = 10;
		}
		if (oDiv1.offsetLeft==iTage){
			clearInterval(timer);
		}
		else{
			oDiv1.style.left = oDiv1.offsetLeft+speed+'px';
		}
	},30)
};

/*--------------------------------右侧悬浮框----------------------------------------*/

window.onscroll = function() {
		var oDiv = document.getElementById('div1');
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		startMove(document.documentElement.clientHeight-oDiv.offsetHeight+scrollTop);
	};
	var timer = null;
	function startMove(iTage) {
		var oDiv = document.getElementById('div1');

		clearInterval(timer);
		timer = setInterval(function() {
			var speed = (iTage-oDiv.offsetTop)/4;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			if (oDiv.offsetTop==iTage){
				clearInterval(timer);
			}
			else{
				oDiv.style.top = oDiv.offsetTop+speed+'px';
			}
		},30);
	}


/*--------------------------------右侧悬浮框----------------------------------------*/

