'use strict';

function onEvent(event, selector, callback){
    return selector.addEventListener(event, callback);
}


function select(selector, parent = document){
    return parent.querySelector(selector);
}



function selectAll(selector, parent = document){
    return parent.querySelector(selector);
}

function print(arg){
    console.log(arg);
}

export { onEvent, select, selectAll, print } ;