

function InconsistencyBlock({inc_min, inc_max}: any) {

    return (
      <h1 className="mt-1" style={{ left: "auto", right:"auto", textAlign:"center"}}>Противоречивость: от 
      <span className="text-red-600 font-bold"> -{inc_min} </span>
       до 
       <span className="text-green-600 font-bold"> +{inc_max} </span>
       </h1>
    );
  }
  
  export default InconsistencyBlock;