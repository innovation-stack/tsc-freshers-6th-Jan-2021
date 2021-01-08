class Todo {
  constructor(
    private id: number,
    public storedName: string,
    public completed: boolean
  ) {}

  set name(newName: string) {
    // do some validation
    // if fails, throw an exception
    if (newName.length > 0) {
      this.storedName = newName;
    }
  }

  get name() {
    return this.storedName[0].toUpperCase() + this.storedName.slice(1);
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

const todo = new Todo(1, 'teach TypeScript', false);
todo.toString();
todo.name = 'test';
console.log(todo.name);

export default null;
