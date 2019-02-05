// Write an expression that uses an array prototype method (filter, reduce, map, etc.)
//   to compute the total value of the machines in the inventory array;

const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

// Filter out things that arent machines:
let justMachines = inventory.filter(item => item.type === "machine");
console.log(justMachines[1]);

// Calculate the total value of the machines
let reducer = (total, num) => total + num;

let totalMachineValue = array => {
    let valueArray = [];
    array.map(item => valueArray.push(item.value));
    return valueArray.reduce(reducer);

}
console.log(totalMachineValue(justMachines));