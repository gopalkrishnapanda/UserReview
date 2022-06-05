const prev = document.getElementById('prev');
const next = document.getElementById('next');
const review = document.getElementById("review");
const name = document.getElementById("name");
const random = document.getElementById("random");
const pic = document.getElementsByClassName("pic");

var id = 0;

const users = [
    {name: "Gopal", about : "Hi I am gopal. A software eng", pic :"\images\ss.png"},
    {name: "Ronnie", about : "Hi I am Ronnie. A software eng", pic :"\images\ss.png"},
    {name: "Arnab", about : "Hi I am Arnab. A software eng", pic :"\images\ss.png"},
    {name: "Ashish", about : "Hi I am Ashish. A software eng", pic :"\images\ss.png"},
    {name: "Abhijeet", about : "Hi I am Abhijeet. A software eng", pic :"\images\ss.png"}
];

var flipper = function(id){
    console.log(`${id}`)
    review.innerHTML = users[id].about;
    name.innerHTML = users[id].name;
    pic.src = users[id].pic


};

prev.addEventListener('click' , function(){
    id = id - 1 ; 
    if(id < 0) { id = (users.length -1) ;}
    flipper(id);
});

next.addEventListener('click' , function(){
    id = id + 1 ; 
    if(id > (users.length - 1)) { id = 0;}
    flipper(id);
});

random.addEventListener('click' , function(){
    id = Math.floor(Math.random() * (users.length))
    flipper(id);
});
