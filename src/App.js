import './styles/Projects.css';
import { Projects, WaitWhat } from './components/Components'
function App() {
  const projects = [
    {
      "projectName": "firstProject",
      "authUsers": ["Moustapha", "Moussey"],
      "hwSet1": 50,
      "hwSet2": 0,
      "status": false
    },
    {
      "projectName": "anotherProject",
      "authUsers": [],
      "hwSet1": 50,
      "hwSet2": 0,
      "status": true
    },
    {
      "projectName": "Projecting Project",
      "authUsers": ["Toure"],
      "hwSet1": 0,
      "hwSet2": 0,
      "status": false
    },
  ]

  return (
    <>
      <div className='projectBody'>
        <h1 style={{ color: "white", fontWeight: "bolder", fontSize: "2vw" }}>Projects</h1>
        <div style={{ width: "100%" }} >
          <Projects projectList={projects} />
        </div>
      </div>
      <WaitWhat txt="yooo" />
      <WaitWhat />
      <WaitWhat txt="I forgot" />
      <WaitWhat txt="Think that's all of the requirments?" />
    </>
  );
}

export default App;
