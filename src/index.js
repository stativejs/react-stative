import React from 'react';
import state from 'stative';
import objectPath from 'object-path';

export default function subscribeTo(WrappedComponent, paths) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = state.get();
      this.subscriptions = [];
    }

    componentDidMount() {
      if (!paths) {
        return;
      }

      if (typeof paths === 'string' && paths === '*') {
        const subscription = state.subscribe((newState) => {
          this.setState({ ...newState });
        });
        this.subscriptions.push(subscription);
        return;
      }

      if (paths instanceof Array) {
        paths.forEach((path) => {
          const subscription = state.subscribe(path, (newValue) => {
            const obj = {};
            objectPath.set(obj, path, newValue);
            const newState = { ...state.get(), ...obj };
            this.setState(newState);
          });
          this.subscriptions.push(subscription);
        });
      }
    }

    componentWillUnmount() {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}
