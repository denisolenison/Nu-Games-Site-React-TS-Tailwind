

function AtmosphereBlock({atmosphere}: any) {

    return (
      <h1 className="mt-1" style={{ left: "auto", right:"auto", textAlign:"center"}}>Атмосфера: 
           {atmosphere > 0 ? (<span className="text-green-600 font-bold"> +{atmosphere} </span>)
           : (atmosphere == 0 ? (<span className="text-yellow-600 font-bold"> {atmosphere} </span>)
           : (<span className="text-red-600 font-bold"> {atmosphere} </span>))}</h1>
    );
  }
  
  export default AtmosphereBlock;