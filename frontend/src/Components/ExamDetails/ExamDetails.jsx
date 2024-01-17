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
            <img className='Logo' src={selectedExam.imagename} alt="Exam Logo" />
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg><span>  {selectedExam.numberOfStudents}</span>
              
            </div>
            <div className="price">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>
                         <span>  {selectedExam.examFees}</span>
              
            </div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
      <div className='ExamDescription-container'>
        <div className='Description'>
          <h2>Exam Description</h2>
          <div className='ExamPoints'>
            <ul>
              {selectedExam.examDescription.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='eligibility'>
          <h2>Eligibility</h2>
          <div className='ExamPoints'>
            <ul>
              {selectedExam.examDetails.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='importantdetails'>
          <h2>Important Details</h2>
          <div className='ExamPoints'>
            <ul>
              {selectedExam.importantDetails.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
      }
    </>
  );
}

export default ExamDetails;