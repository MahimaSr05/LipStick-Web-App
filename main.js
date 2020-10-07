lipstickX=0;
lipstickY=0;

function preload()
{
    lipstick_lips=loadImage("https://i.postimg.cc/bNQKx4dB/lipstick.png");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}


function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lipstickX=results[0].pose.lipstick.x -30;
        lipstickY=results[0].pose.lipstick.y -30;
        console.log("lipstick x = " + results[0].pose.lipstick.x );
        console.log("lipstick y = " + results[0].pose.lipstick.y );
    }
}


function draw()
{
    image(video,0,0,300,300);
    image(lipstick_lips,lipstickX,lipstickY,40,40);
}

function take_snapshot()
{
    save("lipstickWebApp.png");
}