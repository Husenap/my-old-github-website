MAX=64;
PI2 = Math.PI*2;

function Saw(t)
{
	return t%1;
}

onload = function update(){
	requestAnimationFrame(update);

	if(!window.time){
		time = 0;
		frame = 0;
		timeNextFrame = 0;

		str = "";
		s = !a.src;
	}

	currentTime = s ? MAX : a.currentTime;
	while(time < currentTime){
		while(time < timeNextFrame){
			if(s){
				v =  Saw(time * 40);

				str += String.fromCharCode(v*32 + 127);
			}
			time += 1/16384;
		}
		frame++;
		timeNextFrame += 1/60;
	}

	if(s){
		a.src = 'data:audio/wav;base64,'+
				'UklGRiQAAABXQVZFZm10IBAAAAABAAEAA'+
				'EAAAABA'+
				'AAABAAgAZGF0YQAAAAAA' + btoa(str);
		a.play();
		time = 0;
	}
};