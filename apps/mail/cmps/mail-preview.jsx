const {Link} = ReactRouterDOM

export function MailPreview({ mail }) {

    return <article className="mail-preview">
        <Link to={"/mail/" + mail.id}>
            <td className="stared"> * </td>
            <td className="from">{mail.from}</td>
            <td className="title">{mail.title}</td>
            <td className="subject">{mail.subject}</td>
            <td className="date">{mail.date}</td>
        </Link>
    </article>
}