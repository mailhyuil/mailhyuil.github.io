# design pattern CoR vs Decorator

```txt
I generally think of the Decorator as "adding" to some thing, where as Chain of Responsiblity is more like handling something thing.

In comparing the two patterns (besides being apples and oranges) the biggest difference is the Chain of Responsibility can kill the chain at any point.

Think of decorators as a layered unit in which each layer always does pre/post processing. Chain of Responsibility is more like a linked list, and generally 1 thing handles processing.

The Chain of Responsibility pattern allows for multiple things to handle an event but it also gives them the opportunity to terminate the chain at any point.
```
