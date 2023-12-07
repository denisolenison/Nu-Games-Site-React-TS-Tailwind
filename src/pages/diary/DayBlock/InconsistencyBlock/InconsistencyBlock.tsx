

function InconsistencyBlock({inc_min, inc_max, lang}: any) {

    return (
      <h1 className="mt-1" style={{ left: "auto", right:"auto", textAlign:"center"}}>{lang == "ru" ? "Противоречивость: от " : "Inconsistency: from "}
      <span className="text-red-600 font-bold"> -{inc_min} </span>
      {lang == "ru" ? " до " : " to "}
       <span className="text-green-600 font-bold"> +{inc_max} </span>
       </h1>
    );
  }
  
  export default InconsistencyBlock;