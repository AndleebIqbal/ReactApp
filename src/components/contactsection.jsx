import React from 'react'
import userform from './userform'

function contactsection() {
  return (
    <div className='container'>
        <h2 className="text-center mt-5 mb-1">Contact Us</h2>
        <h5 className="text-center mb-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum nulla sequi porro molestiae iusto cum eaque. Aut totam, voluptatem iusto, odio quos mollitia dolores exercitationem, asperiores blanditiis alias harum.</h5>
        <div className="row">
            <div className="col-md-3">
                <img className="img-fluid" src="./https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Doffice%2Bgirl&psig=AOvVaw0hHY-qZgdUl9B4swyi4G7L&ust=1687762169049000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKCixpbq3f8CFQAAAAAdAAAAABAE" alt="" srcset="" />
            </div>

            <div className="col-md-3"><userform/></div>
        </div>
        
    </div>
  )
}

export default contactsection
