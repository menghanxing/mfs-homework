function createComputer(name, price, type) {
    var computer = new Object();
    computer.name = name;
    computer.price = price;
    computer.type = type;
    computer.sayPrice = function() {
        console.log(this.price);
    }
    return computer;
}

var computerL = createComputer("联想", 2999, "台式机");
computerL.sayPrice();
var computerA = createComputer("Apple", 19999, "笔记本");
computerA.sayPrice();