const {Link} = ReactRouterDOM

export function MailPreview({ mail }) {

    return <article>
        <Link to={"/mail/" + mail.id}>
            <div className="stared"> * </div>
            <div className="from">{mail.from}</div>
            <div className="title">{mail.title}</div>
            <div className="subject">{mail.subject}</div>
            <div className="date">{mail.date}</div>
        </Link>
    </article>
}