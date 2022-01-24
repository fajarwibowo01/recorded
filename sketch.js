// Video
let video;
let img;
let label;


let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/uzotGH0Jr/';


// STEP 1: Load the model!
function preload() {

  classifier = ml5.soundClassifier(modelURL + 'model.json');
  img = loadImage('file/Memuat.jpg');

}

function setup() {
  
  createCanvas(1080, 520);
   
  // STEP 2: Start classifying
  classifyAudio();
  
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}


// STEP 3: Get the classification!

function draw() {
  background(0);

  // STEP 4: Draw the label
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 70);

  if (label == "Nada Do") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Re") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Mi") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Fa") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Sol") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada La") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada si") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Do Tinggi") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Re Tinggi") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Mi Tinggi") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Fa Tinggi") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Sol Tinggi") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada La Tinggi") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else if (label == "Nada Si Tinggi") {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  } else {
    image(img, 0, height / -250, img.width / 2, img.height/ -250);
    imageMode(CORNERS);
    image(img, 150, 400, 900, 40);
  }

  textSize(200);
  
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  console.log('hasil', results)
  label = results[0].label;

  if (label == 'Nada Do') {
    img = loadImage('file/nada1.jpg')
  } else if (label == 'Nada Re') {
    img = loadImage('file/nada2.jpg')
  } else if (label == 'Nada Mi') {
    img = loadImage('file/nada3.jpg')
  } else if (label == 'Nada Fa') {
    img = loadImage('file/nada4.jpg')
  } else if (label == 'Nada Sol') {
    img = loadImage('file/nada5.jpg')
  } else if (label == 'Nada La') {
    img = loadImage('file/nada6.jpg')
  } else if (label == 'Nada Si') {
    img = loadImage('file/nada7.jpg')
  } else if (label == 'Nada Do Tinggi') {
    img = loadImage('file/nada1_tinggi.jpg')
  } else if (label == 'Nada Re Tinggi') {
    img = loadImage('file/nada2_tinggi.jpg')
  } else if (label == 'Nada Mi Tinggi') {
    img = loadImage('file/nada3_tinggi.jpg') 
  } else if (label == 'Nada Fa Tinggi') {
    img = loadImage('file/nada4_tinggi.jpg')
  } else if (label == 'Nada Sol Tinggi') {
    img = loadImage('file/nada5_tinggi.jpg')
  } else if (label == 'Nada La Tinggi') {
    img = loadImage('file/nada6_tinggi.jpg')
  } else if (label == 'Nada Si Tinggi') {
    img = loadImage('file/nada7_tinggi.jpg')
  } else {
    img = loadImage('file/background_Noice.jpg') 
  }

   label = `${results[0].label} ${nf(100 * results[0].confidence, 2, 1)}%`;
  classifyAudio();
}

