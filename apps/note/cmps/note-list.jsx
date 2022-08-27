import { NotePreview } from "./note-preview.jsx";
import { Spinner } from '../cmps/loader.js'
const { Link } = ReactRouterDOM

export function NoteList({notes , onChangeColor, onRemoveNote, onPinNote}) {


    if (!notes) return <Spinner />

    return <section className="note-list grid">
        {notes &&
            notes.map(note => <Link to={`/note/${note.id}`} key={note.id}>
                <div className="note-preview flex column"
                    style={note.style ? { backgroundColor: note.style.backgroundColor } : { backgroundColor: 'lightcoral' }}>
                    <NotePreview note={note} onRemove={onRemoveNote} changeColor={onChangeColor} pinNote={onPinNote} />
                </div>
            </Link>
            )
        }
    </section>
}
