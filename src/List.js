function List(props) {
    const names = props.names;
    const listItems = names.map((namer) => <li key={namer.toString()}> {namer} </li>
    );


    
    return (
       <ul> {listItems} </ul>

    );
  }
  
  export default List;

 