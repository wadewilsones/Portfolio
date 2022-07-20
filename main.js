if(window.location == 'file:///D:/dev/portfolio/index.html'){
    displayProjectInfo();
}


/*PROJECTS*/
//Display information about the project

function displayProjectInfo () {    
    let projects = document.querySelectorAll('.projects-info');
    const projectInfo = [
        {
            id:'mood',
            name:'Mood App',
            descr:'This web application was made with Node.JS, Express, React.js, and PostgreSQL. REST API was applied for back and front-end communication. The app has implemented authentication and authorization.',
            link:'https://mood-tracker-application.herokuapp.com/login'
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
            link:'https://github.com/wadewilsones/Travel-app'
        },
        {
            id:'store',
            name:'Bicycle Store Website',
            descr:'Website for a bicycle store. Made  by using HTML5, CSS3',
            link:'https://wadewilsones.github.io/ViciousCyclesProject/'
        },
    ]

    let newArray = Array.from(projects);

    projects.forEach((project) => {
        project.addEventListener('mouseover', function showProjectInfo(event) {
            event.target.innerHTML = "<p>" + projectInfo[newArray.indexOf(project)].descr + "</p>"
        });

        project.addEventListener('mouseleave', function hideProjectInfo(e) {
            e.target.innerHTML = '';
            e.target.innerHTML +=  "<a href='" + projectInfo[newArray.indexOf(project)].link + "'>" + projectInfo[newArray.indexOf(project)].name + "</a>";
        });

    
    })


}


// Display Hamburger Button
function showMenu() {
    const ul = document.querySelector('#header_links');

    if(ul.style.display === 'block'){
        ul.style.display = 'none';
    }
    else{
        ul.style.display = 'block';
    }
}

window.onload = {
    
}