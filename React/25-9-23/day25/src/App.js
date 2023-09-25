import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import JsonTable from './components/JsonTable'
import NameTable from './components/name'
import { useEffect, useState } from 'react';

// Noraml app
// const App = () => {

//   const data = [
//     {rank: 1, name: 'Domenic', points: '88,110', teams: 'dcode'},
//     {rank: 2, name: 'Sally', points: '72,400', teams: 'Students'},
//     {rank: 3, name: 'Nick', points: '53,300', teams: 'dcode'},
//   ]

//   return (
//     <div className="App">
//       <h1>React Table</h1>
//       <Table data={data}/>
//     </div>
//   );
// }

// featching data from json file
// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
    
//     fetch('/data.json') 
//       .then((response) => response.json())
//       .then((jsonData) => {
//         setData(jsonData);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Simple React Table</h1>
//       <JsonTable data={data} />
//     </div>
//   );
// };


// Taking user input
const App = () => {

  const [inputVal, setInputVal] = useState();

  const handleInputVal = (e) => {
    setInputVal(e.target.value);
  }

  const [data, setData] = useState([])
  const [errormsg, setErrorMsg] = useState('');
  const [ranName, setRandomName] = useState('');

  const [sorttype, setSortType] = useState('');

  const addData = () =>{
    
    let isDuplicate = false;

    for(const items of data){
      if(items.name === inputVal){
        isDuplicate = true;
        break;
      }
    }

    if(isDuplicate){
      setErrorMsg(`${inputVal} is already present there!`)
    }
    else{
      setErrorMsg('')
      const newData = { name: inputVal };
      setData([...data, newData]);
      setInputVal('')
    }

  }

  const removeData = (index) =>{
    const newData = [...data]
    newData.splice(index, 1)
    setData(newData)
  }

  const sortData = () =>{
    if(sorttype === 'asc'){
      const sortData = [...data].sort((n1,n2) => n1.name.localeCompare(n2.name))
      setData(sortData)
    }
    else if(sorttype === 'dsc'){
      const sortData = [...data].sort((n1,n2) => n2.name.localeCompare(n1.name))
      setData(sortData)
    }
  }

  const clearData = () =>{
    setData([]);
  }

  const selectRandom = () =>{
    if(data.length === 0){
      setRandomName("No data")
    }
    else{
      let rannum = Math.floor(Math.random() * data.length)
      setRandomName(data[rannum].name)
    }    
  }

  const selectSortType= (e) =>{
    setSortType(e.target.value);
  }

  return (
    <div className="App">
      <h1>CRUD (Create Read Update Delete) Table</h1>
      <input text="text" value={inputVal} onChange={handleInputVal}/>
      <button onClick={addData} className='btn add'>Add</button>

      <br/><br/>

      <select onChange={selectSortType}>
        <option>Select Sort</option>
        <option value="asc">Asc</option>
        <option value="dsc">Dsc</option>
      </select>
      <button onClick={sortData} className='btn'>Sort</button>

      <br/><br/>

      <button onClick={selectRandom} className='btn'>Select Random Name</button>
      <button onClick={clearData} className='btn clear'>Clear</button>

      <h3>Names - {data.length}</h3>
      <p>{errormsg}</p>
      <h5>Random name = {ranName}</h5>
      <NameTable data={data} remove={removeData}/>
    </div>
  );
  }

export default App;
