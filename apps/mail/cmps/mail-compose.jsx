import { mailService } from "../services/mail.service.js"

export class MailCompose extends React.Component {

    state = {
        display: this.props.display,
        mail: {
            title: '',
            body: '',
            addres: ''
        }
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
        this.state.display = false
    }

    render() {
        const { title, body, addres } = this.state.mail
        if (this.state.display) return <section className="mail-compose">
            <form className="flex column align-center" onSubmit={this.onSaveMail}>
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
                    <label htmlFor="body">body</label>
                    <input type="text" name="body"
                        value={body} id="body"
                        onChange={this.handleChange}
                        className="compose-body"
                    />
                </div>

                <button>Submit!</button>
            </form>
        </section>
    }
}