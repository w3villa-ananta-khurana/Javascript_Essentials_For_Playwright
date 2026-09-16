//In simple terms polymorphism means : Same method name → different behavior depending on the object.

//Imagine you tell three people: "Speak!"

//You get: 
// Dog     → Bark
// Cat     → Meow
// Human   → Hello

//Same Instruction : speak(); | Different behaviour | That's Polymorphism

class Animal{
    speak(){
        console.log("Animal Sound");
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog is Barking");
    }
}

class Cat extends Animal{
    hello(){
        console.log("abcd");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.hello();

    //       Animal
    //       speak()
    //          │
    //    ┌─────┴─────┐
    //    ↓           ↓
    //   Dog         Cat
    // speak()      speak()
    //    ↓           ↓
    //  Bark!       Meow!