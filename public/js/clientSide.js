//jshint esversion:6
console.log('Client side javascript!');
// import Typewriter from 'typewriter-effect/dist/core';
// const title = document.getElementById('typestring');
// const typewriter = new Typewriter(title, {
//     loop: true,
//     autoStart: true
// });
// typewriter.typeString("Enter name of your city to get weather information!").start();   

var i = 0, text;
text = "Enter name of your city to get weather information!";

const typing = ()=>{
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 90);
    }
};
typing();
    


const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = searchElement.value;

    messageOne.textContent = 'Loading...';
    //Fetch API
fetch('/weather?address=' + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageTwo.textContent = data.error;
           } else{
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
        
    });
}); 
});
