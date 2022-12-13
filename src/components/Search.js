import "./search.css"

const Search = () => {
  return(
    <div className="container">
      <form className="form" method="POST">
    <input className="form__input" type="text" name="your__text" placeholder="Search for a country…" />
    <select className="form__select" defaultValue={"DEFAULT"}>
    <option disabled value="DEFAULT">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    </form>
    </div>
  )
}

export default Search;