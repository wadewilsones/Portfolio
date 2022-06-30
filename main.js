if(window.location == 'file:///D:/Wake%20Tech/SUM22/WEB210/les7/about.html'){
    displayAboutme();
}

else{
    displayProjectInfo();
}

function displayAboutme(){

let profile = document.querySelector('#profile-pic');
let container = document.querySelector('#container');

function displayData (){
    container.innerHTML = "<p>"+text+"</p>";
}

let text = 'Hello, my name is Vlada. I am a motivated self-taught front-end developer. I have +1.5 years of experience with technologies like HTML, CSS, JavaScript, React, and Node. Recently created and deployed my own application using the MERN stack. Currently learning Python and Flask for back-end!'

function displayPic (){
    container.innerHTML = '';
}

container.addEventListener('mouseover', displayData);
container.addEventListener('mouseleave', displayPic);

}


/*PROJECTS*/
//Display information about the project

function displayProjectInfo () {    
    let projects = document.querySelectorAll('.projects-info');
    const projectInfo = [
        {
            id:'mood',
            name:'Mood App',
            descr:'This web application was made with Node.JS, Express, React.js, and PostgreSQL. REST API was applied for back and front-end communication. The app has implemented authentication and authorization.'

        },
        {
            id:'to-do',
            name:'To Do App',
            descr:'This web application was made with React.js and localStorage to keep user data inside their browser. The app functionality allows users to add, update and delete their plans for a day.',
            link:'https://wadewilsones.github.io/toDo-app/'
            
        },
        {
            id:'food-order',
            name:'Restuarant App',
            descr:'This web application was made with Vanilla JavaScript and localStorage. It allows users to add any dish to their cart and calculate the total cost for the order.',
            link:'https://wadewilsones.github.io/restaurant-app/'
        },
        {
            id:'travel',
            name:'Travel App',
            descr:'This web application was made with Vanilla JavaScript and third-party API. Users can add the trip destination and see the weather for the next 10 days in that location. Webpack bundle was used.',
            link:'https://mood-tracker-application.herokuapp.com/login'
        },
        {
            id:'weather',
            name:'Weather App',
            descr:'This is one of my first created web apps, using JavaScript and Weather API, users can get the weather for their location.',
            link:'https://mood-tracker-application.herokuapp.com/login'
        },
    ]

    let newArray = Array.from(projects);
    console.log(newArray)

    projects.forEach((project) => {
        project.addEventListener('mouseover', function showProjectInfo(event) {
            event.target.innerHTML = "<p>" + projectInfo[newArray.indexOf(project)].descr + "</p>"
        });

        project.addEventListener('mouseleave', function hideProjectInfo(e) {
            e.target.innerHTML = '';
            e.target.innerHTML +=  "<a href='" + projectInfo[0].link + "'>" + projectInfo[0].name + "</a>";
        });

    
    })


}
