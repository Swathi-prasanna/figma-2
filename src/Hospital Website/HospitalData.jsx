import React from 'react'
import { MdOutlineBed } from "react-icons/md";

const HospitalData = () => {
  return (
    <section className='hospital-data'>
        <div className='hero-cards'>
            <div className="row">
                <div className="beds-data col-lg-3">
                    <MdOutlineBed />
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default HospitalData