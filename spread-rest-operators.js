// ... -> Spread operator. Used to split up array elements OR object properties.

const oldAray = [1, 2, 3, 4, 5];
const oldObject = {
    value: 1
};

const newArray = [...oldAray, 1, 2] //Adds all the items of the oldArray to the newArray, then adds the 1 and 2.
const newObject = { ...oldObject, newProp:5 } ///Adds all the properties of the oldObject, then adds the newProp property with a value of 5.

const sortArgs = (...args) => { //Essentially is a var args from java. Called the 'Rest' operator. 
    console.log("Do something");
}

const Person = {
    name: "Blaze"
};

const newPerson = {
    ...Person,
    age: 24,
    gender: 'male'
};

const filter = (...args) => args.filter(elem => elem === 1 || elem === 2); //filter method - functional programming filter(). 

console.log(newPerson);
console.log(filter(1, 2, 3, 4, 5));