import { NoteTxt } from "../cmps/note-txt.jsx"
import { NoteImg } from "../cmps/note-img.jsx"
import { NoteTodos } from "../cmps/note-todos.jsx"


export class NotePreview extends React.Component {

    state = {
        type: this.props.note.type
    }

    render() {

        const { type } = this.state
        const { props } = this

        switch (type) {
            case 'note-txt':
                return <NoteTxt {...props} />
            case 'note-img':
                return <NoteImg {...props} />
            case 'note-todos':
                return <NoteTodos {...props} />
        }
    }
}