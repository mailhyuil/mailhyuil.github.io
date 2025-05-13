# mediator pattern example

```ts
// message type
type ReadMessage = {
  type: "memory-read";
  address: number;
  response: (value: number) => void;
};

// message type
type WriteMessage = {
  type: "memory-write";
  value: number;
  address: number;
  response: (wasOk: boolean) => void;
};

// message type
type CPUMemoryMessages = ReadMessage | WriteMessage;

// Mediator interface
interface Bus<Messages> {
  notify(message: Messages): void;
}

// Concrete Mediator
class DataBus implements Bus<CPUMemoryMessages> {
  private cpu: CPU;
  private memory: Memory;

  constructor(cpu: CPU, memory: Memory) {
    this.cpu = cpu;
    this.memory = memory;

    // setup the connections
    this.cpu.connect(this);
    this.memory.connect(this);
  }

  notify(message: CPUMemoryMessages): void {
    switch (message.type) {
      case "memory-read": {
        const { address, response } = message;
        const value = this.memory.read(address);
        response(value);
        break;
      }
      case "memory-write": {
        const { address, value, response } = message;
        try {
          this.memory.write(value, address);
          response(true); // writing operation success
        } catch (e) {
          response(false); // there was an error
        }
        break;
      }
      default: {
        throw new Error("Invalid message");
      }
    }
  }
}

// Colleague
export class BusConnector<TMessages> {
  private bus: Bus<TMessages> | undefined;

  connect(bus: Bus<TMessages>) {
    this.bus = bus;
  }

  signal(message: TMessages) {
    if (!this.bus) {
      throw new Error("bus disconnected");
    }

    this.bus.notify(message);
  }
}

// Concrete Colleague
class Memory extends BusConnector<CPUMemoryMessages> {
  private memory: number[];

  constructor() {
    super();
    this.memory = [];
  }

  read(address: number): number {
    console.log(`Memory: reading the address (${address})`);
    return this.memory[address];
  }

  write(value: number, address: number) {
    console.log(`Memory: writing the value (${value}) on address (${address})`);
    this.memory[address] = value;
  }
}

// Concrete Colleague
class CPU extends BusConnector<CPUMemoryMessages> {
  private nextInstructionAddress: number = 0;
  private result: number = 0;

  fetch() {
    console.log(`CPU: Triying to fetch an instruction from address ${this.nextInstructionAddress}`);

    let instruction: number;

    this.signal({
      type: "memory-read",
      address: this.nextInstructionAddress,
      response: (value) => (instruction = value),
    });

    console.log(`CPU: instruction fetched from address ${this.nextInstructionAddress}`);

    // - Increment the nextInstructionAddress
    this.nextInstructionAddress++;
  }

  decode(instruction: number) {
    // Not implemented for sake of simplicity
  }

  execute(opCode: number, operand1: number, operand2: number) {
    // run the code associated with the decoded instruction
    switch (opCode) {
      case 0:
        this.result = operand1 + operand2;
        break;
      case 1:
        this.result = operand1 / operand2;
        break;
      case 2:
        console.log(`CPU: Triying write a value on address ${operand2}`);

        this.signal({
          type: "memory-write",
          value: operand1,
          address: operand2,
          response: (ok) => console.log(`CPU: write operation success: ${ok}`),
        });
        break;
      // ... rest of operations
      default: {
        throw new Error("Invalid operation");
      }
    }
  }
}

const cpu = new CPU();
const memory = new Memory();
const bus = new DataBus(cpu, memory);

cpu.fetch();
cpu.fetch();
cpu.execute(2, 4, 10);
```
