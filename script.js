
	function showR(value)
	{
		//var val = document.getElementById("initialRValue");
		//val.innerHTML = value;
		R = value;

		calculate();
	}

	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	var imgBatteryWidth = 80;
	var imgBatteryHeight = 40;
	var imgBatteryX = 170;
	var imgBatteryY = 190;
	var batteryCount = 0;
	var imgCurrent = new Image();
	var imgBattery = new Image();
	var R = 10;
	var I = 0.1;
	var V = 1.5;
	var flag = 0;
	


	imgCurrent.src="images/current.png";
	imgBattery.src="images/battery.png"
	
	function reset()
	{
		flag=0;
		R=10;
		I=0.1;
		V=1.5;
		batteryCount=0;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(imgCurrent,150,200,520,280);
		
		calculate();
	}
	function dispCurrent(){

	imgCurrent.onload=function(){
		//context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(imgCurrent,150,200,520,280);
	}

}

	//dispCurrent();
	calculate();

	function add_battery()
	{
		flag = 1;
		context.clearRect(0, 0, canvas.width, canvas.height);
		canvas.getContext("2d").drawImage(imgCurrent,150,200,520,280);
		if (batteryCount<=5)
		{
		//	context.drawImage(imgBattery, imgBatteryX, imgBatteryY, imgBatteryWidth, imgBatteryHeight);
			batteryCount = batteryCount + 1;
			if (batteryCount > 0)
			{	imgBatteryX = imgBatteryX + imgBatteryWidth; }
			V = batteryCount * 1.5;
		}
		calculate();
	}

	function displayBattery()
	{
		imgBatteryX = 170;
		for (var i=1; i <= batteryCount; i++)
		{
			context = canvas.getContext("2d");
			context.drawImage(imgBattery, imgBatteryX, imgBatteryY, imgBatteryWidth, imgBatteryHeight);
			//context.drawImage(imgCurrent, imgBatteryX, imgBatteryY, imgBatteryWidth, imgBatteryHeight);
			imgBatteryX = imgBatteryX + imgBatteryWidth; 
		}
	}

	function remove_battery()
	{
		
		if (flag == 1)
		{
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(imgCurrent,150,200,520,280);
			batteryCount = batteryCount - 1;
			V = V - 1.5;
			//displayBattery();
			calculate();
		}
		if (batteryCount==0){ flag=0; }
	}

	function calculate()
	{
		if (flag == 0){ 
			V = 0.1;
			I = 0.0;
		}
		else
			{	I = (V/R); }
		//context.clearRect(0, 0, canvas.width, canvas.height);


		dispCurrent();
		displayBattery();

		context.clearRect(20, 10, 700, 150);
		context.fillStyle="blue";
		context.font="38pt Times New Roman";
		context.fillText("I = "+I.toFixed(2), 200, 80);
		context.fillStyle="red";
		context.fillText("V = "+V.toFixed(1), 500, 80);
		context.fillText("R = "+R + " Ом", 350, 150)

	}