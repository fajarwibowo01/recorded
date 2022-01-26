// Membuat Variable Video
let video;

// Membuat Variable image
let img;

// Membuat Variable Label
let label;

// Membuat Variable classifier
let classifier;

// Memanggil API
let modelURL = 'https://teachablemachine.withgoogle.com/models/uzotGH0Jr/';


// Memanggil API dari variable model URL dan meng-get dataset ke sistem
function preload() {

  classifier = ml5.soundClassifier(modelURL + 'model.json');
  img = loadImage('file/Memuat.jpg');

}

function setup() {
  
  createCanvas(1080, 520);
   
// Memanggil Method Klasifikasi Input Audio 
  classifyAudio();
  
}

// Method untuk mengklasifikasi input Audio
function classifyAudio() {
  classifier.classify(gotResults);
}


// Menampilkan hasil output berupa text, gambar dan nilai confidence
function draw() {
  background(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 70);
  image(img, 0, height / -250, img.width / 2, img.height/ -250);
  imageMode(CORNERS);
  image(img, 150, 400, 900, 40);
}


function gotResults(error, results) {
  if (error) {
    // console.error(error);
    return;
  }
  // console.log('hasil', results)
  label = results[0].label;

  // Mentukan gambar dan label
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
// Nilai Confidence
   label = `${results[0].label} ${nf(100 * results[0].confidence, 2, 1)}%`;
  classifyAudio();
}

