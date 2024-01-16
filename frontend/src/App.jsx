import { useState } from 'react'
import ExamComponent from './Components/ExamComponent/ExamComponent'
import { RecommendExam } from './data/recommendExamsData'
import { RecentExam } from './data/recentExamsData'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ImageSlider from './Components/ImageSlider/ImageSlider'

function App() {
  
  return (
  <>
     <Header/>
     <ImageSlider/>
     <h1>Recommended Exams</h1>
    <ExamComponent data={RecommendExam}/>
    <h1>Recent Exams</h1>
    <ExamComponent data={RecentExam}/>
    <Footer/>
  </>
    
  )
}

export default App
