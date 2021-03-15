import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const[file,setFile]=useState('');
  const [filename,setFilename]=useState('choose file')

function change(e)
{
  console.log(e.target.files[0].name);
  setFile(e.target.files[0]);
  setFilename(e.target.files[0].name);
}
function submit(e)

{
  e.preventDefault();
  const formData=new FormData();
  formData.append('file')
}

  return (
    <div className="App">
     
     <form>
       <input onChange={change} type="file" /><br/>
       <button  onClick={submit}>submit</button>
     </form>
      </div>
  );
}

export default App;
