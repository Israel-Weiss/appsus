import { NotePreview } from "./note-preview.jsx";
const { Link } = ReactRouterDOM

export function PinnedList({ notes, onChangeColor, onRemoveNote, onPinNote }) {


    let pinnedNotes = []

    function getPinnedNotes() {
        pinnedNotes = notes.filter(note => note.isPinned)
    }
    getPinnedNotes()

    if(!pinnedNotes || pinnedNotes.length === 0) return
    
    return <section className="pinned-notes">
        <h1>Pinned Notes</h1>
        <div className="pinned-list grid">
            {pinnedNotes &&
                pinnedNotes.map(note => <Link to={`/note/${note.id}`} key={note.id}>
                    <div className="note-preview flex column"
                        style={note.style ? { backgroundColor: note.style.backgroundColor } : { backgroundColor: 'lightcoral' }}>
                        <NotePreview note={note} onRemove={onRemoveNote} changeColor={onChangeColor} pinNote={onPinNote} />
                    </div>
                </Link>
                )
            }
        </div>
    </section>
}