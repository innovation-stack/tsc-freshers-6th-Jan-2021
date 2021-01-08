class Todo {
  // member variables
  private id: number;
  name: string;
  public completed: boolean;

  constructor(id: number, name: string, completed: boolean) {
    // mapping
    this.id = id;
    this.name = name;
    this.completed = completed;
  }

  // member functions
  toString() {
    let suffixMessage = this.completed
      ? 'has been completed'
      : 'has not been completed';

    // template string literal
    console.log(`The todo "${this.name}" ${suffixMessage}`);
  }
}

const todo = new Todo(1, 'Teach TypeScript', false);
todo.toString();
// console.log(todo.id);
console.log(todo.name);
console.log(todo.completed);

export default null;
