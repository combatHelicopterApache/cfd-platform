import React from 'react'

interface Props {
  children: React.ReactNode
}

class ErrorBoundary extends React.Component<Props> {
  state = {
    error: false,
    errorInfo: false,
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.errorInfo) {
      return <p>Ooops! Something went wrong</p>
    }
    return this.props.children
  }
}

export default ErrorBoundary
