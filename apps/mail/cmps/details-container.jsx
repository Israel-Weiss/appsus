import { MailSide } from './mail-side.jsx';
import { MailContent } from './mail-content.jsx';

export function DetailsContainer({ mail }) {

    return <main className='main-container flex'>
        <MailSide />
        <MailContent mail={mail} />
    </main>
}