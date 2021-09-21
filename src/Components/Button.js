const Button = ({result, likesList, setLikesList}) => {

    const handleClick = (event) => {
        event.preventDefault();
        if (likesList.includes(result)) {
            const pseudoList = [...likesList];
            const filterSaved = pseudoList.filter((item) => {
                return item !== result
            })

            localStorage.setItem('list', JSON.stringify(filterSaved));
            setLikesList(filterSaved);
            console.log('IN STORAGE');

        } else {
            const pseudoList = [...likesList];
            pseudoList.push(result);
            localStorage.setItem('list', JSON.stringify(pseudoList));
            setLikesList(pseudoList);
            console.log('GOING TO STORAGE')
        }
    }

    return(
        likesList.includes(result)
        ? <button onClick={handleClick} className={result} aria-label="Like button" style={{color: "red"}}> ❤ </button>
        : <button onClick={handleClick} className={result} aria-label="Like button" style={{color: "black"}}> ❤ </button>
    )
}

export default Button;