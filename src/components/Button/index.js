import './index.css'

const Button = props => {
  const {activeLang, each, setLang} = props
  const styleBtn = each.id === activeLang ? 'lang-button-active' : 'lang-button'

  const updateActiveBtn = () => {
    setLang(each.id)
  }

  return (
    <li>
      <button type="button" className={styleBtn} onClick={updateActiveBtn}>
        {each.buttonText}
      </button>
    </li>
  )
}

export default Button
