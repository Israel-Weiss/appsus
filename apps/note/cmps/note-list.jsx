import { NotePreview } from "./note-preview.jsx";
import { noteService } from '../services/note.service.js'
import { Spinner } from '../cmps/loader.js'
const { Link } = ReactRouterDOM

export class NoteList extends React.Component {

    state = {
        notes: null,
    }

    componentDidMount() {
        setTimeout(this.loadNotes, 1000)
    }

    changeColor = (note, color) => {
        noteService.changeColor(note, color)
    }

    removeNote = (id) => {
        noteService.removeNote(id)
            .then(this.setState({ notes: this.state.notes.filter(note => note.id !== id) }))
    }

    loadNotes = () => {
        this.setState({ notes: this.props.notes })
    }

    render() {
        const { notes } = this.state

        if (!notes) return <Spinner />

        return <section className="note-list grid">
            {notes &&
                notes.map(note => <Link to={`/note/${note.id}`} key={note.id}>
                    <div className="note-preview flex column"
                        style={note.style ? { backgroundColor: note.style.backgroundColor } : { backgroundColor: 'lightcoral' }}>
                        <NotePreview note={note} onRemove={this.removeNote} changeColor={this.changeColor} />
                    </div>
                </Link>
                )
            }
        </section>
    }
}

{/* <NotePreview type={note.type} info={note.info} /> */ }
