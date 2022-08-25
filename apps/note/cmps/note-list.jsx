import { NotePreview } from "./note-preview.jsx";
import { noteService } from '../services/note.service.js'
import { Spinner } from '../cmps/loader.js'
const { Link } = ReactRouterDOM

export class NoteList extends React.Component {

    state = {
        notes: null,
        colorPalleteOpened: false
    }

    componentDidMount() {
        setTimeout(this.loadNotes, 1000)
    }

    removeNote = (id) => {
        noteService.removeNote(id)
            .then(this.setState({ notes: this.state.notes.filter(note => note.id !== id) }))
    }

    loadNotes = () => {
        this.setState({ notes: this.props.notes })
    }
    handleColorPallete = () => {
        this.setState({ colorPalleteOpened: !this.state.colorPalleteOpened })
    }
    changeColor = (note, color) => {
        noteService.changeColor(note, color)
            .then(notes => this.setState({ notes }))
            .then(this.handleColorPallete())
    }


    render() {
        const { notes, colorPalleteOpened } = this.state
        const { removeNote, handleColorPallete, changeColor } = this

        if (!notes) return <Spinner />

        return <section className="note-list grid">
            {notes &&
                notes.map(note => <Link to={`/note/${note.id}`} key={note.id}>
                    <div className="note-preview flex column"
                        style={note.style ? { backgroundColor: note.style.backgroundColor } : { backgroundColor: 'lightcoral' }}>
                        <NotePreview note={note} />
                        <div className="note-icons">
                            {colorPalleteOpened && <div className="color-pallete flex space-between">
                                <button className="color-btn lightblue" onClick={() => changeColor(note.id, 'lightblue')}></button>
                                <button className="color-btn lightgreen" onClick={() => changeColor(note.id, 'lightgreen')}></button>
                                <button className="color-btn goldenrod" onClick={() => changeColor(note.id, 'goldenrod')}></button>
                                <button className="color-btn lightsalmon" onClick={() => changeColor(note.id, 'lightsalmon')}></button>
                                <button className="color-btn lightcoral" onClick={() => changeColor(note.id, 'lightcoral')}></button>
                            </div>}
                            <i className="fa-solid fa-thumbtack"></i>
                            <i className="fa-solid fa-palette" onClick={handleColorPallete}></i>
                            <i className="fa-solid fa-envelope"></i>
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash-can" onClick={() => removeNote(note.id)}></i>
                        </div>
                    </div>
                </Link>
                )
            }
        </section>
    }
}

{/* <NotePreview type={note.type} info={note.info} /> */ }
