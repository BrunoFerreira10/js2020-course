function Employee(name, salary) {
    
    this.plan = ''
    
    this.selectPlan = function (plan) {
        if (this.plan){
            console.log('You already have a plan')
        } else {
            this.plan = plan
            switch (plan) {
                case 'A':
                    salary *= 1.1
                    break;
                case 'B':
                    salary *= 1.15
                    break;
                case 'C':
                    salary *= 1.2
                    break;
                default:
                    console.log('Invalid plan selected');
                    this.plan = ''
                    break;
            }
            if(this.plan){
                console.log(`${name}, your new salary is: $${salary}`)                
            }
        }
    }
}

// My tests
console.log("--------- My tests ----------");
const ar = new Employee('Alexandro',10000)
const bf = new Employee('Bruno',10000)
const cb = new Employee('Carlos',10000)
const eb = new Employee('Evandro',10000)
ar.selectPlan('A')
ar.selectPlan('C')
bf.selectPlan('B')
cb.selectPlan('C')
eb.selectPlan('D')

// Answer tests
//console.log("--------- Answer tests ----------");

// Answer
/*
function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
*/
