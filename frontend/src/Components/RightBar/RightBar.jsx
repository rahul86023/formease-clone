import React from 'react'
import './RightBar.css'
function RightBar({data}) {
  return (
    <div className='right-bar-component'>
       {data.map((item)=>(
             
             <div className='ExamComponent'>
              <div className="Exam_name_logo">
                 <img className='Logo' src={{ }} />
 
 
                 <div className="Exam_name">
                      {item.examName}
                      <p className="exam">
                         {item.examTagLine}
                      </p>
                 </div>
                 
             </div>
             <hr></hr>
             <div className='no_of_students_price'>
                     <div className="number_of_students_appeared">
                          {item.numberOfStudents}
                     </div>
                     <div className="price">
                          {item.examFees}
                     </div>
                 </div>
             </div>
         ))}
         
    </div>
  )
}

export default RightBar