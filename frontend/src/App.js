import React, {useState} from 'react';
import CodeMirrorComponent from './component/CodeMirror';
import MultipleChoice from './MultipleChoice';
import LoopsProblem from './LoopsProblem';
import OtherProblem from './OtherProblem';
import Problem from './Problem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
// import './MultipleChoice.css';

import Transcript from './Transcript'
import Home from './Home'
import Login from './components/Login';


function App() {

  let [selectedLang, setSelectedLang] = useState('');

  changeSelectedLang = (event, obj) => {
    console.log(obj.value)
    setSelectedLang(obj.value);
  }
      //
  return (
    
    <div>
      
      <div className="App">
        <div className="App-header">
          <h1>EdTech CS 1301 Tracing</h1>
          <TogetherJSButton/>
        </div>
        <div className="three-main-columns">
          <CodeMirrorContainer setSelectedLang={setSelectedLang}/>
          <Transcript  language={selectedLang}/>

        </div>
      </div>
    </div>
  );
}

class CodeMirrorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
    }
  }
    

  render() {
    return (
      <div className="OuterContainer">
          {/* <TogetherJSButton/> */}
          <h2></h2>

        
        <Router>
          {/* {/* <Switch> */}
            <Route path="/login">
            <Login setSelectedLang={this.props.changeSelectedLang}/>
          </Route> */}
            <Route path="/welcome">
              <Home/>
            </Route>
            <Route path="/q1-1">
              <div className="CodeMirrorContainer">
                  <CodeMirrorComponent defaultValue={`def length(item):
  if not item:
    return 1
  else:
    return 1 + length(item[1:])

print(length('CS 1301'))
                  `} readOnly={false}/>
              </div>
              <div className="ProblemContainer">
                <Problem nextQuestion="q1-2" problemNumber={1}></Problem>
            </div>
            </Route>

            <Route path="/q1-2">
            <div className="CodeMirrorContainer">
                <CodeMirrorComponent defaultValue={`def multiply(a,b):
    if a == 0 or b == 0:
        return 0
    else:
        return a + multiply(a-1, b)`} readOnly={false}/>
              </div>
             <div className="ProblemContainer">
                <Problem nextQuestion="q1-3" problemNumber={2}></Problem>
              </div>
            </Route>

            <Route path="/q1-3">
            <div className="CodeMirrorContainer">
<CodeMirrorComponent defaultValue={`def funWithLists(listparam):
  for i in range(len(listparam)):
    if type(i) == int:
    	listparam[i] = listparam[i] * 2
  return listparam

aList = [1, 2, "hello", 9]
funWithLists(aList)
print(aList)`} readOnly={false}/>
              </div>
             <div className="ProblemContainer">
                <OtherProblem nextQuestion="q1-4"></OtherProblem>
              </div>
            </Route>

            <Route path="/q1-4">
            <div className="CodeMirrorContainer">
<CodeMirrorComponent defaultValue={`aString = “goFalcons”
for i in aString:
	print(i)`} readOnly={false}/>
              </div>
             <div className="ProblemContainer">
                <LoopsProblem nextQuestion="q1-4"></LoopsProblem>
              </div>
            </Route>

          </Switch>
        </Router>


      </div>
    );
  }
}

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
        <div className="Resources">
            <p>For Loops suggested resources</p>
        </div>
    );
  }
}


class TogetherJSButton extends React.Component{
  constructor(props){
      super(props);
      this.state={
        togetherON: false,
        text: 'Start Collaborating'
      }
  }

  ToggleButton(){
    if (this.state.togetherON) {
      this.setState((currentState) => ({
        togetherON: !currentState.togetherON,
      }));
      this.state.text = 'Start Collaborating';
    } else {
      this.setState((currentState) => ({
        togetherON: !currentState.togetherON,
      }));
      this.state.text = 'Done Collaborating';
    }

    window.TogetherJS(this);
    return false;
  }

  render(){
      return(
          <div>
            <button className="TogetherJSButton" onClick={ () => this.ToggleButton() }>
              {this.state.text}
            </button>
          </div>
      )
  }
}

export default App;