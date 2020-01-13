import React, { Component } from "react";

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  // Ловим ошибки в любом компоненте и заново рендерим с ошибкой
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // тут можно залогировать ошибки
  }

  render() {

    const {
      error,
      errorInfo,
    } = this.state;

    if (errorInfo) {
      return (
        <div>
          <h2>Что-то пошло не так...</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}