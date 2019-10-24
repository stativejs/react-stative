# react-stative

React.js plugin to use [stative](https://github.com/stativejs/stative).

### Installation

```sh
npm install react-stative stative react
```

### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import state from 'stative';
import App from './App';

// your app initial state
state.set({
  counterA: 0,
  counterB: 100,
  counterC: 1000,
});

ReactDOM.render(<App />, document.getElementById('root'));
```

Create your components using `subscribeTo` high order component and listen to every state change

```jsx
import React from 'react';
import state from 'stative';
import subscribeTo from 'react-stative';

class Square extends React.Component {
  incrementA() {
    state.set('counterA', counter => counter + 1);
  }

  incrementB() {
    state.set('counterB', counter => counter + 1);
  }

  incrementC() {
    state.set('counterC', counter => counter + 1);
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.counterA} - 
          {this.props.counterB} - 
          {this.props.counterC}
        </h1>

        <button onClick={this.incrementA}>Update A</button>
        <button onClick={this.incrementB}>Update B</button>
        <button onClick={this.incrementC}>Update C</button>        
      </div>
    );
  }
}

export default subscribeTo(Square, '*');
```

Or just to some part of it

```jsx
import React from 'react';
import state from 'stative';
import subscribeTo from 'react-stative';

class Circle extends React.Component {
  incrementA() {
    state.set('counterA', counter => counter + 1);
  }

  incrementB() {
    state.set('counterB', counter => counter + 1);
  }

  incrementC() {
    state.set('counterC', counter => counter + 1);
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.props.counterA} - 
          {this.props.counterB} - 
          {this.props.counterC}
        </h1>

        <button onClick={this.incrementA}>Update A</button>
        <button onClick={this.incrementB}>Update B</button>
        <button onClick={this.incrementC}>Update C</button>        
      </div>
    );
  }
}

export default subscribeTo(Circle, ['counterA']);
```

Enjoy!
