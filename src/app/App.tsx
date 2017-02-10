import { Component, h } from 'preact';
import TodoItem from './todo-item';

type Todo = {
  text: string
}
type TodoList = Todo[];


interface TodoListState {
  todos: TodoList;
  text: string;
}

export default class App extends Component<{}, TodoListState> {
  state: TodoListState = { todos: [], text: '' };

  setText = (e: CustomEvent) => {
    this.setState({ text: e.detail.data } as TodoListState);
  }

  addTodo = () => {
    const { todos, text } = this.state;

    this.setState({
      todos: [
        ...todos,
        { text }
      ], text: ''
    } as TodoListState);
  }

  render({ }, { todos, text }: TodoListState) {
    return (
      <form onSubmit={this.addTodo}>
        <bl-input value={text} onChange={this.setText} />
        <bl-button onClick={this.addTodo} color="brand">Add</bl-button>
        <ul>
          {todos.map(({text}) => (
            <TodoItem text={text} />
          ))}
        </ul>
      </form>
    );
  }
}
