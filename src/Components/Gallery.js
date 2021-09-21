import { useState, useEffect } from "react";
import Button from "./Button";
import NoResults from "./NoResults";
import Loading from "./Loading";

const Gallery = ({searchQuery}) => {
    const [searchTerm, setSearchTerm] = useState("sun");
    const [results, setResults] = useState([]);
    const [likesList, setLikesList] = useState(localStorage.list ? JSON.parse(localStorage.list) : []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setSearchTerm(searchQuery)
    }, [searchQuery]);

    useEffect(() => {
        setLoading(true);
        const url = new URL("https://images-api.nasa.gov/search");
        url.search = new URLSearchParams({
            q: searchTerm,
            media_type: "image"
        });

        fetch(url).then((rawData) => {
            return rawData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            console.log(jsonData.collection.items)
            setResults(jsonData.collection.items)
            setLoading(false);
        })
    }, [searchTerm])

    return (
        loading ? <Loading />
        : results.length !== 0
        ? <main className="wrapper">
            <ul className="gallery">
                {
                    results.map((result) => {
                        return (
                            <li key={result.data[0].nasa_id} className="galleryItem">
                                <p>Title: {result.data[0].title}</p>
                                <div className="imageContainer">
                                    <img src={result.links[0].href} alt={`A photograph titled ${result.data[0].title}`} />
                                </div>
                                <div className="textContainer">
                                    <p>Description: {result.data[0].description}</p>
                                    <p>Date: {result.data[0].date_created.slice(0, 10)}</p>
                                </div>
                                <Button 
                                    result={result.data[0].nasa_id}
                                    likesList={likesList}
                                    setLikesList={setLikesList}
                                    />
                            </li>
                        )
                    })
                }
            </ul>
        </main>

        : <NoResults />
    );
}

export default Gallery