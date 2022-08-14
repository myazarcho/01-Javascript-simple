const userDescription = [
    {
        id: 1,
        img: "images/aiony-haust.jpg",
        name: "Aiony Haust",
        position: "Fullstack Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?"        
    },
    {
        id: 2,
        img: "images/kirill.jpg",
        name: "Kirill",
        position: "Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?"        
    },
    {
        id: 3,
        img: "images/michael.jpg",
        name: "Michael",
        position: "Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?"        
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        name: "User 1",
        position: "Frontend Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?"        
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        name: "User 2",
        position: "Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?"        
    },
]

const image = document.querySelector("#profile");
const profileName = document.querySelector("#name");
const position = document.querySelector("#position");
const review = document.querySelector("#review");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = userDescription[currentItem];
    console.log("Item" , item);
    image.src = item.img;
    profileName.textContent = item.name;
    position.textContent = item.position;
    review.textContent = item.review;
    // const text = node.textContent;
});

function showPerson(person){
    const item = userDescription[person];
    image.src = item.img;
    profileName.textContent = item.name;
    position.textContent = item.position;
    review.textContent = item.review;
}

prevBtn.addEventListener("click" , function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = userDescription.length - 1;
    }
    showPerson(currentItem);
});

nextBtn.addEventListener("click" ,function(){
    currentItem++;
    if(currentItem > userDescription.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})
