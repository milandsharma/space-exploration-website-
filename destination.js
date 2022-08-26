// for button
let moon = document.querySelectorAll('.btn-con span')[0];
let mars = document.querySelectorAll('.btn-con span')[1];
let europa = document.querySelectorAll('.btn-con span')[2];
let titan = document.querySelectorAll('.btn-con span')[3];

// location
let satellite_name = document.querySelector(".specification h1");
let satellite_description = document.querySelector(".specification p"); 
let satellite_image = document.querySelector(".moon"); 
let satellite_distance = document.querySelector(".distance p");
let satellite_time = document.querySelector(".time p");


// empty elements 
let empty_name = document.createElement("h1");
let empty_description = document.createElement("p");
let empty_image = document.createElement("img");
empty_image.className = "moon";
let empty_distance = document.createElement("p");
let empty_time = document.createElement("p");


// events
mars.addEventListener("click", function(){
    mars.style.transform = "scale(1.3)";
    mars.style.textDecoration = "underline white";
    moon.style.transform = "scale(1)";
    moon.style.textDecoration = "none";
    europa.style.transform = "scale(1)";
    europa.style.textDecoration = "none";
    titan.style.transform = "scale(1)";
    titan.style.textDecoration = "none";

    fetch("data.json").then((res) => res.json()).then((data) => { 
        let heading = data.destinations[1].name;
        let description = data.destinations[1].description;
        let image = data.destinations[1].images.png;
        let distance = data.destinations[1].distance;
        let time = data.destinations[1].travel;


        //local storage for destination of mars
        empty_description.innerHTML = description;
        empty_image.src = image;
        empty_distance.innerHTML = distance;
        empty_time.innerHTML = time;
        empty_name.innerHTML = heading;

        // replace elements
        satellite_description.replaceWith(empty_description);
        satellite_image.replaceWith(empty_image);
        satellite_distance.replaceWith(empty_distance);
        satellite_time.replaceWith(empty_time);
        satellite_name.replaceWith(empty_name);
    }).catch((err) => {
        console.log(err);
    })
});

europa.addEventListener("click", function(){
    europa.style.transform = "scale(1.3)";
    europa.style.textDecoration = "underline white";
    moon.style.transform = "scale(1)";
    moon.style.textDecoration = "none";
    mars.style.transform = "scale(1)";
    mars.style.textDecoration = "none";
    titan.style.transform = "scale(1)";
    titan.style.textDecoration = "none";





    fetch("data.json").then((res) => res.json()).then((data) => { 
        let heading = data.destinations[2].name;
        let description = data.destinations[2].description;
        let image = data.destinations[2].images.png;
        let distance = data.destinations[2].distance;
        let time = data.destinations[2].travel;

        //local storage for destination of europa
        empty_description.innerHTML = description;
        empty_image.src = image;
        empty_distance.innerHTML = distance;
        empty_time.innerHTML = time;
        empty_name.innerHTML = heading;
        
        // replace elements
        satellite_description.replaceWith(empty_description);
        satellite_image.replaceWith(empty_image);
        satellite_distance.replaceWith(empty_distance);
        satellite_time.replaceWith(empty_time);
        satellite_name.replaceWith(empty_name);
    })
})

moon.addEventListener("click", function(){
    moon.style.transform = "scale(1.3)";
    moon.style.textDecoration = "underline white";
    mars.style.transform = "scale(1)";
    mars.style.textDecoration = "none";
    europa.style.transform = "scale(1)";
    europa.style.textDecoration = "none";
    titan.style.transform = "scale(1)";
    titan.style.textDecoration = "none";




    fetch("data.json").then((res) => res.json()).then((data) => { 
        let heading = data.destinations[0].name;
        let description = data.destinations[0].description;
        let image = data.destinations[0].images.png;
        let distance = data.destinations[0].distance;
        let time = data.destinations[0].travel;

        //local storage for destination of moon
        empty_description.innerHTML = description;
        empty_image.src = image;
        empty_distance.innerHTML = distance;
        empty_time.innerHTML = time;
        empty_name.innerHTML = heading;
        
        // replace elements
        satellite_description.replaceWith(empty_description);
        satellite_image.replaceWith(empty_image);
        satellite_distance.replaceWith(empty_distance);
        satellite_time.replaceWith(empty_time);
        satellite_name.replaceWith(empty_name);
    })
})

titan.addEventListener("click", function(){
    titan.style.transform = "scale(1.3)";
    titan.style.textDecoration = "underline white";
    moon.style.transform = "scale(1)";
    moon.style.textDecoration = "none";
    europa.style.transform = "scale(1)";
    europa.style.textDecoration = "none";
    mars.style.transform = "scale(1)";
    mars.style.textDecoration = "none";




    fetch("data.json").then((res) => res.json()).then((data) => { 
        let heading = data.destinations[3].name;
        let description = data.destinations[3].description;
        let image = data.destinations[3].images.png;
        let distance = data.destinations[3].distance;
        let time = data.destinations[3].travel;

        //local storage for destination of titan
        empty_description.innerHTML = description;
        empty_image.src = image;
        empty_distance.innerHTML = distance;
        empty_time.innerHTML = time;
        empty_name.innerHTML = heading;
        
        // replace elements
        satellite_description.replaceWith(empty_description);
        satellite_image.replaceWith(empty_image);
        satellite_distance.replaceWith(empty_distance);
        satellite_time.replaceWith(empty_time);
        satellite_name.replaceWith(empty_name);
    })
})