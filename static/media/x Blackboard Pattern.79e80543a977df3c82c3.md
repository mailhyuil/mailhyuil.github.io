# design pattern blackboard pattern

```ts
// This is the blackboard class that will hold all of the information
// that the different AI agents will use to make decisions.
class Blackboard {
  public currentTask: string = "";
  public hasFood: boolean = false;
  public hasWater: boolean = false;

  // This is the list of agents that will use the blackboard to
  // make decisions.
  public agents: IAgent[] = [];

  // This method will be called by each agent to make a decision
  // based on the current state of the blackboard.
  public makeDecision(): void {
    for (const agent of this.agents) {
      agent.decide(this);
    }
  }
}

// This is an interface that defines the methods that each AI agent
// must implement.
interface IAgent {
  decide(blackboard: Blackboard): void;
}

// This is an example of an AI agent that will prioritize finding food
// if it doesn't have any, and finding water if it doesn't have any of that.
class PrioritizeFoodAndWaterAgent implements IAgent {
  public decide(blackboard: Blackboard): void {
    if (!blackboard.hasFood) {
      // If we don't have food, prioritize finding food.
      blackboard.currentTask = "FindFood";
    } else if (!blackboard.hasWater) {
      // If we have food but not water, prioritize finding water.
      blackboard.currentTask = "FindWater";
    } else {
      // If we have both food and water, we can do other tasks.
      blackboard.currentTask = "DoOtherTasks";
    }
  }
}

// This is an example of an AI agent that will prioritize finding water
// if it doesn't have any, and finding food if it doesn't have any of that.
class PrioritizeWaterAndFoodAgent implements IAgent {
  public decide(blackboard: Blackboard): void {
    if (!blackboard.hasWater) {
      // If we don't have water, prioritize finding water.
      blackboard.currentTask = "FindWater";
    } else if (!blackboard.hasFood) {
      // If we have water but not food, prioritize finding food.
      blackboard.currentTask = "FindFood";
    } else {
      // If we have both water and food, we can do other tasks.
      blackboard.currentTask = "DoOtherTasks";
    }
  }
}

// This is an example of how the blackboard and agents can be used.
const blackboard = new Blackboard();
blackboard.hasFood = false;
blackboard.hasWater = false;
blackboard.agents = [new PrioritizeFoodAndWaterAgent(), new PrioritizeWaterAndFoodAgent()];

// Make the initial decision with the current state of the blackboard.
blackboard.makeDecision();

// Output the current task.
console.log(blackboard.currentTask);

// Update the state of the blackboard.
blackboard.hasFood = true;
blackboard.hasWater = true;

// Make a new decision with the updated state of the blackboard.
blackboard.makeDecision();

// Output the current task.
console.log(blackboard.currentTask);
```
