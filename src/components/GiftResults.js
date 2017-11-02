import React from 'react';

const GiftResults = ({title, data}) => {
  let rendered = data.map((each, index) => {
    return (
      <div key={index}>
        <h5>{each.name}</h5>
        <p>{each.description}</p>
        <p><i><small>Verses: {each.verses.map((verse) => { return verse + "; "})}</small></i></p>
      </div>
    )
  })
  
  return (
    <div>
      <h3>{title}</h3>
      {rendered}
    </div>
  )
}

export default GiftResults;