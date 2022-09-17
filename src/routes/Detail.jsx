import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState("");
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then(res => res.json())
            .then(json => setDetail(json.data.movie.description_full)
            );
    }, [])
    return (
        <div>
            <h2>Detail</h2>
            <p>{detail}</p>

            <p>
                <Link to="/">back</Link>
            </p>
        </div>
    );
};

export default Detail;