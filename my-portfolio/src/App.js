import "./App.css";
import Hoom from "./portfolio container/Home/Hoom";
import AboutMe from "./portfolio container/AboutMe/AboutMe";
import Skill from "./portfolio container/Skill/Skill";
import SkillFooter from "./portfolio container/Skill/SkillFooter";
function App() {
  return (
    <div className="App">
      <Hoom />
      <AboutMe />
      <Skill />
      <SkillFooter />
    </div>
  );
}

export default App;
