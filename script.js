
// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');

}

let img ;
//Other Variables
let mX;
let mY;
let canvasX1;
let canvasX2;
let canvasY1;
let canvasY2;
let nameIn;
let monName;
let savImg;
let genMon;


function setup(){
  createCanvas(1695, 824);
  //Input for monster Name
  nameIn = createInput();
  nameIn.position(250, 115);
  //Button to Save image & run Classifier
  savImg = createButton('Generate Monster Traits');
  savImg.position(440, 710);
  savImg.mousePressed(saveimg);
  //
  genMon = createButton('Generate Monster Traits');
  genMon.position(width/2, 710);
  genMon.mousePressed(classifyImg);
  // Button to clear 'Canvas'
  clBut = createButton('Clear');
  clBut.position(380, 710);
  clBut.mousePressed(clearSpace);
  //
    background(220);
    rect(width/40, height/6, 550,550);
    loadImage(monName+'.jpg', img => {
      image(img, 0, 0);  });

};
function draw() {
  mX= mouseX;
  mY= mouseY;
  canvasX1= width/40;
  canvasX2= (width/40)+547;
  canvasY1= height/6;
  canvasY2= (height/6)+547;

  //Text that says
  noStroke();
  fill(255);

  if(mX> canvasX1+3){
    if(mX< canvasX2){
      if(mY> canvasY1+3){
        if(mY< canvasY2){
          fill(0)
          //ellipse(mouseX,mouseY,10,10);
          if (mouseIsPressed) {
            ellipse(mX, mY, 7, 7);
}

        }
      }
    }
  }

}
// Function to save the image
function saveimg(){
  let monsterDrawing = get(canvasX1, canvasY1, 550,550);
  monName = nameIn.value();
  save(monsterDrawing, monName+".jpg");
  console.log('Image Saved')
  //img = createImg(monName+".jpg");

}

function classifyImg(){
  // Make a prediction with a selected image
  classifier.predict(img, function(err, results) {
        console.log(results);
  });

}
// Function to Clear Canvas
function clearSpace(){
  rect(width/40, height/6, 550,550)

}
