// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachItemDetails} = props
  const {
    id,
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = eachItemDetails
  return (
    <li className="each-repo-card">
      <img className="repo-img" alt={name} src={avatarUrl} />
      <h1 className="repo-name">{name}</h1>
      <div className="count-container">
        <img
          className="count-img"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p className="count">{starsCount}</p>
      </div>
      <div className="count-container">
        <img
          className="count-img"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        />
        <p className="count">{forksCount}</p>
      </div>
      <div className="count-container">
        <img
          className="count-img"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        />
        <p className="count">{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
