import React from 'react'


const Collections = (props) => {
  const{title,image1,image2,image3,image4,image5,image6} = props.GentsFanshion
  return (
   
    <div className="collectionSection">
       <h1>{title}</h1>
        <div className="collectionBox">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
        </div>
    </div>
  )
}

export default Collections