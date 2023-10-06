## Mobx with ReactJS:
## Gayatri Dunakhe
## WAVE 2 Python batch 1

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
- Reactions in Mobx are functions that automatically run when their dependencies (observables or computed properties) change. 
- They are useful for triggering side effects, such as updating the user interface or making network requests, in response to changes in the state. 
- Mobx ensures that reactions are run at the right time and that they are not executed more often than necessary.

14. How does Mobx ensure that React components automatically re-render when state changes?
- Mobx provides the @observer decorator or the observer higher-order component from mobx-react. 
- When you decorate a React component or wrap it with observer, Mobx automatically tracks the observables used within the component's render method. 
- When any of these observables change, Mobx triggers a re-render of the component, ensuring that it stays in sync with the state.

15. What is the Mobx Provider, and why is it important in React applications?
- The Mobx Provider is a component provided by mobx-react that allows you to inject Mobx stores into the React component tree. 
- It's crucial because it makes Mobx stores accessible to any component in the tree without the need to pass them explicitly through props. 
- This simplifies state management and ensures that components can easily access the state they need.

16. How can you use the `@observer` decorator in Mobx with React components?
```
import { observer } from 'mobx-react';

@observer
class MyComponent extends React.Component {
render() {
    // Render logic using Mobx observables
}
}
```

17. What is the purpose of Mobx's `autorun` function?
- The autorun function in Mobx is used to create a reaction that automatically runs whenever any of its observed values change. 
- It's often used for logging, debugging, or other side effects that don't directly influence the user interface. 
- Autorun is useful for tracking and responding to changes without explicitly tying them to React components.

18. Explain the role of Mobx's `reaction` function.
- The reaction function in Mobx allows you to define custom reactions with fine-grained control over when they should run. 
- Unlike autorun, reaction lets you specify which observables to track and when the reaction should be triggered. 
- This is useful for more complex scenarios where you need precise control over side effects.

19. How does Mobx handle asynchronous actions and side effects?
- Mobx provides mechanisms like runInAction and flow (for async/await) to handle asynchronous actions and side effects. 
- These tools allow you to safely modify observables within an action, ensuring that reactions are triggered correctly when the asynchronous operation completes. 
- Mobx handles asynchronous actions seamlessly while maintaining reactivity.

20. What are Mobx's strict mode and non-strict mode, and how do they differ?
- Mobx has a strict mode and a non-strict mode:
  - Strict Mode (default): In strict mode, Mobx enforces strict rules for state changes and reactions. It helps catch and prevent common programming mistakes, making it ideal for development and debugging.
  
  - Non-Strict Mode: In non-strict mode, Mobx relaxes some of its rules, making it more permissive regarding state changes. It is suitable for situations where you need maximum performance and can ensure that you follow Mobx's guidelines correctly.

21. How can you organize your Mobx store(s) in a larger React application?
- In a larger React application, you can organize Mobx stores based on domain or feature. 
- Each store can manage a specific part of the application's state and logic. 
- Additionally, you can use the Mobx Provider to inject these stores into the component tree. 
- This separation of concerns keeps your codebase clean and maintainable.

22. What is the purpose of the Mobx DevTools extension, and how can it be helpful during development?
- The Mobx DevTools extension is a browser extension that provides a graphical user interface for inspecting and debugging Mobx state and reactions. 
- It allows you to visualize the state, track actions, and understand how reactions are triggered. 
- It's an invaluable tool for diagnosing issues and optimizing Mobx-powered applications during development.

23. What are some common debugging techniques for Mobx-related issues in a React application?
- Common debugging techniques for Mobx-related issues include:
  - Using the Mobx DevTools extension to inspect and track state changes.
  - Reviewing the console for error messages or warnings.
  - Adding console.log statements to actions, reactions, or component renders for debugging purposes.
  - Using mobx-logger to log Mobx actions and state changes.
  - Ensuring that actions are correctly annotated with @action.

24. How can you achieve fine-grained control over when a component re-renders in Mobx?
-  You can achieve fine-grained control over component re-renders in Mobx by:
  - Using @observer(shouldComponentUpdate) to define custom shouldComponentUpdate logic.
  - Implementing the shouldComponentUpdate method in your components and manually checking whether re-render is necessary based on specific observables or conditions.

25. Explain the concept of Mobx's "transaction" in the context of state updates.
- In Mobx, a transaction is a way to batch multiple state changes into a single unit of work. 
- Transactions are automatically created when you invoke an action, and they help optimize the reactivity system. 
- All state changes within a transaction are treated as a single change, reducing the number of reactions triggered and improving performance.

26. What are Mobx actions' best practices for optimizing React component updates?
- To optimize React component updates when using Mobx actions, consider these best practices:
    - Group related state changes within a single action to create transactions.
    - Use computed properties to derive values whenever possible to avoid unnecessary re-renders.
    - Minimize the use of forceUpdate() or manual shouldComponentUpdate checks by relying on Mobx's reactivity system.
    - Avoid unnecessary component nesting, as it can lead to excessive re-renders.

27. How can you share state between React components using Mobx?
- You can share state between React components using Mobx by creating one or more Mobx stores to hold the shared state. 
- Then, inject these stores into the component tree using the Mobx Provider. 
- Components that need access to the shared state can use the @inject decorator or the inject higher-order component to access the stores.

28. What is the Mobx `when` function, and how can it be used to react to specific conditions?
- The Mobx when function is used to create a reactive condition that triggers a side effect when the condition becomes true. 
- It's useful for reacting to specific conditions in your application. 
- Here's an example:

``` 
import { when } from 'mobx';

when(
() => someConditionIsTrue(),
() => {
    // This function runs when someConditionIsTrue() becomes true
}
);
```

29. How does Mobx compare to other state management solutions, like Redux, in the context of React applications?
- Mobx and Redux are both state management solutions for React, but they have different philosophies:
  - Mobx: Embraces mutable state, encourages simplicity, and provides fine-grained reactivity. It can be easier to set up and use, especially for smaller applications.
  - Redux: Enforces immutability, relies on a unidirectional data flow, and uses pure functions (reducers) to update state. It's well-suited for large-scale applications with complex state management needs.
  - The choice between Mobx and Redux depends on  project's requirements, complexity, and development team's preferences.

30. What are some potential performance considerations when using Mobx with a large-scale React application?
- When using Mobx with a large-scale React application, consider the following performance considerations:
    - Optimize Reactions: Ensure that reactions (component re-renders) are optimized by using computed properties and fine-grained control over when components update.
    - Avoid Excessive Nesting: Limit unnecessary component nesting to prevent excessive re-renders.
    - Use Transactions: Leverage Mobx transactions to batch state changes and reduce the number of reaction updates.
    - Minimize Global State: Be mindful of global state management and try to keep state closer to where it is used to reduce the scope of updates.
    - Use Memoization: Use memoization techniques to avoid redundant calculations and re-renders.
    - Profile and Monitor: Profile your application's performance using browser developer tools and monitor Mobx-related activities using the Mobx DevTools extension.
    - Careful design and optimization can help ensure that Mobx performs well in large-scale React applications.
