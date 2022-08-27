import { noteService } from '../services/note.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export class NewNote extends React.Component {

    state = {
        input1Style: { height: '40px', backgroundColor: '#fff' },
        input2Style: { display: 'none', backgroundColor: '#fff' },
        input1placeHolder: 'Take a note...',
        colorPalleteOpened: false,
        openedColorPallete: false,
        newNote: {
            type: 'note-txt',
            title: '',
            body: '',
            bgColor: '#fff'
        }
    }

    isOpenedInput = false
    input2Ref = React.createRef()

    loadNotes = () => {
        this.setState({ notes: this.props.notes })
    }

    openInput = () => {
        this.setState({ input2Style: { display: 'block' }, input1placeHolder: "Title" }, () => {
            if (!this.isOpenedInput) this.input2Ref.current.focus()
            this.isOpenedInput = true
        })
        this.setState((prevState) => ({ input1Style: { ...prevState.input1Style, marginBlockStart: '0.2rem' } }))
    }

    closeInput = () => {
        this.setState((prevState) => ({
            input1Style: { ...prevState.input1Style, marginBlockStart: '0' },
            input1placeHolder: 'Take a note...',
            input2Style: { display: 'none' }
        }))
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
            const bgColor = newNote.bgColor
            noteService.addNote(type, info, bgColor)
                .then(this.closeInput())
            newNote.title = ''
            newNote.body = ''
            showSuccessMsg("New note added")
            this.props.loadNotes()
        }
    }

    handleType = (type) => {
        switch (type) {
            case 'note-img':
                this.setState({ input1placeHolder: 'Put here the Image Source' })
                break;
            case 'note-todos':
                this.setState({ input1placeHolder: 'put your todos under the title comma seperated' })
            default:
                break;
        }
        this.setState({ newNote: { ...this.state.newNote, type: type } })
    }

    handleColorPallete = () => {
        this.setState({ colorPalleteOpened: !this.state.colorPalleteOpened })
    }

    handleBgColor = (color) => {
        this.setState({
            newNote: { ...this.state.newNote, bgColor: color },
            colorPalleteOpened: !this.state.colorPalleteOpened,
            input1Style: { ...this.state.input1Style, backgroundColor: color }
        })
    }

    render() {


        const { input1Style, input2Style, input1placeHolder, newNote, colorPalleteOpened } = this.state
        const { openInput, handleChange, handleNewNote, handleType, handleBgColor, input2Ref, handleColorPallete } = this

        // console.log(notes);

        return <div className="new-note" style={{ backgroundColor: input1Style.backgroundColor }}>
            <div className="input1">
                <input type="text"
                    placeholder={input1placeHolder}
                    onFocus={openInput}
                    name="title"
                    value={newNote.title}
                    onChange={handleChange}
                    style={input1Style} />
            </div>

            <div className="opened-new-note" style={input2Style}>
                <div className="input2">
                    <textarea type="text"
                        placeholder="Take a Note..."
                        ref={input2Ref}
                        name="body"
                        value={newNote.body}
                        onChange={handleChange}
                        onFocus={openInput}
                        style={{ backgroundColor: input1Style.backgroundColor }} />
                </div>
                <div className="btns-new-note flex space-between">
                    {colorPalleteOpened && <div className="color-pallete flex space-between align-center">
                        <button className="color-btn lightblue" onClick={() => handleBgColor('lightblue')}></button>
                        <button className="color-btn lightgreen" onClick={() => handleBgColor('lightgreen')}></button>
                        <button className="color-btn goldenrod" onClick={() => handleBgColor('goldenrod')}></button>
                        <button className="color-btn lightsalmon" onClick={() => handleBgColor('lightsalmon')}></button>
                        <button className="color-btn lightcoral" onClick={() => handleBgColor('lightcoral')}></button>
                    </div>}
                    <div className="new-note-edit-btns flex space-between">
                        <i className="fa-solid fa-palette" onClick={handleColorPallete}></i>
                        <i className="fa-solid fa-image" onClick={() => { handleType('note-img') }}></i>
                        <i className="fa-solid fa-list" onClick={() => { handleType('note-todos') }}></i>
                    </div>
                    <span onClick={handleNewNote}>Close</span>
                </div>
            </div>

        </div>
    }
}