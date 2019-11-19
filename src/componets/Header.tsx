import React, { Component } from 'react'

interface Props {
  title: string
}

export class Header extends Component<Props> {
  render() {
    const { title } = this.props
    return (
      <header>
        <h1 className="text-center">{title}</h1>
      </header>
    )
  }
}

export default Header
