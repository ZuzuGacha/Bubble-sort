
let yPos=[];

function setup()
{
  frameRate(10);
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<windowWidth/10; i++)
  {
    yPos.push(Math.random()*windowHeight+1);
  }
}

function draw() 
{
  background(0, 0, 0);
  fill(192, 192, 192);
  for(i=0; i<windowWidth; i+=10)
  {
    let index=i/10;
    rect(i, windowHeight-yPos[index], 10, yPos[index]);
    
  }
  for(i=0; i<yPos.length-1; i++)
  {
    if(yPos[i]>yPos[i+1])
    {
      let c=yPos[i];
      yPos[i]=yPos[i+1];
      yPos[i+1]=c;
    }
  }
}