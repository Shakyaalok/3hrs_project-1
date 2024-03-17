import React,{useState,useEffect} from "react";


const Form = (props) =>{


    const [name,setName] = useState('');
    const [url,setUrl] = useState('');

// if we dont include these below if then a warning of controlled or uncontrolled components occurs
    useEffect(() => {
        if (props.name !== undefined) {
            setName(props.name);
        }
        if (props.url !== undefined) {
            setUrl(props.url);
        }
    }, [props.name, props.url]);
    

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