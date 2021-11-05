const open_btn = document.querySelector('#open');
const close_btn = document.getElementById('close')
const nav = document.querySelector('nav')

open_btn.addEventListener('click', function() {
    nav.classList.add('visible')
})

close_btn.addEventListener('click', function() {
    nav.classList.remove('visible')
})


// change bg on scroll

const header = document.querySelector('header')

window.addEventListener('scroll', function() {
    const height = window.innerHeight
    const scrol = window.scrollY
    if(scrol > height - 90) {
        header.classList.add('transit')
    } else {
        header.classList.remove('transit')
    }
})


// 
const data = [
    {
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, pariatur aliquid quae suscipit iste eius amet ipsum delectus mollitia officiis. Architecto autem eum enim nisi minima facere? Ut sint veritatis vero quidem ullam odit doloremque a expedita maxime, asperiores, nesciunt, dicta laborum. Molestias magnam nostrum repellendus eius, ipsum sint deleniti.`,
        head: `Alugbin Abiodun` 
    },
    {
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsa iste! Architecto dignissimos officiis ex qui perspiciatis ipsa assumenda minima illo et optio nisi eaque sapiente autem reiciendis ad quo similique ducimus sed, totam fugiat veritatis velit voluptates facere quidem. Nam repudiandae officiis debitis velit dolore! Eveniet eligendi maxime possimus?.`,
        head: `Alugbin Oluwaseyi`
    }, 
    {
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsa iste! Architecto dignissimos officiis ex qui perspiciatis ipsa assumenda minima illo et optio nisi eaque sapiente autem reiciendis ad quo similique ducimus sed, totam fugiat veritatis velit voluptates facere quidem. Nam repudiandae officiis debitis velit dolore! Eveniet eligendi maxime possimus?.`,
        head: `Alugbin Oluwatofunmi`
    },
    {
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tenetur fuga illum quis fugiat dolorem reiciendis quia, cum eos ex facere accusantium eius ipsum aliquid deserunt temporibus iste repellendus placeat quod doloremque quaerat! Aut, laborum. Rem quasi neque ut earum voluptate iusto vitae dolores quo perspiciatis enim. Porro, aliquid nam.`,
        head: `Alugbin Oluwasegun`
    }
]
const main_area = document.querySelector('.main-area')
const bell = document.querySelector('.headr')

let current = 0

function changeTestimony() {
    current++
    let item = data[current]
    if(current > 3) {
        current = -1
    } else if(current < 0) {
        current = 0
    }
    main_area.textContent = item.text;
    bell.innerHTML = item.head
}

setInterval(changeTestimony, 2000)

// Accordion

const down_btns = document.querySelectorAll('.arrow');

down_btns.forEach(down_btn => {
    down_btn.addEventListener('click', function(e) {
        const parent = e.target.parentElement.parentElement.parentElement;
        parent.classList.toggle('show-text')
        })
        
})



// Slide Show

// let slide_index = 0;
// let timer;

// const myImages = [
//     {
//         img: '/images/photo-1479839672679-a46483c0e7c8.jpeg',
//         caption: '5 reasons why you should own a house in 2021'
//     },
//     {
//         img: '/images/photo-1590381105924-c72589b9ef3f.jpeg',
//         caption: '5 reasons why you should own a house in 2021'
//     },
//     {
//         img: '/images/photo-1571003123894-1f0594d2b5d9.jpeg',
//         caption: '5 reasons why you should own a house in 2021'
//     }

// ]

// builder()

// function builder() {
//     for(let i = 0; i < myImages.length; i++) {
//         const slide = document.createElement('div')
//         slide.setAttribute('class', 'post');
//         let img = document.createElement('img')
//         img.setAttribute('src', myImages[i].img);
//         let cap = document.createElement('h1');
//         cap.innerText = myImages[i].caption;
//         slide.appendChild(img)
//         document.querySelector('.post-container').appendChild(slide);

//         let spand = document.createElement('div');
//         spand.classList.add('dot');
//         spand.addEventListener('click', function() {
//             move(i)
//         })
//         document.querySelector('.indicator').appendChild(spand)
//         console.log(spand);
        
//     }
//     playSlide()
// }
//     function playSlide() {
//         let slides = document.querySelectorAll('.post')
//         let dots = document.querySelectorAll('.dot')
//         const active = document.querySelector('.active')
//         if(slide_index + 1 > slides.length) {
//             slide_index = 0
//         }
//         slides.forEach(el => el.style.display = 'none')
//         slide_index[slide_index].style.display = 'block'
//         slide_index++;
//         timer = setInterval(playSlide, 1000)
//     }

//     function move(num) {
//         console.log(num);
//     }



let slideIndex = 0;

const myImage = [
         {
             img: '/images/photo-1564767609342-620cb19b2357.jpeg',
             caption: '5 reasons why you should own a house in 2021',
             para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quibusdam beatae iusto blanditiis veritatis, facere voluptatum possimus aliquam nisi corrupti. Amet maiores eligendi distinctio sint alias est enim. Rerum, magni?`,
             user: 'Godwin Alugbin'
         },
         {
             img: '/images/photo-1590381105924-c72589b9ef3f.jpeg',
             caption: 'Reducing homelessness in Nigeria',
             para: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, accusamus aperiam? Omnis dolore delectus, saepe praesentium, cupiditate veritatis itaque perferendis fugiat sapiente dicta accusantium quo possimus eligendi magnam mollitia provident?`,
             user:'Mary Alugbin'
         },
         {
             img: '/images/photo-1571003123894-1f0594d2b5d9.jpeg',
             caption: 'Bad usage of land must stop',
             para: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, accusamus aperiam? Omnis dolore delectus, saepe praesentium, cupiditate veritatis itaque perferendis fugiat sapiente dicta accusantium quo possimus eligendi magnam mollitia provident?`,
             user: 'Marcos Alonso'
         }
    
     ]

const post_img = document.querySelector('.post img') 
const post_h1 = document.querySelector('.post h1')
const post_para = document.querySelector('.post .para');
const poster = document.getElementById('poster')

function newslide() {
    slideIndex++
    let next = myImage[slideIndex];
    if(slideIndex > myImage.length - 1) {
        slideIndex = -1
    }
    post_img.src = next.img;
    post_h1.textContent = next.caption;
    post_para.textContent = next.para;
    poster.textContent = next.user

}

let interval = setInterval(newslide, 2000)
    