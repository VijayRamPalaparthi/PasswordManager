import './App.css'
import {v4 as uuid} from 'uuid'
import {Component} from 'react'
import PasswordItem from './component/PasswordItem'

class App extends Component {
  state = {
    passwordList: [],
    websiteName: '',
    username: '',
    password: '',
    showPassword: false,
    searchInput: '',
  }

  onWebsiteInput = event => {
    this.setState({websiteName: event.target.value})
  }

  onUserInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {websiteName, username, password} = this.state

    const newObject = {
      id: uuid(),
      web: websiteName,
      user: username,
      password,
    }
    this.setState(prev => ({
      passwordList: [...prev.passwordList, newObject],
      websiteName: '',
      username: '',
      password: '',
    }))
  }

  onCheckbox = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onDeletePassword = Id => {
    const {passwordList} = this.state
    const filtered = passwordList.filter(each => each.id !== Id)
    this.setState({passwordList: filtered})
  }

  render() {
    const {
      passwordList,
      websiteName,
      username,
      password,
      showPassword,
      searchInput,
    } = this.state

    const resultList = passwordList.filter(each =>
      each.web.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const noOfPasswords = resultList.length
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-image"
        />
        <div className="top-card-container">
          <form className="inputs-card-container" onSubmit={this.formSubmit}>
            <h1 className="heading"> Add New Password </h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="image"
                alt="website"
              />
              <input
                className="inputs"
                type="text"
                placeholder="Enter website"
                onChange={this.onWebsiteInput}
                value={websiteName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="image"
                alt="username"
              />
              <input
                className="inputs"
                type="text"
                placeholder="Enter Username"
                onChange={this.onUserInput}
                value={username}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="image"
                alt="password"
              />
              <input
                className="inputs"
                type="password"
                placeholder="Enter Password"
                onChange={this.onPasswordInput}
                value={password}
              />
            </div>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="bg-image" />
        </div>
        <div className="bottom-card-container">
          <div className="passwords-count-container">
            <h1 className="heading">
              Your Passwords <p className="count">{noOfPasswords}</p>
            </h1>
            <div className="password-search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="image"
                alt="search"
              />
              <input
                type="search"
                className="inputs1"
                placeholder="search"
                onChange={this.onSearchInput}
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="check"
              className="box"
              onChange={this.onCheckbox}
            />
            <label className="heading2" htmlFor="check">
              Show passwords
            </label>
          </div>
          {noOfPasswords > 0 ? (
            <ul className="passwords-list-container">
              {resultList.map(each => (
                <PasswordItem
                  eachObject={each}
                  key={each.id}
                  showPassword={showPassword}
                  onDeletePassword={this.onDeletePassword}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                className="b-card-image"
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p className="heading">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default App
