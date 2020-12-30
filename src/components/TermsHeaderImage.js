import React, { Component } from 'react'


export default class TermsHeaderImage extends Component {
  render() {
    return (
          <div className="absolute top-0 w-full h-full bg-cover bg-fixed mx-auto" style={{backgroundImage:
                "url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')",}}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
    )
  }
}
