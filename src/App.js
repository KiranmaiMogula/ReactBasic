import logo from './logo.svg';
import './App.css';
import Label from './Label'; 
import Hello from './Learn';
import List from './List';
import Button from './Button';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          <Label />
          <Hello name='Kiran'/>
          <List names={names}/>
          <List names={names1}/>
          <Button text='Rendering Elements'/>
          <Button text='Handling Events'/>
          <Button text='State and Lifecycle'/>
          
        
      </header>
    </div>
  );
}

const names = ['Handling Events','State and Lifecycle','Rendering Elements'];
const names1 = ['Sanjay','Kiranmai'];
export default App;
