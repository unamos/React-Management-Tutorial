import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '최용철',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '미나묘우이',
  'birthday': '990324',
  'gender': '여자',
  'job': '가수'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '레이',
  'birthday': '021201',
  'gender': '남자',
  'job': '밥먹기'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}/>);  }  ) }
      </div>
    );
  }
}

export default App;
