'use strict';

class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
}

setId(id){
    this.#id = id;
}

getId(){
    return this.#id;
}
setName(name){
    this.#name = name;
}

getName(){
    return this.#name;
}
setUserName(userName){
    this.#userName = userName;
}
getUserName(){
    return this.#userName
}
setEmail(email){
    this.#email = email;
}

getEmail(){
    return this.#email;
}

getInfo(){
    return `Id: ${this.#id}</br> Name:${this.#name }</br> User Name: ${this.#userName}</br> Email: ${this.#email} </br>`;
}

}


class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize

    constructor(id, name, userName, email, pages, groups, canMonetize){
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
       
        
    }

    
    
    get pages(){
        return this.#pages;
    }
    
    
    get groups(){
        return this.#groups;
    }
    
    get canMonetize(){
        return this.#canMonetize
    }

    childMethod() {
        return `Pages: ${this.#pages} Groups: ${this.#groups} can`;
    }

    getInfo() {
        return `${super.getInfo()} Pages : ${this.#pages} </br> Groups: ${ this.#groups}</br> ${this.#canMonetize}`;
        
    }

}

export { User } ;
export{ Subscriber};