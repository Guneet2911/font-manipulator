noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(500 , 500);
    canvas.position(700 , 130);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized!");
}

function draw()
{
 background("lightgrey");
 textSize(difference);
 fill("black");
 text("Guneet" , noseX , noseY);
 document.getElementById("font_size").innerHTML = "Font Size = " + difference + "px";
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "diffrence = " + difference);
    }
}