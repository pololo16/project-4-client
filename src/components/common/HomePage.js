import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-date-picker'

import useForm from '../../hooks/useForm'
import { getAllFlights } from '../../lib/api'

function HomePage() {

  const { formData, formErrors, handleChange, setFormErrors, setFormData } = useForm({
    origin: '',
    destination: '',
    departing_date: '',
    return_date: '',
    passangers: '',
  })
  
  const [flights, setFlights] = React.useState(null)
  const [originSearchTerm, setOriginSearchTerm] = React.useState('')
  const [destinationSearchTerm, setDestinationSearchTerm] = React.useState('')
  const filteredFlights = flights?.filter(flight => flight.originCiti.toLowerCase() === originSearchTerm.toLowerCase() && flight.destinationCiti.toLowerCase() === destinationSearchTerm.toLowerCase())
  const [departingValue, onChange] = React.useState(new Date())
  const [arrivalValue, onChangeArrival] = React.useState(new Date())


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllFlights()
        setFlights(res.data)
      } catch (err) {
        console.log(err)
      }
      
    }
    getData()
  }, [])

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
    try {
      console.log('submitting')
      console.log(formData)
    } catch (error) {
      console.log(error)
    }
  }

  // const filterRoots = (e) => { 
  //   const results = flights.filter(flight => { 
  //     return (
  //       flight.originCiti.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       flight.destinationCiti.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   })
  //   setFilteredFlights(results)
  // }

  const handleSearch = event => {
    setOriginSearchTerm(event.target.value)
    
  }

  const handleDestinationSearch = event => {
    setDestinationSearchTerm(event.target.value)

  }
  

  console.log('outside', originSearchTerm)
  console.log('outside', destinationSearchTerm)
  console.log('outside', filteredFlights)

  return (
    
    <section className='section home'>
      <div className="bg-image">
        <h1 className="tittle-one"> Let the journey begin</h1>
        <div className='container'>
          <form 
            className='form columns'
            onSubmit={handleSubmit}
          >
            <div className='field column is-2'>
              <div className='control'>
                <input
                  className={`input ${formErrors.origin ?
                    'is-danger' : '' }`}
                  placeholder='Origin (city or airport)'
                  name='origin'
                  onChange={handleSearch}
                  // value={formData.origin}
                  value={originSearchTerm}
                />
              </div>
              {formErrors.origin && <p className='help is-danger'>
                {formErrors.origin}
              </p>}
            </div>
            <div className='field column is-2'>
              <div className='control'>
                <input 
                  className={`input ${formErrors.destination ? 
                    'is-danger' : '' }`}
                  placeholder='Destination (city or airport)'
                  name='destination'
                  onChange={handleDestinationSearch}
                  value={destinationSearchTerm}
                />
              </div>
              {formErrors.destination && <p className='help is-danger'>
                {formErrors.destination}
              </p>}
            </div>
            <div className='field column is-2'>
              <div className='control'>
                {/* <input 
                  className={`input ${formErrors.departing_date ? 
                    'is-danger' : '' }`}
                  placeholder='Departure Date'
                  name='departing_date'
                  onChange={handleChange}
                  value={formData.departing_date}
                /> */}
                <DatePicker 
                  onChange={onChange}
                  value={departingValue}
                />
              </div>
              {formErrors.departing_date && <p className='help is-danger'>
                {formErrors.departing_date}
              </p>}
            </div>
            <div className='field column is-2'>
              <div className='control'>
                <DatePicker 
                  onChange={onChangeArrival}
                  value={arrivalValue}
                />
                {/* <input 
                  className={`input ${formErrors.return_date ? 
                    'is-danger' : '' }`}
                  placeholder='Return Date'
                  name='return_date'
                  onChange={handleChange}
                  value={formData.return_date}
                /> */}
              </div>
              {formErrors.return_date && <p className='help is-danger'>
                {formErrors.return_date}
              </p>}
            </div>
            <div className='field column is-2'>
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
            <div className='field column is-2'>
              <button type='submit' className='button is-dark is-fullwidth'>
                <Link to={ { pathname: '/flights', state: { filteredFlights } } }>Search Flights</Link>
              </button> 
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default HomePage