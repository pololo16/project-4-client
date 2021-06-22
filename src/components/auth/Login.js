import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'


function Login() {
  const history = useHistory()

  const [formdata, setFormdata] = React.useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
  
    try {
      const res = await loginUser(formdata)
      setToken(res)
      history.push('/')
    } catch (err) {
      console.log(err.response.data)

    }
  }
  // const handleFocus = ()=>{
  //   setIsError(false) 
  // }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="forms box column is-half is-offset-one-quarter" 
            onSubmit={handleSubmit} >
            <div className="field">
              <label className="label labels">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  // onFocus={handleFocus}
              
                />
              </div>
            
            </div>
            <div className="field">
              <label className="label labels">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  // onFocus={handleFocus}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button-submit button is-fullwidth is-black">
              Log me in!
              </button>
            </div>
            <div className="field">
              <button type="submit" className="button-submit button is-fullwidth is-black">
                <Link to='/register'>register</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Login