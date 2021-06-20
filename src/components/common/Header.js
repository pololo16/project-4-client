function Header() {
  return (
    <section className="hero is-small header-style has-text-centered"> 
      <div className="hero-head">
        <img className="logo-on-header" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg/1280px-Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg.png' alt="Logo" />
        <button className="covid-button" >COVID-19 insurance</button>
        <button>English (UK) 🇬🇧 United Kigndom £ GBP</button>
        <button>Log In</button>
      </div>
      <div>
        <button>🛩 Flight</button>
        <button>🏨 Hotels</button>
        <button>🚗 Car Hire</button>
      </div>
    </section>
  )
  
}
export default Header