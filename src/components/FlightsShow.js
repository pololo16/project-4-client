import React from 'react'
import { getAllFlights } from '../lib/api'
import { useLocation } from 'react-router-dom'

function FlightShow() {

  const location = useLocation()
  const [flights, setFlights] = React.useState(location?.state.filteredFlights)

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await getAllFlights()
  //       setFlights(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
      
  //   }
  //   getData()
  // }, [])
  
  console.log('flights', flights )

  return (
    
  // flights.map(flight => <p key={flight.id}> ({flight.flightNumber}) {flight.originAirport} to {flight.destinationAirport}  </p>)
    <div className='flights-show'>
      {flights && flights.map(filteredFlight => (
        <div className="card" key={filteredFlight.id}>
          <div className="card-content">
            <div className='content'>
              <div className='columns is-mobile'>
                <div className='column is-12'>
                  {filteredFlight.airline}
                </div>
              </div>
              <div className='columns is-mobile'>
                <div className='column is-4 has-text-right'>
                  {filteredFlight.departingTime} at 
                  <br/>
                  {filteredFlight.originCiti} 
                </div>
                <div className='column is-4 has-text-centered'>
                  {filteredFlight.arrivalTime - filteredFlight.departingTime}
                </div>
                <div className='column is-4'>
                  {filteredFlight.arrivalTime} at
                  <br/>
                  {filteredFlight.destinationCiti}  
                </div>
              </div>
              <hr/>
              <div className='columns is-mobile'>
                <div className='column is-6 has-text-centered'>
                  <h2>£{filteredFlight.price}</h2>
                </div>
                <div className='column is-6 has-text-centered'>
                  <a className="button is-primary">
                    Select ->
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

} 


export default FlightShow