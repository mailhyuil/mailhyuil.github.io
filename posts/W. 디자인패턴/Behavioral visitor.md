# visitor

> 실제 로직을 가지고 있는 객체(Visitor)가 로직을 적용할 객체(Element)를 방문하면서 실행하는 패턴이다.
>
> > 로직과 구조를 분리하는 패턴 // 알고리즘을 객체 구조에서 분리시키는 디자인 패턴
> >
> > > element 에 self변수에 자기 자신 this를 저장
> > >
> > > > visitor의 visit 메소드에 매개변수로 넘기기

## 구조

> visitor
>
> > element // 데이터를 가지고 있는 목적지와 같다 destination?
> >
> > > element를 배열에 담아 elements로 만들고 visitor들이 순회하도록

```ts
// Visitor 인터페이스
interface Visitor {
  visit(element: Element): void;
}
// ConcreteVisitor 클래스 1
class ConcreteVisitor1 implements Visitor {
  visit(element: Element) {
    console.log(`Visited ${element.constructor.name} with ConcreteVisitor1`);
  }
}

// ConcreteVisitor 클래스 2
class ConcreteVisitor2 implements Visitor {
  visit(element: Element) {
    console.log(`Visited ${element.constructor.name} with ConcreteVisitor2`);
  }
}

// Element 추상 클래스
interface Element {
  accept(visitor: Visitor): void;
}
// ConcreteElement 클래스 1
class ConcreteElement1 implements Element {
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}
// ConcreteElement 클래스 2
class ConcreteElement2 implements Element {
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}

// 객체 구조
const elements = [new ConcreteElement1(), new ConcreteElement2()];

// Visitor 패턴 사용
const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

for (let element of elements) {
  element.accept(visitor1);
  element.accept(visitor2);
}
```

## 사용 예

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
