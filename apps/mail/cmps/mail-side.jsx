
export function MailSide() {

    function onFilter(filterBy) {
        console.log(123);
    }

    function Compose() {
        console.log(123);
    }

    return <section className="mail-side">
        <button className="compose-btn" onClick={Compose()}>+ Compose </button>

        <button className="side-btn" onClick={onFilter('inbox')}>Inbox</button>
        <button className="side-btn" onClick={onFilter('starred')}>Starred</button>
        <button className="side-btn" onClick={onFilter('sent')}>Sent Mail</button>
        <button className="side-btn" onClick={onFilter('drafts')}>Drafts</button>
    </section>
}

// export class MailSide extends React.Component {

//     state = {
//         filterBy: {
//             inbox: '',
//             starred: '',
//             sent: '',
//             drafts: ''
//         }
//     }

//     onFilter = () => {

//     }

//     render() {
//         return <section>
//             <button className="side-btn" onClick={ this.onFilter ()}>123</button>
//             <button className="side-btn" onClick={ this.onFilter ()}>123</button>
//             <button className="side-btn" onClick={ this.onFilter ()}>123</button>
//             <button className="side-btn" onClick={ this.onFilter ()}>123</button>
//         </section >
//     }

// }