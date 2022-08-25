export function NoteTxt({note}) {
    return <div className="note-txt">
        {note.info.title && <h1>{note.info.title}</h1>}
        <p>{note.info.txt}</p>
    </div>
}