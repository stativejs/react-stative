# react-stative

React.js plugin to use stative.

### Installation

```sh
npm install react-stative stative react
```

### Usage

Set your initial state at index.js of your React project.

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import state from 'stative';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

state.set({
  counterA: 0,
  counterB: 100,
  counterC: 1000,
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Create your components using `subscribeTo` high order component.

```react
import React from 'react';
import subscribeTo from './react-stative';

class Square extends React.Component {
  render() {
    return (
      <h1>
        {this.props.counterA} - 
        {this.props.counterB} - 
        {this.props.counterC}
      </h1>
    );
  }
}

export default subscribeTo(Square, ['counterB']);
```
