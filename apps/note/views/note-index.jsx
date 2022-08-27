import { NewNote } from '../cmps/new-note.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export class NoteIndex extends React.Component {

    state = {
        notes: [],
        isColorPalleteOpen: false
    }

    componentDidMount() {
        this.loadNotes()
    }

    removeNote = (id) => {
        noteService.removeNote(id)
            .then(this.setState({ notes: this.state.notes.filter(note => note.id !== id) }))
            showSuccessMsg("Note deleted")
    }

    changeColor = (note, color) => {
        noteService.changeColor(note, color)
            .then(notes => this.setState({ notes }))
            showSuccessMsg("Note color has changed")
    }

    loadNotes = () => {
        noteService.queryNotes()
            .then(notes => this.setState({ notes }))
    }

    render() {
        const { notes } = this.state

        return (
            <div className="note-index flex column">
                <NewNote loadNotes={this.loadNotes} />
                <NoteList notes={notes} onRemoveNote={this.removeNote} onChangeColor={this.changeColor} />
            </div>
        )
    }
}