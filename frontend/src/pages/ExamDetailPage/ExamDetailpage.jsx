import React from 'react'
import LeftBarfirst from '../../Components/Leftbar/LeftBarfirst'
import LeftBarSecond from '../../Components/Leftbar/LeftBarSecond'
import RightBar from '../../Components/RightBar/RightBar'
import './ExamDetailpage.css';
function ExamDetailpage({data1,data2}) {
  return (
    <div className='ExamDetailContainer'>
        <div className='left-bar'>
            <div className='component-left-bar-first'>
                 <LeftBarfirst data={data1}/>
            </div>
            <div className='component-left-bar-second'>
                 <LeftBarSecond data={data1}/>
            </div>
        </div>
        <div className='right-bar'>
            <RightBar data={data2} />
        </div>
    </div>
  )
}

export default ExamDetailpage