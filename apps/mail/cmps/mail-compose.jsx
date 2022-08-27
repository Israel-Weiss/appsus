import { mailService } from "../services/mail.service.js"

let isClose = false

export class MailCompose extends React.Component {

    state = {
        display: false,
        mail: {
            title: '',
            body: '',
            addres: ''
        }
    }

    componentDidUpdate() {
        if (this.props.display === this.state.display) return
        this.isDispley()
    }

    isDispley = () => {
        if (isClose) return
        this.setState({ display: this.props.display })
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            mail: { ...prevState.mail, [field]: value }
        }))
    }

    onSaveMail = (ev) => {
        ev.preventDefault()
        if (ev.target[0].value.length === 0
            || ev.target[1].value.length === 0) return
        mailService.save(this.state.mail)
            .then(() => {
                ev.target[0].value = ''
                ev.target[1].value = ''
                ev.target[2].value = ''
                this.props.renderList()
                this.closeCompose()
            })
    }

    closeCompose = () => {
        isClose = true
        this.setState({ display: false })
    }

    cancelClose = () => {
        isClose = false
    }

    render() {
        setTimeout(() => {
            this.cancelClose()
        }, 100);
        const { title, body, addres } = this.state.mail
        if (this.state.display) return <section className="mail-compose">
            <form className="flex column align-center" onSubmit={this.onSaveMail}>
                <div className="compose-header">
                    <h2>New masage</h2>
                </div>
                <div className="compose-input">
                    <label htmlFor="addres">To</label>
                    <input type="email" name="addres"
                        value={addres} id="addres"
                        onChange={this.handleChange}
                        className="compose-to"
                    />
                </div>

                <div className="compose-input">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"
                        value={title} id="title"
                        onChange={this.handleChange}
                        className="compose-title"
                    />
                </div>

                <div className="compose-input">
                    <textarea type="text" name="body"
                        value={body} id="body"
                        onChange={this.handleChange}
                        className="compose-body"
                    />
                </div>

                <div className="compose-futer">
                    <div className="close-btn" onClick={this.closeCompose}>Close</div>
                    <button>Submit!</button>
                </div>

            </form>
        </section>
    }
}