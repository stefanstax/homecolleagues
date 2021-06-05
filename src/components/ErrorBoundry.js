import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.error) {
      return (
        <p>
          There has been a problem with resources. We're working on the
          solution, if it's not a problem please do alarm me either by sending
          an email or by posting an issue. Sorry for the incovenience.
        </p>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
