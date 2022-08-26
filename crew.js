// btn
let commander = document.querySelectorAll(".btn span")[0];
let Mission_Specialist = document.querySelectorAll(".btn span")[1];
let Pilot = document.querySelectorAll(".btn span")[2];
let Flight_Engineer = document.querySelectorAll(".btn span")[3];



// call
let role = document.querySelector(".crew h3");
let head_name = document.querySelector(".crew h1");
let description = document.querySelector(".description p");
let role_img = document.querySelector(".right img");



// empty content
let empty_role = document.createElement("h3");
let empty_head_name = document.createElement("h1");
let empty_description = document.createElement("p");
let empty_img = document.createElement("img");
empty_img.className = "role"

Mission_Specialist.addEventListener("click", function(){
    Mission_Specialist.style.transform = "scale(1.8)";
    Pilot.style.transform = "scale(1)";
    Flight_Engineer.style.transform = "scale(1)";
    commander.style.transform = "scale(1)";
    fetch("data.json").then((res)=>res.json()).then((data)=>{
        
        // call-info
        let role_name = data.crew[1].role;
        let name = data.crew[1].name;
        let image = data.crew[1].images.png;
        let role_description = data.crew[1].bio;


        // assign new space in global variable for this click
        empty_role.innerHTML = role_name;
        empty_head_name.innerHTML = name;
        empty_img.src = image;
        empty_description.innerHTML = role_description;

        // replace old content with new content
        role.replaceWith(empty_role);
        head_name.replaceWith(empty_head_name);
        description.replaceWith(empty_description);
        role_img.replaceWith(empty_img)
        
    })
});

Pilot.addEventListener("click", function(){
    Pilot.style.transform = "scale(1.8)";
    Mission_Specialist.style.transform = "scale(1)";
    Flight_Engineer.style.transform = "scale(1)";
    commander.style.transform = "scale(1)";

    fetch("data.json").then((res)=>res.json()).then((data)=>{
        
        // call-info
        let role_name = data.crew[2].role;
        let name = data.crew[2].name;
        let image = data.crew[2].images.png;
        let role_description = data.crew[2].bio;

        // empty content
        empty_role.innerHTML = role_name;
        empty_head_name.innerHTML = name;
        empty_img.src = image;
        empty_description.innerHTML = role_description;


        // replace old content with new content
        role.replaceWith(empty_role);
        head_name.replaceWith(empty_head_name);
        description.replaceWith(empty_description);
        role_img.replaceWith(empty_img)


})})

Flight_Engineer.addEventListener("click", function(){
    Flight_Engineer.style.transform = "scale(1.8)";
    Mission_Specialist.style.transform = "scale(1)";
    Pilot.style.transform = "scale(1)";
    commander.style.transform = "scale(1)";

    fetch("data.json").then((res)=>res.json()).then((data)=>{
        
        // call-info
        let role_name = data.crew[3].role;
        let name = data.crew[3].name;
        let image = data.crew[3].images.png;
        let role_description = data.crew[3].bio;

        // empty content
        empty_role.innerHTML = role_name;
        empty_head_name.innerHTML = name;
        empty_img.src = image;
        empty_description.innerHTML = role_description;

        // replace old content with new content
        role.replaceWith(empty_role);
        head_name.replaceWith(empty_head_name);
        description.replaceWith(empty_description);
        role_img.replaceWith(empty_img)
    })
})

commander.addEventListener("click", function(){
    commander.style.transform = "scale(1.8)";
    Mission_Specialist.style.transform = "scale(1)";
    Pilot.style.transform = "scale(1)";
    Flight_Engineer.style.transform = "scale(1)";
    
    fetch("data.json").then((res)=>res.json()).then((data)=>{
        
        // call-info
        let role_name = data.crew[0].role;
        let name = data.crew[0].name;
        let image = data.crew[0].images.png;
        let role_description = data.crew[0].bio;

        // empty content
        empty_role.innerHTML = role_name;
        empty_head_name.innerHTML = name;
        empty_img.src = image;
        empty_description.innerHTML = role_description;

        // replace old content with new content
        role.replaceWith(empty_role);
        head_name.replaceWith(empty_head_name);
        description.replaceWith(empty_description);
        role_img.replaceWith(empty_img)
    })
})
