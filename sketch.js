var marks = [24,25,26]
function score_average()
{
  var sum = marks[0]+marks[1]+marks[2]
  var average = sum/marks.length
  console.log("the total mark is "+sum+"and the average is "+average)
}
function setup() {
  createCanvas(400, 400);
score_average()
  
 
}
function draw() {

  background(100,200,50);
  drawSprites();
  
}

