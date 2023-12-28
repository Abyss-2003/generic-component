
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>CheckBox Component
      </h1>
      <p>without the value below tile is undefined</p>
      <Checkbox></Checkbox> 
      <p>with the value of Checkbox bolow title</p>
      <Checkbox value = "Checkbox"> w</Checkbox>
      <div style={{ marginTop: '20px' }}>
        <p>
          The checkbox above is a simple React component. When checked, it
          Return  "True," and when unchecked, it Return
          "False."
        </p>
      </div>
    </div>
    </div>
     <Data/>
     <Pagination/>
    </div>
  );
}

export default App;
