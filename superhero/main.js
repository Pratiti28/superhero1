var canvas=new fabric.Canvas('myCanvas');
 x=10;
 y=10;
 blockwidth=30;
 blockheight=30;
var player="";
var block="";
function playerupdate()
{
    fabric.Image.fromURL("player.png",function(Img){
        player=Img;
        player.scaleToWidth(150);
    player.scaleToHeight(140);
    player.set({
        top:y,
        left:x
    });
    canvas.add(player);
    });

}
function blockupdate(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block=Img;
        block.scaleToWidth(blockwidth);
    block.scaleToHeight(blockheight);
    block.set({
        top:y,
        left:x
    });
    canvas.add(block);
    });

}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var key=e.keyCode;
    console.log(key);
    if(e.shiftKey==true && key=="80"){
        blockheight=blockheight+10
        blockwidth=blockwidth+10
        document.getElementById("currentheight").innerHTML=blockheight;
        document.getElementById("currentwidth").innerHTML=blockwidth;
    }
    if(e.shiftKey==true && key=="77"){
        blockheight=blockheight+10
        blockwidth=blockwidth+10
        document.getElementById("currentheight").innerHTML=blockheight;
        document.getElementById("currentwidth").innerHTML=blockwidth;
    }
    if(key=="38") {
        up();
        console.log("up");
    }
    if(key=="40"){
        down();
        console.log("down");
    }
    if(key=="37"){
        left();
        console.log("left");
    }
    if(key=="39"){
        Right();
        console.log("right");
    }
    if(key=="67"){
        blockupdate("cloud.jpg");
        console.log("c");
    }
    if(key=="68"){
        blockupdate("dark_green.png");
        console.log("d");
    }
    if(key=="71"){
        blockupdate("ground.png");
        console.log("g");
    }
    if(key=="76"){
        blockupdate("light_green.png");
        console.log("l");
    }
    if(key=="82"){
        blockupdate("roof.jpg");
        console.log("r");
    }
    if(key=="84"){
        blockupdate("trunk.jpg");
        console.log("t");
    }
    if(key=="85"){
        blockupdate("unique.png");
        console.log("u");
    }
    if(key=="87"){
        blockupdate("wall.jpg");
        console.log("w");
    }
    if(key=="89"){
        blockupdate("yellow_wall.png");
        console.log("y");
    }
}
function left(){
    if(x>0){
        x=x-blockwidth;
        console.log(x+", "+y);
        console.log(blockwidth);
        canvas.remove(player);
        playerupdate();
    }
}
function Right(){
    if(x<=850){
        x=x+blockwidth;
        console.log(x+", "+y);
        console.log(blockwidth);
        canvas.remove(player);
        playerupdate();
    }
}
function up(){
    if(y>=0){
        y=y-blockheight;
        console.log(x+", "+y);
        console.log(blockheight);
        canvas.remove(player);
        playerupdate();
    }
}
function down(){
    if(y<=460){
    y=y+blockheight;
    console.log(x+", "+y);
    console.log(blockheight);
    canvas.remove(player);
    playerupdate();
    }
}

