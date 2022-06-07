const prev = document.getElementById('prev');
const next = document.getElementById('next');
const review = document.getElementById("review");
const name = document.getElementById("name");
const random = document.getElementById("random");
const pic = document.getElementsByClassName("pic");

var id = 0;

const users = [
    { name: "Gopal", about: '" Complete Package with seemingly unlimited potential! "', pic: "images/gopal.jpg" },
    { name: "Ronnie", about: '" Best place for marketing and advertising "', pic: 'images/ronnie.JPG' },
    { name: "Arnab", about: '" User.com is best website for marketing "', pic: "/images/arnab.jpg" },
    { name: "Ashish", about: '" User.com is a superb all-in-one marketing automation tool "', pic: "/images/ashish.JPG" },
    { name: "Abhijeet", about: '" Sales & marketing tool for B2B companies "', pic: "/images/abhijeet.JPG" }
];

var flipper = function (id) {
    review.innerHTML = users[id].about;
    name.innerHTML = users[id].name;
    document.getElementById("img").src = users[id].pic
};

prev.addEventListener('click', function () {
    id = id - 1;
    if (id < 0) { id = (users.length - 1); }
    flipper(id);
});

next.addEventListener('click', function () {
    id = id + 1;
    if (id > (users.length - 1)) { id = 0; }
    flipper(id);
});

random.addEventListener('click', function () {
    id = Math.floor(Math.random() * (users.length))
    flipper(id);
});
