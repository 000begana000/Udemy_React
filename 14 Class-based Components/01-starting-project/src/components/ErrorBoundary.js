import { Component } from "react";

// for ErrorBoundary it has to be a class based component
// wrap the component which might throw errors which we wanna handle.
class ErrorBoundary extends Component {
  // this function is just a term for the error boundary
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
