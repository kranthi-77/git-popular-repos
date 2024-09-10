// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {clickTabItem, isActive, eachLangDetails} = props
  const {id, language} = eachLangDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
