import React from 'react'
import { getAllFlights } from '../lib/api'

function FlightShow() {
  const [flights, setFlights] = React.useState(null)

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
  
  console.log('flights', flights )

  return (
    
  // flights.map(flight => <p key={flight.id}> ({flight.flightNumber}) {flight.originAirport} to {flight.destinationAirport}  </p>)
    <div>
      {flights && flights.filter(flight => flight.originCiti === 'Italia').map(filteredFlight => (
        <li key={filteredFlight.id}>
          {filteredFlight.flightNumber} 
          {filteredFlight.originCiti} to {filteredFlight.destinationCiti}
        </li>
      ))}
    </div>
  )

} 


export default FlightShow