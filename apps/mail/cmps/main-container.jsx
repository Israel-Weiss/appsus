import { MailSide } from './mail-side.jsx';
import { MailList } from './mail-list.jsx';

export function MainContainer({ mails }) {

    return <main>
        <MailSide />
        <MailList mails={mails}/>
    </main>
}