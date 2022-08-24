export class NewNote extends React.Component {



    state = {
        btnSend: false
    }

    toggleSend = () => {
        this.setState({ btnSend: !this.state.btnSend })
        console.log(this.state.btnSend);
    }

    render() {

        const { btnSend } = this.state
        const { toggleSend } = this

        return <div className="new-note flex">
            <input type="text"
                placeholder="Take a Note..."
                onClick={toggleSend} />
            {btnSend && <button>Add</button>}
        </div>
    }
}