import { NewNote } from '../cmps/new-note.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { noteService } from '../services/note.service.js'

export class NoteIndex extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() { 
        this.loadNotes()
     }

    loadNotes = () => {
        noteService.queryNotes()
            .then(notes => this.setState({ notes }))
    }

    render() {
        const { notes } = this.state

        return (
            <div className="note-index flex column">
                <NewNote reloadNotes={this.loadNotes}/>
                <NoteList notes={notes}/>
            </div>
        )
    }
}