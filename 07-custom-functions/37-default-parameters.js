const distance = 450; // distance, km
const fuelConsumption = 8.4; // fuel consumption, l/100 km
const fuelPrice = 64.2; // fuel price, per liter
const passengers = 4; // number of passengers
const countfuel = distance * (fuelConsumption / 100);
const countprice = countfuel * fuelPrice;
const price = countprice / passengers;
console.log(countfuel.toFixed(1));
console.log(countprice.toFixed(2));
console.log(price.toFixed());
