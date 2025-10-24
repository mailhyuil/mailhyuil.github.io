# Behavioral interpreter

## 구조

```ts
// Context 클래스
class Context {
  constructor(input) {
    this.input = input;
    this.output = 0;
  }
}

// AbstractExpression 클래스
class AbstractExpression {
  interpret(context) {}
}

// TerminalExpression 클래스
class TerminalExpression extends AbstractExpression {
  interpret(context) {
    context.output = parseInt(context.input, 2); // 2진수를 10진수로 변환
  }
}

// NonterminalExpression 클래스
class NonterminalExpression extends AbstractExpression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }
  interpret(context) {
    this.expression1.interpret(context);
    this.expression2.interpret(context);
    context.output = context.output + 1; // 두 수의 합을 계산
  }
}

// 객체 생성
const input = "10+11";
const syntaxTree = [];

// Syntax Tree 생성
for (let token of input.split("")) {
  if (token === "0" || token === "1") {
    syntaxTree.push(new TerminalExpression());
  } else if (token === "+") {
    syntaxTree.push(new NonterminalExpression(syntaxTree.pop(), syntaxTree.pop()));
  }
}

// Interpreter 패턴 사용
const context = new Context(input);
syntaxTree[0].interpret(context);
console.log(`Interpreted '${input}' as ${context.output}`); // "Interpreted '10+11' as 5"
```

## usage 예

```ts
const Context = function (input) {
  this.input = input;
  this.output = 0;
};

Context.prototype = {
  startsWith: function (str) {
    return this.input.substr(0, str.length) === str;
  },
};

const Expression = function (name, one, four, five, nine, multiplier) {
  this.name = name;
  this.one = one;
  this.four = four;
  this.five = five;
  this.nine = nine;
  this.multiplier = multiplier;
};

Expression.prototype = {
  interpret: function (context) {
    if (context.input.length == 0) {
      return;
    } else if (context.startsWith(this.nine)) {
      context.output += 9 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.four)) {
      context.output += 4 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.five)) {
      context.output += 5 * this.multiplier;
      context.input = context.input.substr(1);
    }
    while (context.startsWith(this.one)) {
      context.output += 1 * this.multiplier;
      context.input = context.input.substr(1);
    }
  },
};

function run() {
  const roman = "MCMXXVIII";
  const context = new Context(roman);
  const tree = [];

  tree.push(new Expression("thousand", "M", " ", " ", " ", 1000));
  tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100));
  tree.push(new Expression("ten", "X", "XL", "L", "XC", 10));
  tree.push(new Expression("one", "I", "IV", "V", "IX", 1));

  for (const i = 0, len = tree.length; i < len; i++) {
    tree[i].interpret(context);
  }

  console.log(roman + " = " + context.output);
}
```
