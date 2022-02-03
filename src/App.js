import logo from './logo.svg';
import { Message } from './components/Message';
import './App.css';
import { Incrementor } from './components/Incrementor';
import { DogImage } from './components/DogImage';

// a component is a function where the name of the function or variable
// is capatilized
const App = () => {


  // a component should return what it's rendering, in React, that means JSX
  // JSX is simply "javavscript under the hood", but it looks like HTML because
  // the intent is to render HTML
  return (
    <div id="main-div" className="App"> {/* this looks like htmls, but lol, this isn't html */}
      <Message message="lol sup dude" />
      <Message message="tee hee!" />
      <Incrementor />
      <Incrementor />
      <DogImage />
    </div>
  );
}

export default App;
