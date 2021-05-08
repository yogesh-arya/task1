import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      question: '',


    }
  }
  componentDidMount() {
    this.getEvenNumbers();
  }
  // Question 1 Function START
  getEvenNumbers = () => {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let even = []
    for (var arr of array) {
      if (arr % 2 === 0) {
        even.push(arr)
      }
    }
    this.setState({

      result: even,
      question: 'Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only'
    })
  };
  // Question 1 Function End
  // Question 2 Function START
  getMaxOnes = () => {
    var array = [0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1];
    let maxOnes = 0;
    let currentOnes = 0;
    for (var arr of array) {
      if (arr === 0) {
        currentOnes = 0;
      }
      else {
        currentOnes++;
      }
      if (currentOnes > maxOnes) {
        maxOnes = currentOnes;
      }
      this.setState({
        result: maxOnes,
        question: 'Find the maximum consecutive 1s in an array of 0s and 1s.'
      })
    }

  }
  // Question 2 Function End
  //Question 3 Function START
  getDuplicateNumber = () => {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 23, 24, 25];

    for (var i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
        this.setState({
          result: array[i],
          question: 'Suppose   you   have   an   array   of   101   integers.   This   array   is   already   sorted   and    all   numbers   in   this   array   are   consecutive.   Each   number   only   occurs   once   in   the    array   except   one   number   which   occurs   twice.   Write   a   js   code   to   find   the    repeated   number.    e.g   $arr   =   array(0,1,2,3,4,5,6,7,7,8,9,10...................); '
        })
      }
    }
  }

  //Question 3 Function End

  //Question 4 Function START

  getApi = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(allData => this.setState({

        question: 'Lets   see   we   an   api   url   www.example.com / api / get / 1      Write   a   sample   code   to   call   this   rest   api   and   display   the   result.   ',
        result: allData
      }))
  }
  //Question 4 Function End
  //Question 5 Function Start
  sortCode = () => {
    let obj = [
      { id: 4, name: "A" },
      { id: 10, name: "B" },
      { id: 5, name: "C" },
      { id: 15, name: "D" },
      { id: 34, name: "E" }
    ]
    const result = obj.sort((a, b) => a.id > b.id ? 1 : -1)
    this.setState({
      result,
      question: 'Assume   there   is   a   object   of   this   format      var   obj   =   { id: 4, name: "A" },{ id: 10, name: "B" },      { id: 5, name: "C" },      { id: 15, name: "D" },      { id: 34, name: "E" }    It   can   be   a   dictionary   or   java   object,   as   per   your   language   of   choice.   But   its    key/value   pair   dictionary   simply. '
    })
    console.log(result);
  }
  //Question 5 Function End
  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.getEvenNumbers()}>Question 1</button>
        <button onClick={() => this.getMaxOnes()}>Question 2</button>
        <button onClick={() => this.getDuplicateNumber()}>Question 3</button>
        <button onClick={() => this.getApi()}>Question 4</button>
        <button onClick={() => this.sortCode()}>Question 5</button>
        <p>{this.state.question}</p>
        {Array.isArray(
          result
        ) ? result.map(r => r.id ? (<h1 key={r.id}>{r.id}: {r.name}</h1>) : <h1 key={r}>{r}</h1>) : <h1>Result:{result}</h1>}

      </div>
    );
  }
}

export default App;
