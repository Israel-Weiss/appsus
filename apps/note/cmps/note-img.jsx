
export function NoteImg({note}) {

    return <div className="note-img">
        <div className="img-container">
            <img src={note.info.title} />
        </div>
        <div className="text-container">
            <h1>{note.info.txt}</h1>
        </div>
    </div>

}