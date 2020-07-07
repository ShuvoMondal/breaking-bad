import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [text, setText] = useState('')
    
    const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }


    return (
        <section className="search">
            <from>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => onChange(e.target.value)} 
                    className="from-control" 
                    placeholder="Search Charaters" 
                    autoFocus/>
            </from>
        </section>
    )
}

export default Search
