import { UserMsg } from '../cmps/user-msg.jsx'

const { Link, NavLink, withRouter } = ReactRouterDOM
export class AppHeader extends React.Component {

    state = {
        isNavOpen: false
    }

    toggleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

    render() {

        const { isNavOpen } = this.state
        const { toggleNav } = this

        return <header className="app-header">
            <Link to="/">
                <img src="../assets/img/logo.png" className="logo" />
            </Link>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <img src="../assets/img/appnavbar.png" onClick={toggleNav} className="nav-apps" />
                {isNavOpen && <div className="flex justify-center align-center opened-nav">
                    <Link to="/mail" className="flex column" onClick={toggleNav}>
                        <i className="fa-solid fa-envelope"></i>
                        <span>Mail</span>
                    </Link>
                    <Link to="/note" className="flex column" onClick={toggleNav}>
                        <i className="fa-solid fa-note-sticky"></i>
                        <span>Notes</span>
                    </Link>
                </div>}
                <UserMsg />
            </nav>
        </header>
    }

}
