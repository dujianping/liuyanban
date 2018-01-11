$(function(){
	let text = $('.text')[0];
	let boxs = $('.box')[0];
	let bottom = $('.bottom1')[0];
	let span1 = $('.span1')[0];
	let span2 = $('.span2')[0];
	let input=$('input')[0];
	let button=$('button')[0];
	let value;
	let value1;
	let n=1;
	text.onkeyup = function(){
		
		
		span1.innerText = this.value.length;
		span2.innerText =100- this.value.length;
	
		value=this.value;

	}
	input.onkeyup = function(){
	
		value1=this.value;

	}

	text.onkeydown = function(e){
		if(e.keyCode == 13){
			bottom.innerHTML=`
				<div class="bottom">
					<img src="500352940.jpg" alt="">
					<div class="nei">
						<h1>${value1}</h1>
						<p>${value}<span>第${n}楼</span></p>
					</div>
				</div>
			`+bottom.innerHTML;
			/*let t = $('<div>');
			t.className = 'bottom';
			t.innerText = value1+':';
			t.innerText += value+'第'+n+'楼';
			n++;
			t.inbeto(bottom);*/
			n++;
			this.value = null;
			input.value=null;
		}
	}
	button.onclick=function(){
		bottom.innerHTML=`
				<div class="bottom">
					<img src="500352940.jpg" alt="">
					<div class="nei">
						<h1>${value1}</h1>
						<p>${value}<span>第${n}楼</span></p>
					</div>
				</div>
			`+bottom.innerHTML;
			n++;
		text.value = null;
		input.value=null;
		span1.innerText = text.value.length;
		span2.innerText =100- text.value.length;
	}
})