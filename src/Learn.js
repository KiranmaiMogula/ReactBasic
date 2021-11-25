function Hello(props)
{

  return (

  <div> 
    <h1> Hello, {props.name} </h1>
  
    <h2> It is {new Date().toLocaleTimeString()} </h2>
   <h3>Happy Learning </h3>  

  </div>

  

  );
 
  
}



export default Hello;
