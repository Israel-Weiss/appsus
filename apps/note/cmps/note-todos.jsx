import { todoService } from "../services/todo.service.js";

export class NoteTodos extends React.Component {


    state = {
        note: this.props.note,
        todos: [],
        colorPalleteOpened: false,
        isHover: false
    }

    componentDidMount() {
        this.loadTodos()
    }
    loadTodos = () => {
        todoService.queryNoteTodos(this.state.note.id)
            .then(todos => this.setState({ todos }))
    }
    handleMouseOver = () => {
        this.setState({ isHover: true })
    }
    handleMouseOut = () => {
        this.setState({ isHover: false })
    }
    removeTodo = (idx) => {
        const { note } = this.state
        todoService.removeTodo(note, idx)
            .then(this.setState({ todos: this.state.todos.splice(idx, 1) }))
    }
    handleColorPallete = () => {
        this.setState({ colorPalleteOpened: !this.state.colorPalleteOpened })
    }
    handleColorChange = (noteId, color) => {
        this.props.changeColor(noteId, color)
        this.handleColorPallete()
    }

    render() {

        const { note, todos, colorPalleteOpened, isHover } = this.state
        const { removeTodo, handleColorPallete, handleColorChange, handleMouseOver, handleMouseOut } = this

        return <div className="note-todos flex column space-between" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1>{note.info.title}</h1>
            <ul>
                {todos.map((todo, idx) => <li key={idx}>{todo.txt} <span onClick={() => removeTodo(idx)}>X</span></li>)}
            </ul>
            {isHover &&
                <div className="note-icons">
                    {colorPalleteOpened && <div className="color-pallete flex space-between align-center">
                        <button className="color-btn lightblue" onClick={() => handleColorChange(note.id, 'lightblue')}></button>
                        <button className="color-btn lightgreen" onClick={() => handleColorChange(note.id, 'lightgreen')}></button>
                        <button className="color-btn goldenrod" onClick={() => handleColorChange(note.id, 'goldenrod')}></button>
                        <button className="color-btn lightsalmon" onClick={() => handleColorChange(note.id, 'lightsalmon')}></button>
                        <button className="color-btn lightcoral" onClick={() => handleColorChange(note.id, 'lightcoral')}></button>
                    </div>}
                    <i className="fa-solid fa-thumbtack"></i>
                    <i className="fa-solid fa-palette" onClick={handleColorPallete}></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash-can" onClick={() => this.props.onRemove(note.id)}></i>
                </div>
            }
        </div>
    }

}