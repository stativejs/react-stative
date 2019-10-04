import state from 'stative';
import React from 'react';
import objectPath from 'object-path';

class StativeComponent extends React.Component {
  constructor(options) {
    const { props, subscribeTo } = options;
    super(props);
    this.state = state.get();

    if (!subscribeTo || !(subscribeTo instanceof Array)) {
      return;
    }

    options.subscribeTo.forEach((path) => {
      state.subscribe(path, (newValue) => {
        const obj = {};
        objectPath.set(obj, path, newValue);
        const newState = { ...state.get(), ...obj };
        this.setState(newState);
      });
    });
  }
}

export default StativeComponent;
