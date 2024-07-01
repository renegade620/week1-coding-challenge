/*
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of 
basic salary and benefits. 
Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
*/

let basicSalary = 100000, benefits = 5000, gross, paye, tax, rate, nhif, netSalary;
gross = basicSalary + benefits;



// PAYE
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

// NHIF
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

netSalary = gross - tax - nhif;

console.log("Net Salary: ", netSalary);