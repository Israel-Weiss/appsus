
import { MailHeader } from '../cmps/mail-header.jsx';
import { MainContainer } from '../cmps/main-container.jsx';

import { mailService } from '../services/mail.service.js';

export class MailIndex extends React.Component {
    state = {
        mails: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query(this.state.filterBy)
            .then(mails => this.setState({ mails }))
    }

    render() {
        const { mails } = this.state
        return <section className='mail-index'>
            <MailHeader />
            <MainContainer mails={mails} />
        </section>
    }
}
