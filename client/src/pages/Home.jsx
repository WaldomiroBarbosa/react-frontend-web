import React, { useState } from 'react'

import SearchBox from './SearchBox'
import SearchResultList from './SearchResultList'

function Home ()
{
    const [results, setResults] = useState([])

    

    return (
        <div className='search-bar-container'>
            <SearchBox setResults = {setResults}/>
            <SearchResultList results = {results}/>
        </div>
    )
}

export default Home