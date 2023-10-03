import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const a = 2;
  const b = 6;
  const res = a+b;

  return (
    <h1 className="alert alert-primary">Addition of {a} + {b} is {res}</h1>

  );
}

export default App;
