import { mailService } from "../services/mail.service.js";
import { MailHeader } from '../cmps/mail-header.jsx';
import { DetailsContainer } from "../cmps/details-container.jsx";

export class MailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId).then((mail) => {
            if (!mail) return this.onCloseDetails
            this.setState({ mail })
        })
    }

    onCloseDetils = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { mail } = this.state
        if (!mail) return <div>Sorry, but the requested email was not found</div>

        return <section className="mail-details">
            <MailHeader />
            <DetailsContainer mail={mail} />
        </section>
    }

}