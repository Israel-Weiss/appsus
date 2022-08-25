import { MailCompose } from './mail-compose.jsx';


export function MailSide({ renderList }) {

    function onFilter(filterBy) {
        console.log(123);
    }

    let displayCompose = false

    function Compose() {
        displayCompose = true
    }

    return <section className="mail-side flex column">
        <button className="compose-btn" onClick={Compose()}>+ Compose </button>

        <div className="side-btn" onClick={onFilter('inbox')}>Inbox</div>
        <div className="side-btn" onClick={onFilter('starred')}>Starred</div>
        <div className="side-btn" onClick={onFilter('sent')}>Sent Mail</div>
        <div className="side-btn" onClick={onFilter('drafts')}>Drafts</div>

        <MailCompose renderList={renderList} display={displayCompose}/>
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