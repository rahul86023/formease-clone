import React from 'react';
import { Link } from 'react-router-dom';
import { RecommendExam } from '../../data/recommendExamsData';
import { RecentExam } from '../../data/recentExamsData';
import ExamDetails from '../../Components/ExamDetails/ExamDetails';
import RightBar from '../../Components/RightBar/RightBar';
import './ExamDetailpage.css';

function ExamDetailpage() {
  return (
    
    <div className='ExamDetailContainer'>
              {/* Adding a "Back" link */}
              <Link to="/" className="back-link">
          Back
        </Link>
      <div className='left-bar'>
        <ExamDetails data={RecommendExam} />
        <ExamDetails data={RecentExam} />
      </div>
      <div className='right-bar'>
        <RightBar data={RecommendExam} />
      </div>
    </div>
  );
}

export default ExamDetailpage;
