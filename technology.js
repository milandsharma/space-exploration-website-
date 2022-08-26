// btn
let one = document.querySelectorAll(".btn span")[0];
let two = document.querySelectorAll(".btn span")[1];
let three = document.querySelectorAll(".btn span")[2];

// calling content
let heading = document.querySelector(".description h1");
let description = document.querySelector(".description p");
let image = document.querySelector(".image"); 

// empty content
let empty_heading = document.createElement("h1");
let empty_description = document.createElement("p");
let empty_image = document.createElement("img");
empty_image.className = "image"

// Events
two.addEventListener("click", function(){
    two.style.transform = "scale(1.3)";
    two.style.margin = "25px 0"
    one.style.transform = "scale(1)";
    three.style.transform = "scale(1)";

    fetch("data.json").then((res)=>res.json()).then((data)=>{
        let name = data.technology[1].name;
        let Spaceport_description = data.technology[1].description;
        let Spaceport_image = data.technology[1].images.portrait;
        

        // empty content
        empty_heading.innerHTML = name;
        empty_description.innerHTML = Spaceport_description;
        empty_image.src = Spaceport_image;

        // replace
        heading.replaceWith(empty_heading);
        description.replaceWith(empty_description);
        image.replaceWith(empty_image);
    })
});

three.addEventListener("click", function(){
    three.style.transform = "scale(1.3)";
    three.style.margin = "25px 0"
    one.style.transform = "scale(1)";
    two.style.transform = "scale(1)";
    two.style.margin = "10px 0";

    fetch("data.json").then((res)=>res.json()).then((data)=>{
        let name = data.technology[2].name;
        let Spaceport_description = data.technology[2].description;
        let Spaceport_image = data.technology[2].images.portrait;
        

        // empty content
        empty_heading.innerHTML = name;
        empty_description.innerHTML = Spaceport_description;
        empty_image.src = Spaceport_image;

        // replace
        heading.replaceWith(empty_heading);
        description.replaceWith(empty_description);
        image.replaceWith(empty_image);
    })
});

one.addEventListener("click", function(){
    one.style.transform = "scale(1.3)";
    one.style.margin = "25px 0"
    two.style.transform = "scale(1)";
    three.style.transform = "scale(1)";
    two.style.margin = "10px 0";
    fetch("data.json").then((res)=>res.json()).then((data)=>{
        let name = data.technology[0].name;
        let Spaceport_description = data.technology[0].description;
        let Spaceport_image = data.technology[0].images.portrait;
        

        // empty content
        empty_heading.innerHTML = name;
        empty_description.innerHTML = Spaceport_description;
        empty_image.src = Spaceport_image;

        // replace
        heading.replaceWith(empty_heading);
        description.replaceWith(empty_description);
        image.replaceWith(empty_image);
    })
});