import React, { Component } from 'react'

export class NewsItems extends Component {

   


  render() {
   

    let {title , description, imageUrl,newsUrl,author,date,source} =this.props;

  

    return (
      <div className='container my-3'>
      
      
      <div className="card" >

      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>


      <img src={!imageUrl?"https://plus.unsplash.com/premium_photo-1661776251302-0ef9c4750ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60":imageUrl} className="card-img-top" alt="..."  style={{maxHeight:'140px'}}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="carrd-text"><small className='text-muted'>By {author?author:"Unknown"} on{new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
      </div>
    </div>
      {/* buttons */}
    
   
 
      </div>
    )
  }
}

export default NewsItems