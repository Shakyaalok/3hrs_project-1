import React,{useState} from "react";


const Form = (props) =>{


    const [name,setName] = useState('');
    const [url,setUrl] = useState('');


    const nameHandler = (e) =>{
       setName(e.target.value);
    }

    const urlHandler = (e) =>{
       setUrl(e.target.value);
    }

    const submitHandler = (e) =>{
       e.preventDefault();
      
       const data = {
        name:name,
        url:url
       }
       console.log(data)
       props.onTranserferData(data)
       setName('');
       setUrl('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor="Name">Name</label>
            <input type="text"  value={name} onChange={nameHandler}/>
            </div>
            <div>
            <label htmlFor="Url">URL</label>
            <input type="text" value={url} onChange={urlHandler} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;