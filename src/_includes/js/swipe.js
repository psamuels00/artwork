<script type="text/javascript">
  document.addEventListener('DOMContentLoaded', () => {
    // Register swipe functions now that deferred Hammer JS loading has completed.
    swipeLeftRight(gotoPrev, gotoNext);
  });

  function swipeLeftRight(leftFunc, rightFunc) {
    elements = document.getElementsByClassName('swipeable');
    for (let elem of elements) {
        swipeLeftRightElem(elem, leftFunc, rightFunc);
    }
  }

  function swipeLeftRightElem(elem, leftFunc, rightFunc) {
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
</script>
