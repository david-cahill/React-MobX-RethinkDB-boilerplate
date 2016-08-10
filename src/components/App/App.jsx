import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class App extends Component {

  render() {
    const { appState } = this.props
    return (
      <div>
        <button onClick={ () => appState.setName('David') }>Set Name</button>
        <p>{ appState.name }</p>
      </div>
    )
  }
}
