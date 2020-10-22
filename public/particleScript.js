window.onload = function() {
  console.log("I HIT")
  Particles.init({
    selector: '.splash-background',
    maxParticles: 150,
    connectParticles: 'true',
    speed: 1,
    minDistance: 140,
    sizeVariations: 4,
    color: '#324ab2'
  });
};