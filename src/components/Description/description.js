import React from 'react'
import './description.css';
import photo from './Amine.jpg';
const Description = props =>{
    const StyleObject = { color:"black", textAlign:'center', fontSize:'xxl'}
    return (  
    <div className="description">
 
    <p  className="texte" style={StyleObject}>  Hello, my name is  {props.name},
    <br/>
     and i still struggle with this webdevelopment science.</p>    
    <img  className="image" width='250' src= {photo} />
    
    </div>
    
   
    )
}

export default Description;
