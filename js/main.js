AFRAME.registerComponent('main', {
  init: function () {
    this.start = Date.now();
    this.planets = [
      { id: 'mercury', radius: 15, speed: 0.02 },
      { id: 'venus', radius: 20, speed: 0.015 },
      { id: 'earth', radius: 27, speed: 0.01 },
      { id: 'mars', radius: 34, speed: 0.008 },
      { id: 'jupiter', radius: 45, speed: 0.005 },
      { id: 'saturn', radius: 58, speed: 0.004 },
      { id: 'uranus', radius: 70, speed: 0.003 },
      { id: 'neptune', radius: 80, speed: 0.0025 }
    ];
  },
  tick: function () {
    const elapsed = (Date.now() - this.start) / 1000;
    this.planets.forEach(planet => {
      const angle = elapsed * planet.speed;
      const x = planet.radius * Math.cos(angle);
      const z = planet.radius * Math.sin(angle);
      const el = document.querySelector(`#${planet.id}`);
      if (el) el.setAttribute('position', `${x} 0 ${z}`);
    });
  }
});
