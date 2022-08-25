import { noteService } from '../services/note.service.js'

export class NewNote extends React.Component {

    state = {
        input1Style: { height: '40px' },
        input2Style: { display: 'none' },
        input1placeHolder: 'Take a note...',
        newNote: {
            type: 'note-txt',
            title: '',
            body: ''
        }
    }

    isOpenedInput = false
    input2ref = React.createRef()

    openInput = () => {
        this.setState({ input2Style: { display: 'block' } }, () => {
            if (!this.isOpenedInput) this.input2ref.current.focus()
            this.isOpenedInput = true
        })
        this.setState((prevState) => ({ input1Style: { ...prevState.input1Style, marginBlockStart: '0.2rem' } }))
    }

    closeInput = () => {
        this.setState((prevState) => ({ input1Style: { ...prevState.input1Style, marginBlockStart: '0' } }))
        this.setState({ input1placeHolder: 'Take a note...' })
        this.setState({ input2Style: { display: 'none' } })
    }

    handleChange = ({ target }) => {
        const input = target.name
        const value = target.value
        this.setState((prevState) => ({
            newNote: {
                ...prevState.newNote,
                [input]: value
            }
        }))
    }

    handleNewNote = () => {
        const { newNote } = this.state
        if (newNote.title === '' && newNote.body === '') this.closeInput()
        else {
            const type = newNote.type
            const info = { title: newNote.title, txt: newNote.body }
            noteService.addNote(type, info)
                .then(this.closeInput())
        }
    }

    handleType = (type) => {
        this.setState({ newNote: { ...this.state.newNote, type: type } },()=>{
            this.setState({ input1placeHolder: type })
        })
        // this.setState({ user: {...user, score: updatedScore }})
    }

    render() {

        const { input1Style, input2Style, input1placeHolder } = this.state
        const { openInput, handleChange, handleNewNote, handleType } = this

        return <div className="new-note">
            <div className="input1">
                <input type="text"
                    placeholder={input1placeHolder}
                    onFocus={openInput}
                    name="title"
                    onChange={handleChange}
                    style={input1Style} />
            </div>

            <div className="opened-new-note" style={input2Style}>
                <div className="input2">
                    <textarea type="text"
                        placeholder="Take a Note..."
                        ref={this.input2ref}
                        name="body"
                        onChange={handleChange}
                        onFocus={openInput}
                        onBlur={handleNewNote} />
                </div>
                <div className="btns-new-note flex space-between">
                    <div className="new-note-edit-btns flex space-between">
                        <i className="fa-solid fa-palette"></i>
                        <i className="fa-solid fa-image" onClick={() => { handleType('note-img') }}></i>
                        <i className="fa-solid fa-list" onClick={() => { handleType('note-todos') }}></i>
                    </div>
                    <span onClick={handleNewNote}>Close</span>
                </div>
            </div>

        </div>
    }
}