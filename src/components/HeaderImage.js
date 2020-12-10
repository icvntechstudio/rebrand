import React, { Component } from 'react'


export default class HeaderImage extends Component {
  render() {
    return (
      <div className="absolute top-0 w-full h-full bg-cover bg-fixed mx-auto" style={{backgroundImage: "url('https://images.unsplash.com/photo-1605648916319-cf082f7524a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",}}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black">
        </span>
      </div>
    )
  }
}