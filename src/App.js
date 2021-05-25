import Teslim from './practice';

function App() {
  var profile = {
    name: 'Teslim',
    job: 'Software Engineer',
    nationality: 'Earther'
  }
  return (
    <div className="App">
      <h2>User Profile:</h2>
      <div className="wrapper">
        <h1>Name:
          <Teslim profile={profile.name} />
          </h1>
        <h1>Job:
          <Teslim profile={profile.job} />
          </h1>
        <h1>Nationality:
          <Teslim profile={profile.nationality} />
          </h1>
      </div>
    </div>
  );
}

export default App;
