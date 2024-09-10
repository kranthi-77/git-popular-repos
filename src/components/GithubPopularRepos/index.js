import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    isLoading: false,
    isOk: true,
    repoList: [],
  }

  componentDidMount() {
    this.getFilterRepos()
  }

  clickTabItem = val => {
    this.setState({activeId: val}, this.getFilterRepos)
  }

  getFilterRepos = async () => {
    this.setState({
      isLoading: true,
    })
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(url)
    if (response.ok) {
      this.setState({isOk: true})
      const data = await response.json()
      const updatedData = data.popular_repos.map(eachRepo => ({
        name: eachRepo.name,
        id: eachRepo.id,
        issuesCount: eachRepo.issues_count,
        forksCount: eachRepo.forks_count,
        starsCount: eachRepo.stars_count,
        avatarUrl: eachRepo.avatar_url,
      }))
      this.setState({isLoading: false, repoList: updatedData})
    } else {
      this.setState({isLoading: false, isOk: false})
    }
  }

  render() {
    const {isOk, activeId, isLoading, repoList} = this.state
    return (
      <div className="main-card">
        <h1 className="main-heading">Popular</h1>
        <ul className="lang-list">
          {languageFiltersData.map(eachLang => (
            <LanguageFilterItem
              key={eachLang.id}
              clickTabItem={this.clickTabItem}
              isActive={activeId === languageFiltersData.id}
              eachLangDetails={eachLang}
            />
          ))}
        </ul>
        {isLoading && (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}
        {isOk ? (
          <ul className="repo-card">
            {repoList.map(eachItem => (
              <RepositoryItem key={eachItem.id} eachItemDetails={eachItem} />
            ))}
          </ul>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
