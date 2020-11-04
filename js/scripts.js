console.log('Hello from js/scripts.js!');
console.log('Hello from js/scripts.js!');

const customName = document.getElementById('customname');
const customstate = document.getElementById('customstate')
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'Hello! Tomorrow it will be 94 fahrenheit and :insertw: in Los Angeles, California. So you might want to take a :insertx: with you when going for a walk or wear a :inserty: if you’re staying indoors. Please be careful if you’re lifting anything over 30 pounds in this weather or you might :insertz:.';
let insertX = ['umbrella','sweater','dog', 'cat'];
let insertY = ['hat','pair of socks', 't-shirt'];
let insertZ = ['pass out','sweat profusely','pull a muscle'];
let insertW = ['sunny', 'rainy', 'cloudy', 'windy'];

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let wItem = randomValueFromArray(insertW);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertw:', wItem);

  if(customName.value !== '') {
     const name = customName.value;
     newStory = newStory.replace('Los Angeles',name);
   }

   if(customstate.value !== '') {
      const name = customstate.value;
      newStory = newStory.replace('California',name);
    }

   if(document.getElementById("uk").checked) {
     const weight = Math.round(30*0.0714286) + ' stone';
     const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
     newStory = newStory.replace('94 fahrenheit',temperature);
     newStory = newStory.replace('30 pounds',weight);
   }

   story.textContent = newStory;
   story.style.visibility = 'visible';
 }

 randomize.addEventListener('click', result);
