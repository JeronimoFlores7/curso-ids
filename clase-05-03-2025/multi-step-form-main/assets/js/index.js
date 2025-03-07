


document.getElementById("btn-1").addEventListener(
    "click",
    () => {
        event.preventDefault(); 
      document.getElementById("step-1").hidden = true;
      document.getElementById("step-2").hidden = false;
      document.getElementById("step-3").hidden = true;
    },
    
  );

  document.getElementById("btn-2").addEventListener(
    "click",
    () => {
        event.preventDefault(); 
        document.getElementById("step-1").hidden = true;
        document.getElementById("step-2").hidden = true;
        document.getElementById("step-3").hidden = false;
    },
    
);

  document.getElementById("btnBack-1").addEventListener(
    "click",
    () => {
        event.preventDefault(); 
        document.getElementById("step-1").hidden = false;
        document.getElementById("step-2").hidden = true;
        document.getElementById("step-3").hidden = true;
    },
    
);

document.getElementById("btnBack-2").addEventListener(
    "click",
    () => {
        event.preventDefault(); 
        document.getElementById("step-1").hidden = true;
        document.getElementById("step-2").hidden = false;
        document.getElementById("step-3").hidden = true;
    },
    
);


