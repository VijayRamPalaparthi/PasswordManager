import './index.css'

const PasswordItem = props => {
  const {eachObject, showPassword, onDeletePassword} = props
  const {web, user, password, id} = eachObject
  const firstLetter = user[0]

  const deletePass = () => {
    onDeletePassword(id)
  }

  return (
    <li className="each-list-password">
      <div className="profile">
        <p className="first-latter">{firstLetter}</p>
      </div>
      <div className="list-details-container">
        <p className="about">{web}</p>
        <p className="about">{user}</p>
        {showPassword ? (
          <p className="about">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button className="dlt-button" onClick={deletePass} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
