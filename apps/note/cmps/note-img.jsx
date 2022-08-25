
export function NoteImg({note}) {

    return <div className="note-img">
        <div className="img-container">
            <img src={note.info.url} />
        </div>
        <div className="text-container">
            <h1>{note.info.title}</h1>
        </div>
    </div>

}