import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mount } from 'enzyme'

it('renders the app without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
