import React from 'react'

const PatientCare = () => {
  return (
<section className='patientcare-section mt-5'>
    <div className="row gap-2">
        <div className="bed-card col-lg-5">
           <div className="bed-inner-content">
              <p className='bed-inner-data'>Bed Status by Ward</p>
           </div>
           <div className="card-details">
            <div className="icu-content">
               <div className="icu-inner-content">
                   <p className="icu-inner-data1">ICU</p>
                   <p className="icu-inner-data2">Intensive Care Unit</p>
               </div>
               <div className="icu-inner-content1">
                <div className="icu-inner-content2">
                    <p className='icu-inner-data3'>2 / 3 occupied</p>
                    <p className='icu-inner-data4'>67% occupancy</p>
                </div>
                <div className="icu-inner-content3 mt-3">
                    <span className='icu-inner-data5'>High</span>
                </div>
               </div>
            </div>
            <div className="wardA-content">
               <div className="wardA-inner-content">
                   <p className="wardA-inner-data1">General Ward A</p>
                   <p className="wardA-inner-data2">General medical ward</p>
               </div>
               <div className="wardA-inner-content1">
                <div className="wardA-inner-content2">
                    <p className='wardA-inner-data3'>2 / 2 occupied</p>
                    <p className='wardA-inner-data4'>100% occupancy</p>
                </div>
                <div className="wardA-inner-content3 mt-3">
                    <span className='wardA-inner-data5'>Full</span>
                </div>
               </div>
            </div>
           </div>
        </div>
        <div className="upcomingtask-card col-lg-5">

        </div>
    </div>
</section>  )
}

export default PatientCare