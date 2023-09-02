import { useState } from "react";
import Loader from "../../components/Loader"
import Comic from "../../components/Comic"

function Search() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchComic, setSearchComic] = useState(null)

  const [searchValue, setSearchValue] = useState('')
  const [searchError, setSearchError] = useState(null)
  const submitSearch = (e) => {
    e.preventDefault()
    setSearchError(null)
    if (searchValue == '') {
      setSearchError('You must enter a comic number to search.')
    } else if(Number.isNaN(parseInt(searchValue)) || parseInt(searchValue) < 0 || parseInt(searchValue) > 2821) {
      setSearchError('Search must be a number between 1 and 2821')
    } else {
      setIsSearching(true)
      fetch('https://xkcd.now.sh/?comic=' + searchValue).then(response => response.json()).then(data => {
        setIsSearching(false)
        setSearchComic(data)
      })
    }
  }
  return (
    <>
      <form onSubmit={submitSearch} className="search-form">
        <input type="search" className="form-input" value={searchValue} placeholder="Search for a comic by number." onChange={(e) => setSearchValue(e.target.value)} />
        <button type="submit" className="form-submit">Search</button>
        {searchError && <span className="form-error">{searchError}</span>}
      </form>
      <div className="search-results">{isSearching ? <Loader /> : (searchComic && <Comic comic={searchComic} />)}</div>
    </>
  )
}

export default Search
