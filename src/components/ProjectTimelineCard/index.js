// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectData

  return (
    <div className="card-container">
      <img className="project-img" src={imageUrl} alt="project" />
      <div className="card-details-container">
        <h1 className="heading">{projectTitle}</h1>
        <div className="icon-details">
          <AiFillCalendar />
          <p className="icon-para">{duration}</p>
        </div>
      </div>
      <p className="para">{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
