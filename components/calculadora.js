// this function realizes the operations, it takes the two numbers and the operation to be performed
function RealizaroPeracion() {
  //we define variables to store the  entered numbers, those numbers are parse to int
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;
  const resultElement = document.getElementById("result");
  const continuar = document.getElementById("continue");
  const BtnCalcular = document.getElementById("calcular");
  BtnCalcular.disabled = true;

  let resultado = 0;
  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        alert("Error: División por cero no permitida.");
        BtnCalcular.disabled = false;
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      alert("Operación no válida.");
      BtnCalcular.disabled = false;
      return;
  }
  resultElement.innerHTML = `El resultado de la ${operacion} es: ${resultado}`;

  if (!document.getElementById("yes") && !document.getElementById("no")) {
    continuar.innerHTML = `
      <p class="message" id="message">¿Desea continuar?</p> 
      <button class="yes" id="yes">Sí</button> 
      <button class="no" id="no">No</button>
    `;

    document.getElementById("yes").addEventListener("click", () => {
      alert("continuemos");
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      document.getElementById("result").innerText = "";
      document.getElementById("yes").remove();
      document.getElementById("no").remove();
      document.getElementById("message").remove();
      BtnCalcular.disabled = false;
    });
    document.getElementById("no").addEventListener("click", () => {
      alert("gracias por usar la calculadora!!! hasta luego");
      window.location.href = "../../CalculadoraBasica/home.html";
    });
  }
}
