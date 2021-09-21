const Header = ({ setSearchTerm }) => {

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        setSearchTerm(event.target[0].value);
    }

    return(
        <header className="wrapper">
            <h1>Not MySpace</h1>
            <p className="slogan">Search Anything Spacey!</p>
            <form action="submit" onSubmit={(event) => {handleSearch(event)}}>
                <label htmlFor="search"></label>
                <input type="text" name="search" id="search" className="search" placeholder="Search" />
                <button type="submit" className="searchButton">Search</button>
            </form>
        </header>
    )
}

export default Header;