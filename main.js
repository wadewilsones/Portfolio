let profile = document.querySelector('#profile-pic');
let container = document.querySelector('#container')

//Display information

function displayData (){
    container.innerHTML = "<p>"+text+"</p>";
}

let text = 'Hello, my name is Vlada. I am a motivated self-taught front-end developer. I have +1.5 years of experience with technologies like HTML, CSS, JavaScript, React, and Node. Recently created and deployed my own application using the MERN stack. Currently learning Python and Flask for back-end!'

function displayPic (){
    container.innerHTML = '';
}



container.addEventListener('mouseover', displayData);
container.addEventListener('mouseleave', displayPic);




