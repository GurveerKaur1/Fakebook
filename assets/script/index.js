'use strict';

import { onEvent, select, selectAll, print } from './utilis.js';
import { User } from './user.js';
import { Subscriber } from './user.js';

const shape = select('.shape');
const button = select('.start');
const child = select('.child');
const message = select('textarea');
const image = select('.file');
const img = select('img');
const p = select('p')
const container = select('body')
let arr = [];

function getImgData() {

    window.URL = window.URL || window.webkitURL;

    let file = image.files[0];

    let url = URL.createObjectURL(file)

    return url;

}
onEvent('click', button, function (event) {
    event.preventDefault();

    if (message.value.trim() === '') {
        p.innerText = 'Text is required'

    }


    const div = document.createElement('div');
    div.classList.add("shapes");
    child.prepend(div);

    let arr2 = message.value
    arr.push(arr2);
    const now = new Date();
    const newdate = now.toString().substring(3, 15);
    const picture = `<div class="image" ><div> <img class='main-image' src="./assets/img/butterfly-gdc7bad913_1920.jpg"></img> </div>
         <h3 class='user'>Gurveer kaur</h3> <div class="date"> ${newdate}</div></div>`

    if (message.value !== '') {
        div.innerHTML = picture + message.value
        message.value = '';
    }

    if (image.files.length > 0) {

        let image2 = document.createElement('img');
        // const now = new Date();
        // const newdate = now.toString().substring(3, 15);
        const picture = `<div class="image" ><div> <img  class='main-image' src="./assets/img/butterfly-gdc7bad913_1920.jpg"></img> </div>
            <h3 class='user'>Gurveer kaur</h3> <div class="date"> ${newdate}</div></div>`
  div.innerHTML = picture + message.value;

        image2.style.display = 'block';
        image2.classList.add('second-image')
        image2.src = getImgData();
        // message.value = '';
        div.appendChild(image2) + message.value;
        
    }
    //  div.innerHTML =  `<div class="image" ><div> <img  class='main-image' src="./assets/img/butterfly-gdc7bad913_1920.jpg"></img> </div>
    //  <h3 class='user'>Gurveer kaur</h3> <div class="date"> ${newdate}</div></div>`









});

onEvent('click', img, function (event) {
    event.preventDefault();
    const div2 = document.createElement('div');
    div2.classList.add('shapes2');
    container.appendChild(div2);
    const subscriber = new Subscriber('user-001', 'Gurveer Kaur', 'Gurveer1', 'gurveer@gmail.com', ['Github', '@Web', 'You tube'], ['Women-tech', 'Sports'], true);
    div2.innerHTML = subscriber.getInfo();


})

