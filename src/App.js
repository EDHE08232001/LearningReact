import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This my first React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Hello></Hello>
      <Message messageContent="This is a message from props" />
      <Profile firstName="Edward" lastName="He">
        This is a profile of a person
      </Profile>
      <Counter></Counter>
      <Resume name="EDHE"></Resume>
      <FunctionEvent></FunctionEvent>
      <ClassEvent></ClassEvent>
      <FunctionalComponent></FunctionalComponent>
    </div>
  );
}

export default App;
