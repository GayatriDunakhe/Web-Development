## "Not Found" route:

1. First, create a new React application using Create React App or your preferred setup.

2. Install the necessary dependencies (`react-router-dom`) if you haven't already:

```bash
npm install react-router-dom
```

3. Replace the contents of your `src/App.js` file with the following code:

```jsx
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Define your routes here */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          {/* The "Not Found" route */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

4. Create the component files (`Home.js`, `About.js`, `Contact.js`, and `NotFound.js`) with their respective content:

```jsx
// src/Home.js
import React from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}

export default Home;
```

```jsx
// src/About.js
import React from 'react';

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Learn more about us!</p>
    </div>
  );
}

export default About;
```

```jsx
// src/Contact.js
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Contact us here.</p>
    </div>
  );
}

export default Contact;
```

```jsx
// src/NotFound.js
import React from 'react';

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
```
