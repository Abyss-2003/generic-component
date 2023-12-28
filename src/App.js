
import './App.css';
import Button from './Button'
import Cards from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './bg.jpg';
function App() {
  const handleCardClick=()=>{
    alert('hello')
  }
  return (
    <div className="App">
      <Button size='lg' bgColor='red' btnTxt='Log in'/><hr></hr>
      <Button size='md' btnTxt='Log in'/><hr></hr>
      <Button size='sm' btnTxt='Log in'/><hr></hr>
      <Cards title="Hello" desc="hi i am a developer" />
    </div>
  );
}

export default App;
