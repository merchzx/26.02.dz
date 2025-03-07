import logo from './logo.svg';
import './App.css';
import { User } from './Components/task1';
import { UserData } from './Components/task2';
import { UserData2 } from './Components/task3';
import { UserEf } from './Components/task4Ef';
import { MyTimer } from './Components/Timer';
import { Card } from './Components/Card';
const cards = [
  {},
  {},
  { name: "Premium", price: "$0.99", color: "blue", Line1IsTrue: true, Line2IsTrue: true, Line3IsTrue: true, Line4IsTrue: true, id: 3 }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <User/> */}
        {/* <UserData/> */}
        {/* <UserData2/> */}

        {/* <UserEf/> */}
        {/* <MyTimer/> */}
        <div className='global'>
          <Card name="Basic" price="$2.99" color="green" Line1IsTrue={true} Line2IsTrue={false} Line3IsTrue={false} Line4IsTrue={false} id="1" ></Card>
          <Card name="Standart" price="$5.99" color="cyan" Line1IsTrue={true} Line2IsTrue={true} Line3IsTrue={true} Line4IsTrue={false} id="2" ></Card>
          <Card name="Premium" price="$0.99" color="blue" Line1IsTrue={true} Line2IsTrue={true} Line3IsTrue={true} Line4IsTrue={true} id="3" ></Card>
        </div>
      </header>
    </div>
  );
}

export default App;
