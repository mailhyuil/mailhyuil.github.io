# visitor

> 실제 로직을 가지고 있는 객체(Visitor)가 로직을 적용할 객체(Element)를 방문하면서 실행하는 패턴이다.
>
> > 로직과 구조를 분리하는 패턴 // 알고리즘을 객체 구조에서 분리시키는 디자인 패턴

```ts
class Employee {
  constructor(name, salary, vacation) {
    this.self = this;
    this.name = name;
    this.salary = salary;
    this.vacation = vacation;
  }
  accept(visitor) {
    visitor.visit(this.self);
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(sal) {
    this.salary = sal;
  }

  getVacation() {
    return this.vacation;
  }

  setVacation(vac) {
    this.vacation = vac;
  }
}

// visitor
// employee 의 salary를 추가함
class ExtraSalaryVisitor {
  visit(employee) {
    employee.setSalary(employee.getSalary() * 1.1);
  }
}

// visitor
// employee 의 vacation을 추가함
class ExtraVacationVisitor {
  visit(employee) {
    employee.setVacation(employee.getVacation() + 2);
  }
}

const employees = [new Employee('John', 10000, 10), new Employee('Mary', 20000, 21), new Employee('Boss', 250000, 51)];

const salaryVisitor = new ExtraSalaryVisitor();
const vacationVisitor = new ExtraVacationVisitor();

const len = employees.length;
for (let i = 0; i < len; i++) {
  const employee = employees[i];

  employee.accept(salaryVisitor);
  employee.accept(vacationVisitor);
  console.log(employee.getName() + ': $' + employee.getSalary() + ' and ' + employee.getVacation() + ' vacation days');
}
```
