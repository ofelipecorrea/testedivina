function mostrarValor6() {
  let total = 0;
  
  // Obter valores de quantidade e preços
  const quantidade1 = document.getElementById("quantidade1").value;
  const quantidade2 = document.getElementById("quantidade2").value;
  const quantidade3 = document.getElementById("quantidade3").value;
  const quantidade4 = document.getElementById("quantidade4").value;
  const quantidade5 = document.getElementById("quantidade5").value;
  const quantidade6 = document.getElementById("quantidade6").value;
  
  const preco1 = 49.90;
  const preco2 = 49.90;
  const preco3 = 49.90;
  const preco4 = 56.90;
  const preco5 = 56.90;
  const preco6 = 56.90;
  
  // Calcular total
  total += quantidade1 * preco1;
  total += quantidade2 * preco2;
  total += quantidade3 * preco3;
  total += quantidade4 * preco4;
  total += quantidade5 * preco5;
  total += quantidade6 * preco6;
  
  // Atualizar valor total
  document.getElementById("valorTotal").innerHTML = "Valor Total: R$" + total.toFixed(2);
}
