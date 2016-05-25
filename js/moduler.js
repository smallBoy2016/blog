/*Copyright @2016 smartBoy*/

// 开发组件的常用方法函数的封装

// alert(1);
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
