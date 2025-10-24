# Behavioral visitor

> 실제 로직을 가지고 있는 객체(Visitor)가 로직을 적용할 객체(Element)를 방문하면서 실행하는 패턴이다.
>
> > 로직과 구조를 분리하는 패턴 (작업 대상(entity)과 작업 항목(visitor)을 분리)

## 구조

> entity에 방문하는 방문자를 연상
>
> > accept 함수를 통해서 방문자를 받아들이고 방문자가 entity를 조회, 수정하도록 한다.

```js
class Employee {
  constructor(name, salary, vacation) {
    this.name = name;
    this.salary = salary;
    this.vacation = vacation;
  }

  accept(visitor) {
    visitor.visit(this);
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
// employee 의 salary를 올려주는 방문자
class ExtraSalaryVisitor {
  visit(employee) {
    employee.setSalary(employee.getSalary() * 1.1);
  }
}

// visitor
// employee 의 vacation을 올려주는 방문자
class ExtraVacationVisitor {
  visit(employee) {
    employee.setVacation(employee.getVacation() + 2);
  }
}

const employees = [new Employee("John", 1100, 11), new Employee("Mary", 1200, 12), new Employee("Boss", 1000, 13)];

const salaryVisitor = new ExtraSalaryVisitor();
const vacationVisitor = new ExtraVacationVisitor();

employees.forEach((employee) => {
  employee.accept(salaryVisitor);
  employee.accept(vacationVisitor);
  console.log(employee.getName() + ": $" + employee.getSalary() + " and " + employee.getVacation() + " vacation days");
});
```
