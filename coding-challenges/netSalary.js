const prompt = require('prompt-sync')({ sigint: true });

/*
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of 
basic salary and benefits. 
Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
*/

// a function to calculate the gross pay aka amount taxable
function calculateGrossSalary(basicSalary, benefits) {
    // prompt user inputs for basic salary and benefits
    basicSalary = parseFloat(prompt("Enter Basic Salary: ")); // parses to float because prompted input is taken as string
    benefits = parseFloat(prompt("Enter Benefits: "));

    return basicSalary + benefits;
}

// a function that calculates tax as per gross pay brackets
function calculatePaye(gross) {
    // switch case to calculate PAYE rates
    switch (true) {
        case gross <= 24000:
            rate = 10 / 100;
            tax = rate * gross;
            break;
        case gross > 24000 && gross <= 32333:
            rate = 25 / 100;
            tax = rate * gross;
            break;
        case gross > 32333 && gross <= 500000:
            rate = 30 / 100;
            tax = rate * gross;
            break;
        case gross > 500000 && gross <= 800000:
            rate = 32.5 / 100;
            tax = rate * gross;
            break;
        case gross > 800000:
            rate = 35 / 100;
            tax = rate * gross;
            break;
    }
    return tax;

}
// a function that calculates NHIF as per gross pay brackets
function calculateNHIF(gross) {
    // a switch case to match gross pay and NHIF
    switch (true) {
        case gross <= 5999:
            nhif = 150;
            break;
        case gross >= 6000 && gross <= 7999:
            nhif = 300;
            break;
        case gross >= 8000 && gross <= 11999:
            nhif = 400;
            break;
        case gross >= 12000 && gross <= 14999:
            nhif = 500;
            break;
        case gross >= 15000 && gross <= 19999:
            nhif = 600;
            break;
        case gross >= 20000 && gross <= 24999:
            nhif = 750;
            break;
        case gross >= 25000 && gross <= 29999:
            nhif = 850;
            break;
        case gross >= 30000 && gross <= 34999:
            nhif = 900;
            break;
        case gross >= 40000 && gross <= 44999:
            nhif = 1000;
            break;
        case gross >= 45000 && gross <= 49999:
            nhif = 1100;
            break;
        case gross >= 50000 && gross <= 59999:
            nhif = 1200;
            break;
        case gross >= 60000 && gross <= 69999:
            nhif = 1300;
            break;
        case gross >= 70000 && gross <= 79999:
            nhif = 1400;
            break;
        case gross >= 80000 && gross <= 89999:
            nhif = 1500;
            break;
        case gross >= 90000 && gross <= 99999:
            nhif = 1600;
            break;
        case gross >= 100000:
            nhif = 1700;
            break;
    }
    return nhif;
}

let initSalary, totalBenefit, grossPay, paye, rate, nHIF, netSalary;

grossPay = calculateGrossSalary(initSalary, totalBenefit); //call function to calculate gross salary
paye = calculatePaye(grossPay); // call function to calculate tax/paye
nHIF = calculateNHIF(grossPay); // call function to get nhif deductions

netSalary = grossPay - paye - nHIF; // calculate the net salary

console.log(netSalary);