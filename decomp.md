## Decomp ReactJS

### Description

In this section of the assessment, we will provide you with some code snippets and ask you to answer some questions about the code.

Please keep your answers to a reasonable length. You may answer directly in this markdown file.

### Q1. ReactJS Hooks

Please take a look at this ReactJS code and correct the mistakes that you find. You may edit the code in this markdown file directly.

```javascript
import React, {useState} from 'react';

function Counter(props) {
  // const [count] = useState(0);
  const [count, setCount] = useState(0);

  /**
   * when the button is clicked, the current count is never updated since it doesn't trigger a re-render.
   * Although a you can console.log(count) to see the count "value" update, it doesn't actually update the actual * * value of the counter since `count` is a state, and in order to see the state updated on the screen, a dispatch * function (setState) would need to be called to update the count
   *
   */
  return (
    <p>Current count: {count}</p>
    <button onClick={() => (count = count + 1)}>Increment count</button>
    <button onClick={() => setCount(count + 1)}>Increment count</button>
  );
}
```

### Q2. Events

Explain the difference between these 4 ways of passing a function to a component. </br>
What will happen when you click each of these buttons and why?

```javascript
class App extends React.Component {
  constructor() {
    super();
    this.name = "MyComponent";

    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    alert(this.name);
  }

  handleClick3 = () => alert(this.name);

  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
    /**
     * When you click on `click 1`, it will not trigger an alert since it has not been bound to the class. However, on each re-render of the app, the handleClick1 method is triggered because it is being invoked directly within the class.
     * When you click on `click 2`, it will not trigger an alert since it has not been bound to the class.
     * When you click on `click 3`, it will trigger an alert with `MyComponent` since it has been bound to the class correctly.
     * When you click on `click 4`, it will trigger an alert with `MyComponent` since it is using an arrow function to invoke the alert
     */
  }
}
```

### Q3. Memoization

Memoized selectors are a common pattern in ReactJS applications to serve cached data derived from a global state.

In the following code snippets, we have implemented two memoized selectors that will re-evaluate the original function only if the derived output of the input argument is changed. Otherwise, the selector will return a cached result.

`memoize()` uses a <strong>shallow-compare</strong> function to evaluate equality.

For each assertion test on lines 79 to 86, please indicate whether the test will pass or fail. Provide a brief description if you indicate that an assertion will fail.

```javascript
test("memoized selectors", () => {
  const stateA = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
  const stateB = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
  const stateC = { data: { a: { x: 1, y: [3, 4] }, b: { x: 3, y: [5, 6] } } };

  const fn1 = memoize((st: typeof stateA) =>
    Object.values(st.data).map((d) => d.x)
  );

  const fn2 = memoize((st: typeof stateA) =>
    Object.values(st.data).map((d) => d.y)
  );

  expect(fn1(stateA) === fn1(stateB)).toBeTruthy(); //[2,3] === [2, 3] pass
  expect(fn1(stateA) === fn1(stateC)).toBeTruthy(); //[2,3] === [1, 3] fail since the scalar values are not equal
  expect(fn1(stateB) !== fn1(stateC)).toBeTruthy(); //[2,3] !== [1, 3] pass

  expect(fn2(stateA) === fn2(stateA)).toBeTruthy(); //pass
  expect(fn2(stateA) === fn2(stateB)).toBeTruthy(); //fail since its comparing 2 different instances of arrays
  expect(fn2(stateA) !== fn2(stateC)).toBeTruthy(); //pass
  expect(fn2(stateB) !== fn2(stateC)).toBeTruthy(); //pass
});
```
