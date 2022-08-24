import { MailPreview } from './mail-preview.jsx';

export function MailList({ mails }) {
    return <section >
        <table className='mail-list'>
            <tbody>
                {
                    mails.map(mail =>
                        <tr className='mail-preview' key={mail.id}>
                            <MailPreview mail={mail} />
                        </tr>)
                }
            </tbody>
        </table>
    </section>
}