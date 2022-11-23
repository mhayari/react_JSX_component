import './App.css';
import ProfilPhoto from './Component/profile/ProfilPhoto';
import FullName from './Component/profile/FullName';
import Adress from './Component/profile/Adress';

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Adress/>
    </div>
  );
}

export default App;
