
import ExamComponent from '../../Components/ExamComponent/ExamComponent'
import { RecommendExam } from '../../data/recommendExamsData'
import { RecentExam } from '../../data/recentExamsData'

import ImageSlider from '../../Components/ImageSlider/ImageSlider'

function HomePage(){
    return (
        <>
        <ImageSlider/>
      <h1>Recommended Exams</h1>
      <ExamComponent data={RecommendExam}/>
      <h1>Recent Exams</h1>
      <ExamComponent data={RecentExam}/>

     
        </>
    )
}
export default HomePage;