/*Copyright @2016 smartBoy

常用的组件：
changeTag : 标签选项卡
backTop : 置顶
drag : 元素的拖拽



*/


/*banner module*/

// 1.自动轮播函数


/*changeTag : 标签选项卡
arrHead : 切换的标题
arrContent ： 切换标题对应的显示内容。
*/
function changeTag(arrHead,arrContent){
	for(var i=0;i<arrHead.length;i++){
		arrHead[i].index = i;
		arrHead[i].onclick = function(){
			for(var i=0;i<arrContent.length;i++){
				arrContent[i].style.display = 'none';
			}
			arrContent[this.index].style.display = 'block';
		};
	}
}


/*
backTop : 页面置顶按钮函数。
包含两个函数，
隐藏和现实top置顶按钮的设定。
按钮的点击事件

// 	clientHeight : 浏览器可视区域高度
// 	offsetHeight ：+滚动条+边框
// 	scrollHeight ：+padding   最高

*/
function backTop(obj){
	var timer = null;
	/*获取页面可视区域高度*/
	var pageLookHeight = document.documentElement.clientHeight;
	// alert(pageLookHeight);
	window.onscroll = function(){//隐藏和现实top置顶按钮的设定。
		/*获取scrollTop值*/
		var top = document.body.scrollTop;
		/*如果滚动高度大于页面可视区域高度，则top按钮显示出来，否则隐藏*/
		if(top >= 500){
			obj.style.display = "block";
		}else {
			obj.style.display = "none";
		}
	};
	obj.onclick = function(){
		timer = setInterval(function(){
			var top = document.body.scrollTop;
			var speed = top /5;
			document.body.scrollTop = top - speed ;
			if(top == 0){
				clearInterval(timer);
			}
		}, 30);
	};
}

/*
drag : 元素的拖拽
obj ： 要拖拽的元素，（该元素CSS样式要设置position:absolute）
*/

function drag(obj){
	
	obj.onmousedown = function(ev){
		var ev = ev || event;
		var disX = ev.clientX - this.offsetLeft;
		var disY = ev.clientY - this.offsetTop;

		if(obj.setCapture){
			obj.setCapture();
		}//非标准ie：阻止浏览器默认拖拽行为

		document.onmousemove = function(ev){
			var ev = ev || event;
			obj.style.left = ev.clientX - disX + 'px';
			obj.style.top = ev.clientY - disY + 'px';
		}

		document.onmouseup = function(){
			document.onmousemove = document.onmouseup = null;
			if(obj.relaseCapture){
				obj.relaseCapture();//释放全局捕获			
			}
		}
		return false;//标准：阻止浏览器文字图片默认拖拽行为
	}
}