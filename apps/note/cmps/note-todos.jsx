import { todoService } from "../services/todo.service.js";

export class NoteTodos extends React.Component {


    state = {
        note: this.props.note,
        todos: []
    }

    componentDidMount() {
        this.loadTodos()
    }

    loadTodos = () => {
        todoService.queryNoteTodos(this.state.note.id)
            .then(todos => this.setState({ todos }))
    }
    removeTodo = (idx) => {
        const { note } = this.state
        todoService.removeTodo(note, idx)
        .then(this.setState({ todos: this.state.todos.splice(idx, 1) }))
    }

    render() {

        const { note, todos } = this.state
        const { removeTodo } = this

        return <div className="note-todos">
            <h1>{note.info.label}</h1>
            <ul>
                {todos.map((todo, idx) => <li key={idx}>{todo.txt} <span onClick={() => removeTodo(idx)}>X</span></li>)}
            </ul>
        </div>
    }

}