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
         let index = links.findIndex(itm=>itm.name===data.name);
         if(index!==-1){
          // if exists then replace the old data to the new
            const existedData = [...links];
            existedData[index] = data;
            setLinks(existedData)
         }else{
         // otherwise add the new data
          const addingId = {
            ...data,
            id:Math.random().toString(),
           }
          setLinks(prevState=>[addingId,...prevState])
         }
       
  }

  const edithandler = (editData) =>{
    seteditformData(editData)
  }

  const removeHandler = (deleteData) =>{
      const updatedData = links.filter((itm)=>itm.name !== deleteData.name);
      console.log(updatedData)
      setLinks(updatedData)     
  }

  return (
    <div className="App">
     <Form onTranserferData={TranserferDataHandler} name={editformData.name} url={editformData.url} id={editformData.id}/>
     {
      links.map((itm)=>{
        return(
        <UrlLists key={itm.id} id={itm.id} name={itm.name} url={itm.url} onEdit={edithandler} onRemove={removeHandler}/>)
        
      })
     }
    </div>
  );
}

export default App;
