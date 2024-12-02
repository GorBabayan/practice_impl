function customInstanceOf(obj, constructor) {
    let current = Object.getPrototypeOf(obj);

    while (current != null) {
        if (current === constructor.prototype) {
            return true;
        }

        current = Object.getPrototypeOf(current);
    }

    return false;
}

class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(customInstanceOf(dog, Dog));    
console.log(customInstanceOf(dog, Animal)); 
console.log(customInstanceOf(dog, Array));