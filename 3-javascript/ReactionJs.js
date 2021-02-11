var startTime = new Date().getTime();
			
			function getRandomColor(){
				color="#";
				for(var i=0 ;i<6;i++){
					color+=Math.floor(Math.random()*10);
				}
				return color;
			}
			
			function makeShapeAppear(){
				document.getElementById("shape").style.top=Math.floor(Math.random()*500)+"px";
				document.getElementById("shape").style.left=Math.floor(Math.random()*1000)+"px";
				var randomHeight=(10+Math.floor(Math.random()*350))+"px";
				document.getElementById("shape").style.height=randomHeight;
				document.getElementById("shape").style.width=randomHeight;
				
				if(Math.random()>0.6){
				document.getElementById("shape").style.borderRadius="50%"
				}else{
				document.getElementById("shape").style.borderRadius="0%"
				}
				
				document.getElementById("shape").style.backgroundColor=getRandomColor();
				document.getElementById("shape").style.display="block";
				startTime = new Date().getTime();
			}
			
			function makeShapeAppearDelay(){
			setTimeout(makeShapeAppear,700);
			}
			
			document.getElementById("shape").onclick=function(){
				var endTime= new Date().getTime();
				var timeTaken=(endTime-startTime)/1000;
				document.getElementById("timeTaken").innerHTML=timeTaken+"s";
				document.getElementById("shape").style.display="none";
				makeShapeAppearDelay();
			}