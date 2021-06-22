import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { isAuthenticated, removeToken } from '../../lib/auth'

function Header() {
  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }

  return (

    <section className="header hero is-small header-style has-text-centered">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg/1280px-Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg.png' width="112" height="28"/>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light">
                  <strong>COVID-19 insurance</strong>
                </a>
                <a className="button is-light">
                  English (UK) 🇬🇧 United Kigndom £ GBP
                </a>
                <a>
                  {!isLoggedIn ?
                    <>
                      <Link to="/register" className="button">
                  Register
                      </Link>
                      <Link to="/login" className="button">
                  Log In
                      </Link>
                    </>
                    :
                    <button
                      className="button"
                      onClick={handleLogout}
                    >
                  Logout
                    </button>
                  }
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      

      <div className="tabs">
        <ul>
          <li className="is-active">
            <a>
              <span>🛩 Flight</span>
            </a>
          </li>
          <li>
            <a>
              <span>🏨 Hotels</span>
            </a>
          </li>
          <li>
            <a>
              <span>🚗 Car Hire</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
  
}
export default Header