# Routing in ReactJS (L1)

## What is routing in ReactJS? 

* In ReactJS, routing refers to the process of managing different views or pages within a web application.
* It allows you to define how different URLs or routes should be associated with specific components or views, enabling navigation between them without the need to reload the entire web page.
* Routing is commonly used in single-page applications (SPAs) to create a smooth and interactive user experience.

**Definition**: Routing in ReactJS is the mechanism for mapping URLs to specific components, allowing users to navigate through different parts of a single-page application.


**Example**:
Suppose you have a simple React application with two views, a home page and an about page, and you want to set up routing for these views. You can use React Router to achieve this. First, install React Router:

```bash
npm install react-router-dom
```

Next, in your application code, you can define your routes and associated components like this:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
```

**Explanation**
In this example, we import the necessary components from 'react-router-dom' and define two routes: one for the home page ("/") and one for the about page ("/about"). When the user clicks on the links in the navigation, the respective components (Home and About) are displayed without a full page refresh, providing a seamless navigation experience within the single-page application.

**Complete Code**

* Folder structure:

```
my-react-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

1. Create a new React application using Create React App or your preferred method.

2. Inside the `src` folder, create a folder named `components`.

3. Inside the `components` folder, create three JavaScript files:

   - `Home.js`:

     ```jsx
     import React from 'react';

     function Home() {
       return <h2>Home Page</h2>;
     }

     export default Home;
     ```

   - `About.js`:

     ```jsx
     import React from 'react';

     function About() {
       return <h2>About Page</h2>;
     }

     export default About;
     ```

   - `App.js`:

```jsx

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<Home />} /> {/* Use 'element' prop */}
          <Route path="/about" element={<About />} /> {/* Use 'element' prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


```

4. In your `src` folder, open `index.js` and modify it as follows:

   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './components/App';

   ReactDOM.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
     document.getElementById('root')
   );
   ```

5. Make sure you have React Router installed by running:

   ```bash
   npm install react-router-dom
   ```

6. You can now run your React application:

   ```bash
   npm start
   ```

Your application should start, and you can navigate between the "Home" and "About" pages using the provided links. This folder structure and code organization help keep your components modular and organized within your React project.