/*dark mode*/
const options = {
  bottom: '32px', // default: '32px'
  right: '22px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);

darkmode.showWidget();





/*Carousel words*/
var words = ['Dreamer', 'Problem solver', 'Enterprising', 'Leader of my self', 'Programmer', 'Minimalistic style addicted', 'Everything I want to be'];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1000);
function update_carousel_words(){
  word.innerHTML = words[counter];
  counter++;
  if(counter >= words.length){
    counter = 0;
  }
}
