// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, duration, tagsList} = courseData

  return (
    <div>
      <div className="card-details-container">
        <h1 className="heading">{courseTitle}</h1>
        <div className="icon-details">
          <AiFillClockCircle />
          <p className="icon-para">{duration}</p>
        </div>
      </div>
      <p className="para">{description}</p>
      <ul className="card-list-content">
        {tagsList.map(tag => (
          <p className="card-item" key={tag.id}>
            {tag.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
