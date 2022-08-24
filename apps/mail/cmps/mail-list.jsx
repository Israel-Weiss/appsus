import { MailPreview } from './mail-preview.jsx';

export function MailList({ mails }) {
    return <section>
        <ul>
            {
                mails.map(mail =>
                    <li className='mail-preview' key={mail.id}>
                        <MailPreview mail={mail} />
                    </li>)
            }
        </ul >
    </section>
}