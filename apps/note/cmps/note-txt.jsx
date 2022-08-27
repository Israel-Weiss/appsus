export class NoteTxt extends React.Component {

    state = {
        colorPalleteOpened: false,
        isHover: false
    }


    handleMouseOver = () => {
        this.setState({ isHover: true })
    }
    handleMouseOut = () => {
        this.setState({ isHover: false })
    }

    handleColorPallete = () => {
        this.setState({ colorPalleteOpened: !this.state.colorPalleteOpened })
    }
    handleColorChange = (noteId, color) => {
        this.props.changeColor(noteId, color)
        this.handleColorPallete()
    }

    render() {

        const { note } = this.props
        const { colorPalleteOpened, isHover } = this.state
        const { handleColorPallete, handleColorChange , handleMouseOver, handleMouseOut } = this

        return <div className="note-txt flex column space-between" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

            {note.info.title && <h1>{note.info.title}</h1>}
            <p>{note.info.txt}</p>
            {isHover &&
                <div className="note-icons">
                    {colorPalleteOpened && <div className="color-pallete flex space-between align-center">
                        <button className="color-btn lightblue" onClick={() => handleColorChange(note.id, 'lightblue')}></button>
                        <button className="color-btn lightgreen" onClick={() => handleColorChange(note.id, 'lightgreen')}></button>
                        <button className="color-btn goldenrod" onClick={() => handleColorChange(note.id, 'goldenrod')}></button>
                        <button className="color-btn lightsalmon" onClick={() => handleColorChange(note.id, 'lightsalmon')}></button>
                        <button className="color-btn lightcoral" onClick={() => handleColorChange(note.id, 'lightcoral')}></button>
                    </div>}
                    <i className="fa-solid fa-thumbtack" onClick={() => this.props.pinNote(note.id)}></i>
                    <i className="fa-solid fa-palette" onClick={handleColorPallete}></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash-can" onClick={() => this.props.onRemove(note.id)}></i>
                </div>
            }
        </div>
    }
}