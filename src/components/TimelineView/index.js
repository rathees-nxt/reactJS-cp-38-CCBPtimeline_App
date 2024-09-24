// Write your code here
import {Chrono} from 'react-chrono'
import './index.css'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectData={item} />
    }
    return <CourseTimelineCard key={item.id} courseData={item} />
  }

  return (
    <div className="app-container">
      <div className="journey-container">
        <h1 className="heading">
          MY JOURNEY OF
          <br /> CCBP 4.0
        </h1>
        <Chrono
          theme={{titleColor: 'black', titleColorActive: '#0967d2'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
