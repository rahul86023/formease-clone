


import React from 'react'

import Tags from '../tags/tags'
import './ExamComponent.css'

function ExamComponent({data}) {
  return (
    <div className='container'>
        {data.map((item)=>(
            <div className='ExamComponent'>
             <div className="Exam_name_logo">
                <img className='Logo' src={{ }} />


                <div className="Exam_name">
                     {item.examName}
                     <p className="examtagline">
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
            <div className="tags">
                <Tags keywords={item.keywords}/>
            </div>
            </div>
        ))}
        
    </div>
  )
}

export default ExamComponent