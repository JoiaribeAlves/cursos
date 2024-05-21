function challenge(rate?: number) {
  if (typeof rate === "undefined") {
    console.log("Avaliação não fornecida!");
  } else if (typeof rate === "number") {
    if (rate < 1 || rate > 5) {
      console.log("Nota inválida!");
    } else if (rate === 1) {
      console.log(`${rate} estrela`);
    } else if (rate > 1) {
      console.log(`${rate} estrelas`);
    }
  } else {
    console.log("Nota inválida!");
  }
}
