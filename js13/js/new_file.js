var oBtn = document.querySelector('#button');
var oMenu = document.querySelector('.menu');
var oItem = document.querySelectorAll('.item');
var oSub = document.querySelectorAll('.sub');
var oR = document.querySelectorAll('.fa-angle-right');
var vBtn = false,
	vItem = new Array(),
	num = 400;

oBtn.onclick = function() {
	if(!vBtn){
		oMenu.style.height = num + 'px';
		oBtn.style.transform = 'rotate(90deg)';
		vBtn = true;
	} else {
		oMenu.style.height = 0;
		oBtn.style.transform = 'rotate(0deg)';
		vBtn = false;
	}
}

for(var i = 0; i < oItem.length; i++){
	vItem[i] = false;
	(function(i) {
		oItem[i].addEventListener('click',function() {
			if(!vItem[i]){
				num += 130;
				oSub[i].style.height = 130 + 'px';
				oMenu.style.height = num + 'px';
				oR[i].style.transform = 'rotate(90deg)';
				vItem[i] = true;
			} else {
				num -= 130;
				oSub[i].style.height = 0;
				oMenu.style.height = num + 'px';
				oR[i].style.transform = 'rotate(0deg)';
				vItem[i] = false;
			}
		});
	})(i);
}