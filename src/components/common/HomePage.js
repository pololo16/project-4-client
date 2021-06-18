function HomePage() {
  return (
    <div className="first-section">
      <img className="homepage-img" src='https://content.skyscnr.com/m/785bdfcbe683606c/Large-Flights-hero-2.jpg?crop=1800px:1375px&quality=60' alt="background-img" />
      <h1 className="tittle-one"> Let the journey begin</h1>
      <div className="form">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    
  )
  
}
  
export default HomePage