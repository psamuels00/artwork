function swipeLeftRight(elemId, leftFunc, rightFunc) {
  elem = document.getElementById(elemId);
  const manager = new Hammer.Manager(elem);

  const swipe = new Hammer.Swipe({
    direction: Hammer.DIRECTION_HORIZONTAL
  });
  manager.add(swipe);

  manager.on('swipe', function(e) {
    let direction = e.offsetDirection;
    if (direction === 2) {
      rightFunc();
    } else if (direction === 4) {
      leftFunc();
    }
  });
}