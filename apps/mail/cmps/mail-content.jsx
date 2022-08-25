import { mailService } from "../services/mail.service.js"

const { Link } = ReactRouterDOM

export function MailContent({ mail }) {

function onRemoveMail() {
    mailService.remove(mail.id)
}
    return <section className='mail-list mail-preview'>
        <h1>{`From: ${mail.from}`}</h1>
        <h1>{`To: ${mail.to}`}</h1>
        <h1>{`Title: ${mail.title}`}</h1>
        <h1>{`body: ${mail.body}`}</h1>
        <h1>{`Sent at: ${mail.sentAt}`}</h1>
        <Link to={`/mail`}><button >Go Back to inbox!</button></Link>
        <Link to={`/mail`}><button onClick={()=>onRemoveMail(mail.id)}>Delete mail from storage</button></Link>
    </section>
}
