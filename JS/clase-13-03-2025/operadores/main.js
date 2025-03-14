
    const tablaAnd = document.getElementById("and");
  
    const and = [
      { caso: "False && False", entrada1: "false", entrada2: "false", resultado: false },
      { caso: "False && False", entrada1: "!true", entrada2: "!true", resultado: false },
      { caso: "False && False", entrada1: "!10", entrada2: "false", resultado: false },
      { caso: "False && False", entrada1: "!5", entrada2: "!!''", resultado: false },
      { caso: "False && False", entrada1: "!!null", entrada2: "!!''", resultado: false },
      { caso: "False && False", entrada1: "!{}", entrada2: "false", resultado: false },
      { caso: "False && False", entrada1: "!new Date()", entrada2: "false", resultado: false },
      { caso: "False && False", entrada1: "!!NaN", entrada2: "!'hola'", resultado: false },
      { caso: "False && False", entrada1: "false", entrada2: "array vacío", resultado: false },
      { caso: "False && False", entrada1: "!Infinity", entrada2: "false", resultado: false },
  
      { caso: "False && True", entrada1: "false", entrada2: "true", resultado: false },
      { caso: "False && True", entrada1: "!true", entrada2: "true", resultado: false },
      { caso: "False && True", entrada1: "!!0", entrada2: "true", resultado: false },
      { caso: "False && True", entrada1: "!'Hola'", entrada2: "!!'Mundo'", resultado: false },
      { caso: "False && True", entrada1: "!!null", entrada2: "true", resultado: false },
      { caso: "False && True", entrada1: "!!undefined", entrada2: "!!{}", resultado: false },
      { caso: "False && True", entrada1: "![]", entrada2: "true", resultado: false },
      { caso: "False && True", entrada1: "!{}", entrada2: "!!42", resultado: false },
      { caso: "False && True", entrada1: "!new Date()", entrada2: "true", resultado: false },
      { caso: "False && True", entrada1: "!!NaN", entrada2: "true", resultado: false },
  
      { caso: "True && False", entrada1: "true", entrada2: "false", resultado: false },
      { caso: "True && False", entrada1: "!!1", entrada2: "!true", resultado: false },
      { caso: "True && False", entrada1: "!''", entrada2: "false", resultado: false },
      { caso: "True && False", entrada1: "!!'texto'", entrada2: "!true", resultado: false },
      { caso: "True && False", entrada1: "!!{}", entrada2: "false", resultado: false },
      { caso: "True && False", entrada1: "!![]", entrada2: "!''", resultado: false },
      { caso: "True && False", entrada1: "!!42", entrada2: "false", resultado: false },
      { caso: "True && False", entrada1: "!!Infinity", entrada2: "!true", resultado: false },
      { caso: "True && False", entrada1: "!!new Date()", entrada2: "false", resultado: false },
      { caso: "True && False", entrada1: "!!'cadena'", entrada2: "!!null", resultado: false },
  
      { caso: "True && True", entrada1: "true", entrada2: "true", resultado: true },
      { caso: "True && True", entrada1: "!0", entrada2: "!''", resultado: true },
      { caso: "True && True", entrada1: "!!1", entrada2: "!!'Jero'", resultado: true },
      { caso: "True && True", entrada1: "!false", entrada2: "!!42", resultado: true },
      { caso: "True && True", entrada1: "!![]", entrada2: "!!{}", resultado: true },
      { caso: "True && True", entrada1: "!!'Hola'", entrada2: "!!'Mundo'", resultado: true },
      { caso: "True && True", entrada1: "!!Infinity", entrada2: "!!new Date()", resultado: true },
      { caso: "True && True", entrada1: "!!'0'", entrada2: "!!1", resultado: true },
      { caso: "True && True", entrada1: "!!null == false", entrada2: "!!undefined == false", resultado: true },
      { caso: "True && True", entrada1: "!!5.5", entrada2: "!''", resultado: true },
    ];
  
    let casoActualAnd = "";
    let contadorAnd = 0;
    let firstRow = null;
  
    and.forEach((fila, index) => {
      let tr = document.createElement("tr");
  
      if (fila.caso !== casoActualAnd) {
        casoActualAnd = fila.caso;
        contadorAnd = and.filter((d) => d.caso === casoActualAnd).length;
        firstRow = index;
  
        let tdCaso = document.createElement("td");
        tdCaso.rowSpan = contadorAnd;
        tdCaso.textContent = fila.caso;
        tr.appendChild(tdCaso);
      }
  
      let tdEntrada1 = document.createElement("td");
      tdEntrada1.textContent = fila.entrada1;
      tr.appendChild(tdEntrada1);
  
      let tdEntrada2 = document.createElement("td");
      tdEntrada2.textContent = fila.entrada2;
      tr.appendChild(tdEntrada2);
  
      let tdResultado = document.createElement("td");
      tdResultado.textContent = fila.resultado;
      tr.appendChild(tdResultado);
  
      tablaAnd.appendChild(tr);
    });

  
 
        const tablaOr = document.getElementById("or");
      
        const or = [
          { caso: "False || False", entrada1: "false", entrada2: "false", resultado: false },
          { caso: "False || False", entrada1: "!true", entrada2: "!true", resultado: false },
          { caso: "False || False", entrada1: "!!null", entrada2: "!!undefined", resultado: false },
          { caso: "False || False", entrada1: "!!0", entrada2: "!!''", resultado: false },
          { caso: "False || False", entrada1: "!!NaN", entrada2: "!!false", resultado: false },
          { caso: "False || False", entrada1: "!5", entrada2: "!1", resultado: false },
          { caso: "False || False", entrada1: "!{}", entrada2: "![]", resultado: false },
          { caso: "False || False", entrada1: "!new Date()", entrada2: "!42", resultado: false },
          { caso: "False || False", entrada1: "!!null", entrada2: "!!''", resultado: false },
          { caso: "False || False", entrada1: "!!undefined", entrada2: "!!0", resultado: false },
      
          { caso: "False || True", entrada1: "false", entrada2: "true", resultado: true },
          { caso: "False || True", entrada1: "!true", entrada2: "true", resultado: true },
          { caso: "False || True", entrada1: "!!0", entrada2: "!!'Hola'", resultado: true },
          { caso: "False || True", entrada1: "!'Hola'", entrada2: "!!'Mundo'", resultado: true },
          { caso: "False || True", entrada1: "!!null", entrada2: "!!1", resultado: true },
          { caso: "False || True", entrada1: "!!undefined", entrada2: "!!{}", resultado: true },
          { caso: "False || True", entrada1: "![]", entrada2: "!!true", resultado: true },
          { caso: "False || True", entrada1: "!{}", entrada2: "!!42", resultado: true },
          { caso: "False || True", entrada1: "!new Date()", entrada2: "!!true", resultado: true },
          { caso: "False || True", entrada1: "!!NaN", entrada2: "!!'texto'", resultado: true },
      
          { caso: "True || False", entrada1: "true", entrada2: "false", resultado: true },
          { caso: "True || False", entrada1: "!!1", entrada2: "!true", resultado: true },
          { caso: "True || False", entrada1: "!''", entrada2: "false", resultado: true },
          { caso: "True || False", entrada1: "!!'texto'", entrada2: "!true", resultado: true },
          { caso: "True || False", entrada1: "!!{}", entrada2: "false", resultado: true },
          { caso: "True || False", entrada1: "!![]", entrada2: "!''", resultado: true },
          { caso: "True || False", entrada1: "!!42", entrada2: "false", resultado: true },
          { caso: "True || False", entrada1: "!!Infinity", entrada2: "!true", resultado: true },
          { caso: "True || False", entrada1: "!!new Date()", entrada2: "false", resultado: true },
          { caso: "True || False", entrada1: "!!'cadena'", entrada2: "!!null", resultado: true },
      
          { caso: "True || True", entrada1: "true", entrada2: "true", resultado: true },
          { caso: "True || True", entrada1: "!0", entrada2: "!''", resultado: true },
          { caso: "True || True", entrada1: "!!1", entrada2: "!!'texto'", resultado: true },
          { caso: "True || True", entrada1: "!false", entrada2: "!!42", resultado: true },
          { caso: "True || True", entrada1: "!![]", entrada2: "!!{}", resultado: true },
          { caso: "True || True", entrada1: "!!'Hola'", entrada2: "!!'Mundo'", resultado: true },
          { caso: "True || True", entrada1: "!!Infinity", entrada2: "!!new Date()", resultado: true },
          { caso: "True || True", entrada1: "!!'0'", entrada2: "!!1", resultado: true },
          { caso: "True || True", entrada1: "!!5.5", entrada2: "!''", resultado: true },
          { caso: "True || True", entrada1: "!!personas.size", entrada2: "resultado", resultado: true },
        ];
      
        let casoActualOr = "";
        let contadorOr = 0;
        let firstRowIndex = null;
      
        or.forEach((fila, index) => {
          let tr = document.createElement("tr");
      
          if (fila.caso !== casoActualOr) {
            casoActualOr = fila.caso;
            contadorOr = or.filter((d) => d.caso === casoActualOr).length;
            firstRowIndex = index;
      
            let tdCaso = document.createElement("td");
            tdCaso.rowSpan = contadorOr;
            tdCaso.textContent = fila.caso;
            tr.appendChild(tdCaso);
          }
      
          let tdEntrada1 = document.createElement("td");
          tdEntrada1.textContent = fila.entrada1;
          tr.appendChild(tdEntrada1);
      
          let tdEntrada2 = document.createElement("td");
          tdEntrada2.textContent = fila.entrada2;
          tr.appendChild(tdEntrada2);
      
          let tdResultado = document.createElement("td");
          tdResultado.textContent = fila.resultado;
          tr.appendChild(tdResultado);
      
          tablaOr.appendChild(tr);
        });

      