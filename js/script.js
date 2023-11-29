function actualizarReloj() {
  let reloj = document.getElementById("reloj");
  let n = new Date();

  let hora = n.getHours();
  let minutos = n.getMinutes();
  let segundos = n.getSeconds();
  let ampm = hora >= 12 ? "PM" : "AM";

  hora = hora % 12;
  hora = hora ? hora : 12;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  let dia = n.toLocaleDateString(undefined, { weekday: "long" });
  let tiempo = hora + ":" + minutos + ":" + segundos + " " + ampm;
  
  let fecha = n.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });

  reloj.innerHTML = dia + " " + fecha + "<br>" + tiempo;
}

setInterval(actualizarReloj, 1000);