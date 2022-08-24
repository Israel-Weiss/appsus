const {Link} = ReactRouterDOM

export function MailPreview({ mail }) {

    return <article>
        <Link to={"/mail/" + mail.id}>
            <h3></h3>
        </Link>
    </article>
}