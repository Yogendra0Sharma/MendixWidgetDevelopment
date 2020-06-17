class Person{
    //_name = "";
   // _age = "";
    constructor(name,age){
        this._name = name;
        this._age = age;
    }

     name(){
        return this._name
    }

     age(){
        return this._age;
    }

    toString(){
        return `${this._name} and ${this._age}`;
    }
}