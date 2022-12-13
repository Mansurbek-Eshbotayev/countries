import "./header.css"

const Header = ()=> {
  return(
    <header className="header">
      <div className="container">
      <div className="header__inner">
      <h1 className="header__title">Where in the world?</h1>
      <button className="header__btn">Dark Mode</button>
      </div>
      </div>
    </header>
  )
}

export default Header