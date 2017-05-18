function Animal(type) {
    this.type = type;
    this.eat = function() {
        return this.eat;
    }
    this.sleep = function() {
        return this.sleep;
    }
}

//定义人类
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
Person.prototype = new Animal();
Person.prototype.eat = function() {
    console.log(this.name + "从" + this.age + "岁就开始自己吃饭了");
}
Person.prototype.sleep = function() {
    console.log(this.name + "睡姿很难看");
}

var zhangSan = new Person("张三", 26, "工程师");

//定义狗类
function Dog(type) {
    this.type = type;
}
Dog.prototype = new Animal();
Dog.prototype.eat = function() {
    console.log(this.type + "吃的时候很护食");
}
Dog.prototype.sleep = function() {
    console.log(this.type + "睡觉喜欢在它自己的窝");
}

var doubleHa = new Dog("哈士奇");

zhangSan.eat();
zhangSan.sleep();
doubleHa.eat();
doubleHa.sleep();