import { noteService } from "../services/note.service.js";
import { NoteTxt } from "../cmps/note-txt.jsx"

export class NoteList extends React.Component {

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

    NotePreview = (props) => {
        switch (props.type) {
            case 'note-txt':
                return <NoteTxt {...props} />
        }
    }

    render() {
        const { notes } = this.state
        const { NotePreview } = this

        console.log(notes);

        return <section className="note-list">
            {notes &&
                notes.map(note => <div className="note-preview" key={note.id}>
                    <NotePreview type={note.type} info={note.info} />
                </div>
                )
            }
        </section>
    }
}