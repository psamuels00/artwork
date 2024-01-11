function detectSwipe(elem_id, func) {
  let points = { sX: 0, sY: 0, eX: 0, eY: 0 };

  const min_x = 30;
  const max_x = 30;
  const min_y = 50;
  const max_y = 60;

  elem = document.getElementById(elem_id);

  elem.addEventListener('touchstart', e => {
    const t = e.touches[0];
    points.sX = t.screenX;
    points.sY = t.screenY;
  });

  elem.addEventListener('touchmove', e => {
    const t = e.touches[0];
    points.eX = t.screenX;
    points.eY = t.screenY;

    const horzX = (points.eX - min_x > points.sX) || (points.eX + min_x < points.sX);
    const horzY = (points.eY < points.sY + max_y) && (points.sY > points.eY - max_y) && (points.eX > 0);
    if (horzX && horzY) {
        e.preventDefault();
    }
  });

  elem.addEventListener('touchend', e => {
    const horzX = (points.eX - min_x > points.sX) || (points.eX + min_x < points.sX);
    const horzY = (points.eY < points.sY + max_y) && (points.sY > points.eY - max_y) && (points.eX > 0);
    const vertX = (points.eY - min_y > points.sY) || (points.eY + min_y < points.sY)
    const vertY = (points.eX < points.sX + max_x) && (points.sX > points.eX - max_x) && (points.eY > 0)

    let direction = '';
    if (horzX && horzY) {
      direction = (points.eX > points.sX) ? 'r' : 'l';
    } else if (vertX && vertY) {
      direction = (points.eY > points.sY) ? 'd' : 'up';
    }

    if (['l', 'r'].includes(direction)) {
      e.preventDefault();
      func(elem_id, e, direction);
    }

    points = { sX: 0, sY: 0, eX: 0, eY: 0 };
  });
}

function swipeLeftRight(elem_id, leftFunc, rightFunc) {
  function dispatchSwipe(elem_id, event, direction) {
    if (direction === 'r') {
      leftFunc(event);
    } else if (direction === 'l') {
      rightFunc(event);
    }
  }

  detectSwipe(elem_id, dispatchSwipe);
}