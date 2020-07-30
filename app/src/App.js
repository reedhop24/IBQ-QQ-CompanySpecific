import React from 'react';
import './App.css';
import axios from 'axios';
import Upload from './components/upload';
import Input from './components/input';
import Select from './components/select';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null,
      questionArr: []
    }
  }

  submitQuestions = () => {
    let formData = new FormData();
    formData.append("agency", this.state.file)
    axios.post('http://localhost:4000/spreadsheet', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      this.setState({questionArr: res.data})
    });
  }

  render() {
    return (
      <div id="middle-wizard">
        <Upload uploadFile={(x) => this.setState({file: x})} submit={() => this.submitQuestions()}/>
        {this.state.questionArr.length > 0 ? this.state.questionArr.map((x) => {
          if(x.Type === 'VARCHAR') {
            return <Input currQuestion={x}/>
          } else {
            return <Select currQuestion={x}/>
          }
        }): null }
      </div>
    );
  }
}

export default App;
