import React from 'react'
import Productcards from './Productcards'
import {FaCandyCane} from "react-icons/fa"

function productsection() {
  return (
    <>
    
    
    
    <div className="container" my-5>
        <h2 className='text-center my-5'>{props.sectionTitle}<FaCandyCane/></h2>
        <div className="row">
            <Productcards brandName="Cadbury"/>
            <Productcards brandName="Dairy Diaries"/>
            
        </div>
    </div>
    </>
  )
}

export default productsection
