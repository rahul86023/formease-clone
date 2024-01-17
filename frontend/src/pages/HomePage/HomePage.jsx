
import ExamComponent from '../../Components/ExamComponent/ExamComponent'
import { RecommendExam } from '../../data/recommendExamsData'
import { RecentExam } from '../../data/recentExamsData'

import ImageSlider from '../../Components/ImageSlider/ImageSlider'

function HomePage(){
    return (
        <>
        <ImageSlider/>
      <h2 class="container">Recommended Exams</h2>
      <ExamComponent data={RecommendExam}/>
      <h2 class="container">Recent Exams</h2>
      <ExamComponent data={RecentExam}/>

     
        </>
    )
}
export default HomePage;