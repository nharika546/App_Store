import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {appId, appName, imageUrl} = projectDetails
  return (
    <div>
      <li className="project-item-container">
        <img className="project-item-image" src={imageUrl} alt={appName} />
        <p className="project-item-description">{appName}</p>
      </li>
    </div>
  )
}

export default ProjectItem
