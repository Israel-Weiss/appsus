
import { MailHeader } from '../cmps/mail-header.jsx'
import { MainContainer } from '../cmps/main-container.jsx'

export class MailIndex extends React.Component {
    state = {
        mails: []
    }

    render() {
        return <section className='mail-index'>
            <MailHeader />
            <MainContainer />
        </section>
    }
}
