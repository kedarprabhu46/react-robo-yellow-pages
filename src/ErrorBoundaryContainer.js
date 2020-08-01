import React from "react";

class ErrorBoundaryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(errror, details) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    return this.state.hasError ? (
      <h1>Ooops, Something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundaryContainer;
