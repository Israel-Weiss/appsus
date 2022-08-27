import { NewNote } from '../cmps/new-note.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { PinnedList } from '../cmps/note-pinned-list.jsx'
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

    pinNote = (id) => {
        noteService.pinNote(id)
            .then(notes => this.setState({ notes }))
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

        const { removeNote, pinNote, changeColor } = this

        return (
            <div className="note-index flex column">
                <NewNote loadNotes={this.loadNotes} />
                <PinnedList notes={notes} onRemoveNote={removeNote} onPinNote={pinNote} onChangeColor={changeColor} />
                <NoteList notes={notes} onRemoveNote={removeNote} onPinNote={pinNote} onChangeColor={changeColor} />
            </div>
        )
    }
}