class JoesAuto {
    constructor(name, address, number){
        this.name = name;
        this.address = address;
        this.number = number;
        let make = "";
        let model = "";
        let year = 0;
        let partsCharges = 0;
        let laborCharges = 0;
        let salesTax = 0;
        let totalCharges = 0;
    }

    getCustomerInfo(){
        console.log(`Customer's Name: ${this.name}, Address: ${this.address}, and Telephone Number: ${this.number}`);
    }

    getCarDetals(){
        console.log(`The details of ${this.name}'s car are: ${this.make}, ${this.model}, ${this.year}`)
    }

    getServiceQuote(){
        console.log(`Your service quote is: \nParts Charges: $${this.partsCharges} \nLabor Charges: $${this.laborCharges} \nSales Tax: $${this.salesTax} \nTotal Charges: $${this.totalCharges}`);
    }
}

const repair = new JoesAuto('Joshua', '4, ope str.', '123456789');

repair.make = "Mercedes";
repair.model = "Mercedes-Benz S-Class S 580";
repair.year = 2022;

repair.partsCharges = 250;
repair.laborCharges = 100;
repair.salesTax = 50;
repair.totalCharges = 400;

repair.getCustomerInfo();
repair.getCarDetals();
repair.getServiceQuote();
