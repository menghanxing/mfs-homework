function People(name, age) {
    this.name = name;
    this.age = age;
}
People.prototype.sayName = function() {
    return this.name;
}

//封装单一实例
People.createPerson = function() {
    if (!this.person) {
        this.person = new People();
        return this.person;
    } else {
        return this.person;
    }
}
var zhangSan = People.createPerson();
var liSi = People.createPerson();

console.log(zhangSan === liSi);