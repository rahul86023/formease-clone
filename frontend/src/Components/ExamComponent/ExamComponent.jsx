import React from 'react';
import { Link } from 'react-router-dom';
import Tags from '../tags/tags';
import './ExamComponent.css';

function ExamComponent({ data }) {

  return (
    <div className='container'>
      {data.map((item) => (
        <div className='ExamComponent' key={item.id}>
          <div className="Exam_name_logo">
            <img className='Logo' src={{ /* your logo source here */ }} />

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
            <Tags keywords={item.keywords} />
          </div>

          {/* "View Details" Link */}
          <Link to={`/exam-details/${item.id}`} className="view-details-link">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ExamComponent;
