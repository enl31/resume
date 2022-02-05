import { Home, About, Skill } from './containers';
import SkillFooter from './containers/Skill/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Home />
    <About />
    <Skill />
    <SkillFooter />
  </div>
);

export default App;
