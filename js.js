var digit =
    [
        [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]
        ],//0
        [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
        ],//1
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,1,1],
            [1,1,1,1,1,1,1]
        ],//2
        [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//3
        [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1]
        ],//4
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//5
        [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//6
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
        ],//7
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//8
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,1,1,0,0,0,0]
        ],//9
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]//:
    ];
    var windows_width=1200;  //canvas场景宽度
    var windows_height=668;		//canvas场景高度
    var radius=8;	//圆的半径
    var _top=60;    
    var _left=30;
    var balls = [];
	const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]

	var curTime=0;
    window.onload=function () {
    	var canvas=document.getElementById('canvas');
    	var context=canvas.getContext('2d');

    	canvas.width=windows_width;
    	canvas.height=windows_height;
    	curTime =nowDate(); 
		setInterval(
			function(){
    			render(context);
    			update();
			},50
		)

    }
    function nowDate () {      //获取当前时间函数
    	var nowDate = new Date();
    	return nowDate;
    }
    function update(){       // 对比下一秒时间和当前时间，对圆点进行绘制
    	var nextTime=nowDate();
    	var next_hours=nextTime.getHours();
    	var next_minutes=nextTime.getMinutes(); 
    	var next_seconds=nextTime.getSeconds();
    	
    	var cur_hours=curTime.getHours();
    	var cur_minutes=curTime.getMinutes(); 
    	var cur_seconds=curTime.getSeconds();
    	if(next_seconds != cur_hours){
    		if ( parseInt(next_hours/10) != parseInt(cur_hours/10) ) {
    			addBalls(_left , _top , parseInt(cur_hours/10));
    		}
    		if ( parseInt(next_hours%10) != parseInt(cur_hours%10) ) {
    			addBalls(_left+15*(radius+1) , _top , parseInt(cur_hours/10));
    		}
    		if ( parseInt(next_minutes/10) != parseInt(cur_minutes/10) ) {
    			addBalls(_left+39*(radius+1) , _top , parseInt(cur_minutes/10));
    		}
    		if ( parseInt(next_minutes%10) != parseInt(cur_minutes%10) ) {
    			addBalls(_left+54*(radius+1) , _top , parseInt(cur_minutes%10));
    		}
    		if ( parseInt(next_seconds/10) != parseInt(cur_seconds/10) ) {
    			addBalls(_left+78*(radius+1) , _top , parseInt(cur_seconds/10));
    		}
    		if ( parseInt(next_seconds%10) != parseInt(cur_seconds%10) ) {
    			addBalls(_left+93*(radius+1) , _top , parseInt(cur_seconds%10));
    		}
    		
    		curTime = nextTime;
    		
    	}
    	
    	updateBalls();
    	
    }
    function updateBalls () {       
    	for (var i=0;i<balls.length;i++){     //小球运动
    		balls[i].x += balls[i].vx;
        	balls[i].y += balls[i].vy;
        	balls[i].vy += balls[i].g;
        	
        	if( balls[i].y >= windows_height-radius ){     //碰撞检测
	            balls[i].y = windows_height-radius;
	            balls[i].vy = - balls[i].vy*0.55;
	        }
    	}
    }
    
    function addBalls (x,y,num) {      //绘制彩色小球
    	for (var i=0;i<digit[num].length;i++) {
    		for (var j=0;j<digit[num][i].length;j++) {
    			if(digit[num][i][j] == 1){
    				var aBall={
	                    x:x+j*2*(radius+1)+(radius+1),
	                    y:y+i*2*(radius+1)+(radius+1),
	                    g:1.5+Math.random(),
	                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
	                    vy:-5,
	                    color: colors[ Math.floor( Math.random()*colors.length ) ]    				
	    			}
    				balls.push( aBall )
    			}
    			
    		}
    	}
    }
    //canvas绘制函数
    function render( cxt ){   
    	
	    var myDate = new Date();    //获取时间
    	var hours=myDate.getHours();
    	var minutes=myDate.getMinutes(); 
    	var seconds=myDate.getSeconds();
    	cxt.clearRect(0,0,windows_width, windows_height);   //清空场景
    	renderDigit(_left , _top , parseInt(hours/10) , cxt);   //开始绘制
    	renderDigit(_left+15*(radius+1) , _top , parseInt(hours%10) , cxt);
    	renderDigit(_left+30*(radius+1) , _top , 10 , cxt);
    	renderDigit(_left+39*(radius+1) , _top , parseInt(minutes/10) , cxt);
    	renderDigit(_left+54*(radius+1) , _top , parseInt(minutes%10) , cxt);
    	renderDigit(_left+69*(radius+1) , _top , 10 , cxt);
    	renderDigit(_left+78*(radius+1) , _top , parseInt(seconds/10) , cxt);
    	renderDigit(_left+93*(radius+1) , _top , parseInt(seconds%10) , cxt);
    	
    	    for( var i = 0 ; i < balls.length ; i ++ ){
        cxt.fillStyle=balls[i].color;

        cxt.beginPath();
        cxt.arc( balls[i].x , balls[i].y , radius , 0 , 2*Math.PI , true );
        cxt.closePath();

        cxt.fill();
    }

    }
    //获取点的数据，绘制点
    function renderDigit( x , y , num , cxt ){
    	cxt.fillStyle="rgb(0,102,153)";

    	for (var i=0; i<digit[num].length; i++) {
    		for (var j=0; j<digit[num][i].length; j++){
    			if( digit[num][i][j] == 1 ){
    				cxt.beginPath();
    				cxt.arc(x+j*2*(radius+1)+(radius+1) , y+i*2*(radius+1)+(radius+1) , radius , 0 ,2*Math.PI );
    				cxt.closePath();

    				cxt.fill();

    			}
    		}
    	};

    }