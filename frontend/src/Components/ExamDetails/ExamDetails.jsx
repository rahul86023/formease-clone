import React from "react";
import './ExamDetails.css';
import { useParams } from "react-router-dom";

function ExamDetails({ data }) {
  const { id } = useParams();
  const selectedExam = data.find(item => item.id === id);



 

  return (
    <>
   {selectedExam!==undefined&&<div>
      <div className='left-bar-first'>
        <div className='ExamComponent'>
          <div className="Exam_name_logo">
            <img className='Logo' src={selectedExam.logo} alt="Exam Logo" />
            <div className="Exam_name">
              {selectedExam.examName}
              <p className="exam">
                {selectedExam.examTagLine}
              </p>
            </div>
          </div>
          <hr></hr>
          <div className='no_of_students_price'>
            <div className="number_of_students_appeared">
              {selectedExam.numberOfStudents}
            </div>
            <div className="price">
              {selectedExam.examFees}
            </div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
      <div className='ExamDescription container'>
        <div className='Description'>
          <h1>Exam Description</h1>
          <div className='ExamPoints'>
            <ul>
              {selectedExam.examDescription.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='eligibility'>
          <h1>Eligibility</h1>
          <div className='ExamPoints'>
            <ul>
              {selectedExam.examDetails.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='importantdetails'>
          <h1>Important Details</h1>
          <div className='ExamPoints'>
            <ul>
              {selectedExam.importantDetails.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>}
    </>
  );
}

export default ExamDetails;


