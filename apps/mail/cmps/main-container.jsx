import { MailSide } from './mail-side.jsx';
import { MailList } from './mail-list.jsx';

export function MainContainer({ mails, renderList }) {

    return <main className='main-container flex'>
        <MailSide renderList={renderList} />
        <MailList mails={mails} />
    </main>
}