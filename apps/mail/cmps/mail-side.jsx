import { MailCompose } from './mail-compose.jsx';


export class MailSide extends React.Component {

    state = {
        displayCompose: false
    }

    onFilter(filterBy) {
        this.setState
    }


    Compose() {
        this.setState({displayCompose: true})
    }

    render() {

        return <section className="mail-side flex column">
            <button className="compose-btn" onClick={()=>this.Compose()}>+ Compose </button>

            <div className="side-btn" onClick={()=>this.onFilter('inbox')}>Inbox</div>
            <div className="side-btn" onClick={()=>this.onFilter('starred')}>Starred</div>
            <div className="side-btn" onClick={()=>this.onFilter('sent')}>Sent Mail</div>
            <div className="side-btn" onClick={()=>this.onFilter('drafts')}>Drafts</div>

            <MailCompose renderList={this.props.renderList} display={this.state.displayCompose} />
        </section>
    }
}
<button onClick={()=>onRemoveCar(car.id)}>X</button>

