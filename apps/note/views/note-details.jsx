import { NoteIndex } from "./note-index.jsx"
import { noteService } from "../services/note.service.js";

export class NoteDetails extends React.Component {

    state = {
        note: null
    }

    componentDidMount() { 
        this.loadNote()
     }

    loadNote = () => {
        noteService.getNoteById(+this.props.match.params.noteId)
            .then(note => this.setState({ note }))
    }




    render() {

        const { note } = this.state
        return <h1>hello from Details</h1>
    }



}