import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {userInput: '', isButtonClick: false}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClick: !prevState.isButtonClick}))
  }

  render() {
    const {userInput, isButtonClick} = this.state
    const buttonText = isButtonClick ? 'Edit' : 'Save'
    return (
      <div className="editable-container">
        <div className="editable-text-container-card">
          <h1 className="heading">Editable Text Input</h1>
          {isButtonClick ? (
            <div className="user-input-save-container">
              <p className="user-input-text">{userInput}</p>
              <button
                type="button"
                className="button-text"
                onClick={this.onClickButton}
              >
                {buttonText}
              </button>
            </div>
          ) : (
            <div className="input-container">
              <input
                type="text"
                className="input-box"
                onChange={this.onChangeUserInput}
                value={userInput}
              />
              <button
                type="button"
                className="button-text"
                onClick={this.onClickButton}
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
