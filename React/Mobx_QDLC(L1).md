## Mobx with ReactJS:

1. What is Mobx, and how does it relate to ReactJS?
- Mobx is a state management library that simplifies the process of managing and synchronizing application state.
- It allows us to define the observables
    - observables are piece of states that can be automatically tracked for changes
- It allows us to define observable state within components or stores.
- When this state changes, React components that depend on it will automatically re-render.

2. What problem does Mobx solve in React applications?
- State management- it deal with complex state management through observables
- Complex UI - it help to manage the flow of the data and ensure that components always reflect the correct state. 
- Performance Optimization- it only update those components that are affeted any changes,so minimizing unnecessary re-renders and improving application performance

3. Explain the core concepts of Mobx.
 ![img](https://cdn.hashnode.com/res/hashnode/image/upload/v1625037943776/7OueRPuaj.png?auto=compress,format&format=webp)
- Observables -
    - Observables are watched for changes, and any reaction (like UI updates) that depends on them will automatically re-run when changes occur.
    - They are marked as observable using decorators 
    - They are js objects, arrays, maps, or class instances

- Computed - 
    - Computed values are derived from observable
    - They represent a piece of state that can be automatically updated when its dependencies change.
    - Computed values are defined as functions that return a calculated result based on one or more observables. 

- Action - 
    - Actions are methods or functions that modify the state (observables) in a Mobx application.
    - This helps ensure that all changes are tracked and that reactions are triggered correctly.

- Reactions -
    - Reactions are special functions that are automatically run when the observables they depend on change. 
    - It is used to perform side effects like updating the user interface, making network requests, or logging data.
 
4. How do you install Mobx in a React project?
- For installing Mobx in a React Project we need to run the following command on cmd- 
```
npm install mobx mobx-react
```
This command will install the Mobx package in the project

5. What is an observable in Mobx, and why is it important?
- Observables are piece of states that can be automatically tracked for changes
- It enables reactivity in Mobx
- When we mark a piece of state as observable, it automatically tracks any changes to that state.

6. What are computed properties in Mobx, and how are they different from observables?
- Computed properties in Mobx are derived state values that are automatically calculated from one or more observable values. 
- They are a way to create new pieces of state that are based on existing observable state.
- Computed properties are automatically updated by Mobx when their dependencies (observables) change. 
- Computed properties are read-only.
- Observables are typically used to represent raw pieces of state, such as numbers, strings, or objects. Computed properties are used for derived state, transformations, or calculations based on the observables.

7. How do you define an observable in Mobx?
- We can define as observable in Mobx as follows-
```
// using observable function
import { observable } from 'mobx';

const person = observable({
  name: 'John',
  age: 30,
});

//using decorators
import { observable } from 'mobx';

class Person {
  @observable name = 'John';
  @observable age = 30;
}

const person = new Person();
```

8. What is the purpose of the `@observable` decorator?
- The @observable decorator is used in Mobx to mark class properties as observable. 
- It tells Mobx to track changes to that property and trigger reactivity when the property is read or modified. 

9. How can you use Mobx to manage the state of a React component?
- First we need to install Mobx by using the command-
```
npm install mobx mobx-react
```
- Need to create Mobx store which is hold and manage application state.
```
// src/stores/CounterStore.js
import { observable, action } from 'mobx';

class CounterStore {
  @observable count = 0;

  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }
}

export default new CounterStore();
```
- Need to inject the store using `inject` function.
```
// src/components/Counter.js
import React from 'react';
import { observer, inject } from 'mobx-react';

const Counter = ({ counterStore }) => {
  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <button onClick={counterStore.increment}>Increment</button>
      <button onClick={counterStore.decrement}>Decrement</button>
    </div>
  );
};

export default inject('counterStore')(observer(Counter));
```
- After that use the state and actions so we can access its data and actions as props in your component.
- We need to wrap our application with the Mobx Provider to make the store(s) available to all components that need them.
```
// src/App.js
import React from 'react';
import { Provider } from 'mobx-react';
import CounterStore from './stores/CounterStore';
import Counter from './components/Counter';

const App = () => {
  return (
    <Provider counterStore={CounterStore}>
      <Counter />
    </Provider>
  );
};

export default App;
```
- Mobx components that need to react to changes in the store(s) should be wrapped with the `observer` decorator.

10. What is Mobx's approach to managing mutable state?
- The state is mutable by design. 
- This means that you can directly modify the state without going through complex actions or reducers. 
- This approach can lead to more straightforward and concise code.

11. Explain the concept of actions in Mobx.
- The primary purpose of actions is to modify the observable state of your application.
- Actions are simply methods that are defined to modify the observable state.
- It ensuring that state mutations are tracked and components are re-rendered appropriately

12. How do you define an action in Mobx?
- We can define action in Mobx by two ways -
    - using decorator`@action`
    ```
    import { observable, action } from 'mobx';

    class TodoStore {
    @observable todos = [];

    @action addTodo(todo) {
        this.todos.push(todo);
    }
    }

    ```
    - using `action` function
    ```
    import { observable, action } from 'mobx';

    class TodoStore {
    @observable todos = [];

    addTodo = action(function (todo) {
        this.todos.push(todo);
    });
    }

    ```

13. What is Mobx's reaction concept, and why is it useful?
- Reactions are like watchers. They keep an eye on certain pieces of data (called observables).
- When the data they're watching changes, reactions automatically kick into action.

14. How does Mobx ensure that React components automatically re-render when state changes?
15. What is the Mobx Provider, and why is it important in React applications?
16. How can you use the `@observer` decorator in Mobx with React components?
17. What is the purpose of Mobx's `autorun` function?
18. Explain the role of Mobx's `reaction` function.
19. How does Mobx handle asynchronous actions and side effects?
20. What are Mobx's strict mode and non-strict mode, and how do they differ?
21. How can you organize your Mobx store(s) in a larger React application?
22. What is the purpose of the Mobx DevTools extension, and how can it be helpful during development?
23. What are some common debugging techniques for Mobx-related issues in a React application?
24. How can you achieve fine-grained control over when a component re-renders in Mobx?
25. Explain the concept of Mobx's "transaction" in the context of state updates.
26. What are Mobx actions' best practices for optimizing React component updates?
27. How can you share state between React components using Mobx?
28. What is the Mobx `when` function, and how can it be used to react to specific conditions?
29. How does Mobx compare to other state management solutions, like Redux, in the context of React applications?
30. What are some potential performance considerations when using Mobx with a large-scale React application?
