
import React from 'react';
import Button from './components/Button'; 
import Card from './components/Card';
import Modal from './components/Modal';
import Input from './components/Input';

class App extends React.Component {
  handleClick = () => {
    alert('Button clicked!');
  };

  render() {
    return (
      <div>
        <h1>My React App</h1>
        <Button 
          onClick={this.handleClick} 
          label="Click Me" 
          style={{ backgroundColor: 'blue', color: 'white' }} 
        />
        <Card/> 
        <Modal/>
        <Input />
      </div>
    );
  }
}

export default App;
