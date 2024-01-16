import React from 'react'

function LeftBarSecond({data}) {
  return (
    <div className='ExamDescription container'>
         {
            data.map((item)=>(
              <>
                <div className='Description'>
                   <h1>Exam Description</h1>
                   {
                     <div className='ExamPoints'>
                        <ul>
                            <li>
            
                            </li>
                        </ul>
                    </div>
                   }
                </div>
                <div className='eligibility'>
                   <h1>Eligibility</h1>
                   {
                     <div className='ExamPoints'>
                          <ul>
                              <li>
              
                              </li>
                          </ul>
                    </div>
                   }
                </div>
                <div className='importantdetails'>
                     <h1>
                       Important Details
                     </h1>
                </div>
              </>
                  
            ))
         }
         </div>
  )
}

export default LeftBarSecond