// Type alias

type Todo = {
  id: number;
  name: string;
  completed: boolean;
  // print: () => void;
  print(): void;
  printAMessage(msg: string): void;
};

const todo: Todo = {
  id: 1,
  name: 'teach Angular',
  completed: false,
  print: function () {
    let suffixMessage = this.completed
      ? 'has been completed'
      : 'has not been completed';

    // template string literal
    console.log(`The todo "${this.name}" ${suffixMessage}`);
  },
  printAMessage(message: string) {
    console.log(`printed a message for you: ${message}`);
  },
};

todo.print();
todo.printAMessage('Hello and from Mars');

export default null;
