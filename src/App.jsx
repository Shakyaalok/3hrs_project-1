import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Form from './Components/Form';
import UrlLists from './Components/UrlLists';

function App() {
      
  const [links,setLinks] = useState([
    { id:'1',name:'google',url:'https://www.google.com/'},
    {id:'2',name:'youtube',url:'https://www.youtube.com/'}
  ])

  const [editformData,seteditformData] = useState('')
  

  const TranserferDataHandler = (data) => {
         const addingId = {
          ...data,
          id:Math.random().toString(),
         }
        setLinks(prevState=>[addingId,...prevState])
  }

  const edithandler = (editData) =>{
    seteditformData(editData)
  }

  return (
    <div className="App">
     <Form onTranserferData={TranserferDataHandler} name={editformData.name} url={editformData.url} />
     {
      links.map((itm)=>{
        return(
        <UrlLists key={itm.id} id={itm.id} name={itm.name} url={itm.url} onEdit={edithandler}/>)
        
      })
     }
    </div>
  );
}

export default App;
