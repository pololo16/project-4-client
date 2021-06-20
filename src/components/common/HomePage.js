import React from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../hooks/useForm'


// import { render } from 'sass'


// function HomePage() {
//   // const [ searchTerm, setSearchTerm ] = useForm({
//   //   origin: '',
//   // })
//   const [ searchTerm, setSearchTerm ] = React.useState('')
//   const handleInput = (e) => {
//     setSearchTerm(e.target.value)
//   }
//   console.log(searchTerm)

  
//   return (
//     <div className="first-section">
//       <Link to='/flights'>flights</Link>
//       <img className="homepage-img" src='https://content.skyscnr.com/m/785bdfcbe683606c/Large-Flights-hero-2.jpg?crop=1800px:1375px&quality=60' alt="background-img" />
//       <h1 className="tittle-one"> Let the journey begin</h1>
//       <div className="form">
//         <form>
//           <div>
//             <label>Origin</label>
//             <input type="text" name="name" />
//             <input 
//               onChange={handleInput} 
//               value={searchTerm.origin} 
//               type="text" 
//               placeholder="Search by airport or city" 
//               className="input is-medium is-rounded search-input">
//             </input>
//           </div>
//         </form>
//       </div>
//     </div>
    
//   )
// }

  
// export default HomePage




// class Form extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       origin: '',
//     }
//   }


//   render() {
//     return (
//       <form>
//         <div>
//           <label>Origin</label>
//           <input type="text" value={this.state.origin}/>
//         </div>
//       </form>
//     )
//   }
// }
// export default Form


function HomePage() {

  const { formData, formErrors, handleChange, setFormErrors, setFormData } = useForm({
    origin: '',
    destination: '',
    departing_date: '',
    return_date: '',
    passangers: '',
  })
  
  React.useEffect(() => {
    const getData = async () => {
      try {

        console.log(setFormData)
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
          setFormErrors(error.response.data.message)
        }
      }
    } 
    getData()
  }, [setFormData, setFormErrors])

  // console.log(setFormErrors)
  // console.log(setFormdata)

  const handleSubmit = async event => {
    event.preventDefault()

  }

  console.log(formData)

  return (
    
    <section className='section'>
      <img className="homepage-img" src='https://content.skyscnr.com/m/785bdfcbe683606c/Large-Flights-hero-2.jpg?crop=1800px:1375px&quality=60' alt="background-img" />
      <h1 className="tittle-one"> Let the journey begin</h1>
      <div className='container'>
        <div className='columns'>
          <form 
            className='className="tittle-one"'
            onSubmit={handleSubmit}
          >
            <div className='field'>
              <div className='control'>
                <input
                  className={`input ${formErrors.origin ?
                    'is-danger' : '' }`}
                  placeholder='Origin (city or airport)'
                  name='origin'
                  onChange={handleChange}
                  value={formData.origin}
                />
              </div>
              {formErrors.origin && <p className='help is-danger'>
                {formErrors.origin}
              </p>}
            </div>
            <div className='field'>
              <div className='control'>
                <input 
                  className={`input ${formErrors.destination ? 
                    'is-danger' : '' }`}
                  placeholder='Destination (city or airport)'
                  name='destination'
                  onChange={handleChange}
                  value={formData.destination}
                />
              </div>
              {formErrors.destination && <p className='help is-danger'>
                {formErrors.destination}
              </p>}
            </div>
            <div className='field'>
              <div className='control'>
                <input 
                  className={`input ${formErrors.departing_date ? 
                    'is-danger' : '' }`}
                  placeholder='Departure Date'
                  name='departing_date'
                  onChange={handleChange}
                  value={formData.departing_date}
                />
              </div>
              {formErrors.departing_date && <p className='help is-danger'>
                {formErrors.departing_date}
              </p>}
            </div>
            <div className='field'>
              <div className='control'>
                <input 
                  className={`input ${formErrors.return_date ? 
                    'is-danger' : '' }`}
                  placeholder='Return Date'
                  name='return_date'
                  onChange={handleChange}
                  value={formData.return_date}
                />
              </div>
              {formErrors.return_date && <p className='help is-danger'>
                {formErrors.return_date}
              </p>}
            </div>
            <div className='field'>
              <div className='control'>
                <input 
                  className={`input ${formErrors.passangers ? 
                    'is-danger' : '' }`}
                  placeholder='# of Passangers'
                  name='passangers'
                  onChange={handleChange}
                  value={formData.passangers}
                />
              </div>
              {formErrors.passangers && <p className='help is-danger'>
                {formErrors.passangers}
              </p>}
            </div>
            <div className='field'>
              <button type='submit' className='button is-dark is-fullwidth'>
                <Link to='/flights'>Search Flights</Link>
              </button> 
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default HomePage