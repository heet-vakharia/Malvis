import React,{Component} from 'react';
import './App.scss';
import SectionHeader from './Components/SectionHeader/SectionHeader'
import HomeNavigator from './Components/HomeNavigator/HomeNavigator'
class App extends Component {
  render(){
    return (
    <div className="App">
      <HomeNavigator/>
      <SectionHeader/>
    </div>
  );
  }
  
}

export default App;
