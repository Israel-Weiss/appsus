import { noteService } from "../services/note.service.js"

export class NoteImg extends React.Component {

    state = {
        colorPalleteOpened: false
    }

    handleColorPallete = () => {
        this.setState({ colorPalleteOpened: !this.state.colorPalleteOpened })
    }
    handleColorChange = (noteId,color) => {
        this.props.changeColor(noteId,color)
        this.handleColorPallete()
    }

    render() {

        const { note } = this.props
        const { colorPalleteOpened } = this.state
        const { handleColorPallete , handleColorChange } = this


        return <div className="note-img">
            <div className="img-container">
                <img src={note.info.title} />
            </div>
        <div className="text-container flex column space-between">
                <h1>{note.info.txt}</h1>
                <div className="note-icons">
                    {colorPalleteOpened && <div className="color-pallete flex space-between align-center">
                        <button className="color-btn lightblue" onClick={() => handleColorChange(note.id, 'lightblue')}></button>
                        <button className="color-btn lightgreen" onClick={() => handleColorChange(note.id, 'lightgreen')}></button>
                        <button className="color-btn goldenrod" onClick={() => handleColorChange(note.id, 'goldenrod')}></button>
                        <button className="color-btn lightsalmon" onClick={() => handleColorChange(note.id, 'lightsalmon')}></button>
                        <button className="color-btn lightcoral" onClick={() => handleColorChange(note.id, 'lightcoral')}></button>
                    </div>}
                    <i className="fa-solid fa-thumbtack"></i>
                    <i className="fa-solid fa-palette" onClick={handleColorPallete}></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash-can"  onClick={() => this.props.onRemove(note.id)}></i>
                </div>
            </div>
        </div>
    }


}