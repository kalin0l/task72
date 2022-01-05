import React from 'react'


const Tags = ({tags}) => {
    console.log(tags);
    return (
        <>
        <div className='tags'>
            {tags.map((tag,i) => {
                return <span className='tag' key={i}>#{tag}</span>
            })}
           
        </div>
        </>
    )

}

export default Tags;