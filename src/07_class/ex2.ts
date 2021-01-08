class Todo {
  // member variables

  constructor(
    private id: number,
    public name: string,
    public completed: boolean
  ) {}

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

// String Boolean Object Number <-- JS
// string boolean object number <-- TS

// const str = 'hello'
//  str = new String('hello')
// str.
