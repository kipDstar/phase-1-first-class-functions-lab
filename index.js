//code
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(drivers));
//expected output: ["Antonia", "Nuru"]

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(drivers));
//expected output: ["Amari", "Mo"]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers));
//expected output: [ [Function: returnFirstTwoDrivers], [Function: returnLastTwoDrivers] ]
console.log(selectingDrivers[1](drivers));
//expected output: [ [Function: returnFirstTwoDrivers], [Function: returnLastTwoDrivers] ]

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    }
}
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5));
//expected output: 25
//expected output: [Function]

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));
//expected output: [Function]

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(12));
//expected output: [Function]

const selectDifferentDrivers = (drivers, driverFunction) => {
    if (driverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if (driverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
   
//expected output: ["Antonia", "Nuru"]
//end code  

/*const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers());
// expected output: ["Antonia", "Nuru"]

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};
console.log(returnLastTwoDrivers());
// expected output: ["Amari", "Mo"]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);
// expected output: [ [Function: returnFirstTwoDrivers], [Function: returnLastTwoDrivers] ]

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    };
};
console.log(createFareMultiplier(2)(5)); // expected output: 10

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10)); // expected output: 20

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10)); // expected output: 30

const selectDifferentDrivers = (drivers, driverFunction) => {
    return driverFunction(drivers);
};
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
// expected output: ["Antonia", "Nuru"]
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
// expected output: ["Amari", "Mo"] 
//end code*/
