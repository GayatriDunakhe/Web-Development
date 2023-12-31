import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <h1>learn react</h1>
      {/* Header Component */}
      <HeaderComponent/>
      {/* Body Component */}
      <BodyComponent/>
      {/* Footer Component */}
      <FooterComponent/>
    </div>
  );
}

export default App;
