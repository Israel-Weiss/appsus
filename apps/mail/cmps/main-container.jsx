import { MailSide } from './mail-side.jsx';
import { MailList } from './mail-list.jsx';

export function MainContainer({ mails }) {

    return <main className='main-container flex'>
        <MailSide />
        <MailList mails={mails}/>
    </main>
}