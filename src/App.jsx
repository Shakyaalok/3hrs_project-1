import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Form from './Components/Form';
import UrlLists from './Components/UrlLists';

function App() {
      
  const [links,setLinks] = useState([
    { id:'1',name:'google',url:'www.google.com'},
    {id:'2',name:'youtube',url:'www.youtube.com'}
  ])
  

  const TranserferDataHandler = (data) => {
         const addingId = {
          ...data,
          id:Math.random().toString(),
         }
        setLinks(prevState=>[addingId,...prevState])
  }

  

  return (
    <div className="App">
     <Form onTranserferData={TranserferDataHandler}/>
     {
      links.map((itm)=>{
        return(
        <UrlLists key={itm.id} id={itm.id} name={itm.name} url={itm.url} />)
        
      })
     }
    </div>
  );
}

export default App;
