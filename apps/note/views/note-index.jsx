import { NewNote } from '../cmps/new-note.jsx'
import { NoteList } from '../cmps/note-list.jsx'

export class NoteIndex extends React.Component {


    render() {


        return (
            <div className="note-index flex column">
                <NewNote />
                <NoteList />
            </div>
        )
    }
}