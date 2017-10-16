import React from "react"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { 
      count: 0,
      //title: 'Some title'
      //arse: 'About Face'
    };
  }

  componentDidMount(){
      //update state
      this.state = {
        count: this.state.count,
        arse: this.props.arse
      }
      console.log(this.state.arse + ' ' + this.props.arse)

  }


  render() {

    let inventors = [
      {
        name: 'Albert Einstein',
        born: 1879,
        died: 1955,
        field: 'Physics'
      },
      {
        name: 'Tim Berners Lee',
        born: 1955,
        died: '',
        field: 'Computer Science'
      },
      {
        name: 'Jonas Salk',
        born: 1914,
        died: 1995,
        field: 'Medical Science'
      }
    ]

    const oldest = inventors.sort((a, b) => a.born - b.born ? -1 : 1); 
    console.table(oldest); 

    return (
      <div>
        <h1>{this.props.title ? this.props.title : "I am the title of the Counter"}</h1>
        <p>Arse Status: {this.props.arse}</p>
        <p>current count: {this.state.count}</p>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          minus
        </button>
        {inventors.map((inventor, key) =>
            <p key={key}>
              <strong>{inventor.name}</strong> <br />
                <strong>Born:</strong> {inventor.born}
                <br />
                <strong> Died: {inventor.died ? "Dead" : "Not Dead"}</strong>
                <br />
                <strong>Field:</strong> {inventor.field}
            </p>

        )}
      </div>
    )
  }
}

export default Counter