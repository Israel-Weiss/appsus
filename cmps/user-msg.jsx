import { eventBusService } from '../services/event-bus.service.js'


export class UserMsg extends React.Component {
  unsubscribe
  state = {
    msg: null
  }

  componentDidMount() {
    this.unsubscribe = eventBusService.on('show-user-msg', (msg) => {
      this.setState({ msg })
      setTimeout(this.closeMsg, 3000)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  closeMsg = ()=>{
    this.setState({ msg: null })
  }

  render() {
    const {msg} = this.state
    const {closeMsg} = this

    if (!msg) return <span></span>
    return (
      <section className={'user-msg ' + msg.type}>
        <button onClick={closeMsg}>x</button>
        {msg.txt}
      </section>
    )
  }
}
