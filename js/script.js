function updateClock() {
    var now = new Date();
    var day = now.toLocaleDateString('es-AR', { weekday: 'long' });
    var date = now.toLocaleDateString('es-AR', { month: 'long', day: 'numeric', year: 'numeric' });
    var time = now.toLocaleTimeString('es-AR', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

    document.getElementById('day').textContent = day;
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
  }

  setInterval(updateClock, 1000);