import React, {useState,useEffect } from 'react';
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState('React');
    const [resutls, setResults] = useState([]);

    console.log(resutls);
// useEffect will not accespt the async method dirctly. so create that inside method.
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }
        if (term && !resutls.length) { 
            search();
        } else {
             const timeoutId = setTimeout(() => {
            if (term) {
                search();
            }
            
             }, 1000);
            
            return () => { clearTimeout(timeoutId); };
            
        }   
             
       
    }, [term]);

    const renderedResults = resutls.map(result => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                
                </div>
            </div>
        );
    })
   
    return (
        <div className="ui form">
            <div className="field">
                <label>Search</label>
                <input value={term} onChange={e=> setTerm(e.target.value)} className="input"/>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}
export default Search;