let companies = [
    {
        id: 1,
        name: "Jaxa nosfrush",
        budget: 8300,
        tax: 12,
        expensesPerYear: [30, 200, 1400]
    },
    {
        id: 2,
        name: "Ramiz mashennik",
        budget: 4590,
        tax: 18,
        expensesPerYear: [400, 600, 800]
    },
    {
        id: 3,
        name: "Kama restorator",
        budget: 800,
        tax: 12,
        expensesPerYear: [200, 20, 400]
    },
];

for (let item of companies) {
    let totalPerMonth = 0;
    
    for (let expense of item.expensesPerYear) {
        totalPerMonth += expense;
    }

    item.expensesPerMonth = +(totalPerMonth / 12).toFixed(2);

    console.log(item.budget / 12);
}

console.table(companies);

let totalTax = 0;  // сколько государство берет налог от всех
let maxTax = null; // кто платит максимальный налог
let minTax = null;  // кто платит минимальный налог

for (let item of companies) {
    let annualTax = item.tax * (item.budget / 100);
    totalTax += annualTax;

    if (maxTax === null || annualTax > maxTax.annualTax) {
        maxTax = { ...item, annualTax };
    }

    if (minTax === null || annualTax < minTax.annualTax) {
        minTax = { ...item, annualTax };
    }
}

console.log("Общая сумма налогов, которую государство получает от всех компаний:", totalTax);
console.log("Компания, которая платит максимальный налог:", maxTax.name, "-", maxTax.annualTax);
console.log("Компания, которая платит минимальный налог:", minTax.name, "-", minTax.annualTax);
