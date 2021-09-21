const Header = ({ setSearchTerm }) => {

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        setSearchTerm(event.target[0].value);
    }

    return(
        <header className="wrapper">
            <h1>Not MySpace</h1>
            <p>Search Anything Spacey!</p>
            <form action="submit" onSubmit={(event) => {handleSearch(event)}}>
                <label htmlFor="search"></label>
                <input type="text" name="search" id="search" className="search" placeholder="search" />
                <input type="submit" />
            </form>
        </header>
    )
}

export default Header;