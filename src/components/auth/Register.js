import React from 'react'
// import axios from 'axios'
// import { useForm } from '../../hooks/useForm'
import { registerUser } from '../../lib/api'
import { useHistory } from 'react-router-dom'

function Register() {
  const history = useHistory()
  const [formdata, setFormdata ] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmatio: '',
  })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await registerUser(formdata)
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  

  console.log('formdata', formdata)

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form className='forms column is-half is-offset-one-quarter'>
            <div className="field">
              <label className="label" htmlFor="username"> Username</label>
              <div className="control">
                <input 
                  className="input"
                  name="username" 
                  id="username" 
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="email"> Email</label>
              <div className="control">
                <input 
                  className="input"
                  name="email" 
                  id="email" 
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="password" > Password</label>
              <div className="control">
                <input 
                  className="input"
                  name="password" 
                  id="password" 
                  type="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="passwordConfirmation"> Password Confirmation</label>
              <div className="control">
                <input 
                  className="input"
                  name="passwordConfirmation" 
                  id="passwordConfirmation" 
                  type="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth" onClick={handleSubmit}>Register Me!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Register