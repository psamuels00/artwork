{#
|-----------------------------------------------------------------------------------------
| Handle keyboard keys and swipe left/right on any image for navigation.
|
| For any page using this as a layout, prev and next will be extracted from pagination
| data, if available.  Any page may define literal values for prev, next, enter, or
| escape in the front matter (which would override pagination data if both are present).
| In all these cases, goto* functions are automatically created and used to respond
| to keyboard keys and swipe left/right.
|
| When the value of prev, next, enter, or escape is not a literal, the goto* function
| is defined directly in the pagination template and indicated using 'goto' in the
| front matter, eg: goto: ['prev', 'next'] to mean gotoPrev() and gotoNext() are defined.
|-----------------------------------------------------------------------------------------
#}

{% set prev = prev or pages.lookup[page.url].prev %}
{% set next = next or pages.lookup[page.url].next %}
{% set enter = pages.lookup[page.url].enter %}

{% if prev or next or enter or escape or goto %}
  <script type="text/javascript">
    {% if prev and not (goto and 'prev' in goto) %}
      function gotoPrev() {
        window.location.href = '{{prev | url}}'
      }
    {% endif %}

    {% if next and not (goto and 'next' in goto) %}
      function gotoNext() {
        window.location.href = '{{next | url}}'
      }
    {% endif %}

    {% if enter and not (goto and 'enter' in goto) %}
      function gotoEnter() {
        event.preventDefault();
        window.location.href = '{{enter | url}}'
      }
    {% endif %}

    {% set prevEvent = prev or (goto and 'prev' in goto) %}
    {% set nextEvent = next or (goto and 'next' in goto) %}
    {% set enterEvent = enter or (goto and 'enter' in goto) %}
    {% set escapeEvent = escape or (goto and 'escape' in goto) %}

    {% if prevEvent or nextEvent %}
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
    {% endif %}

    {% if prevEvent or nextEvent or enterEvent or escapeEvent %}
      document.addEventListener('keydown', function (event) {
        {% if prevEvent %}
          if (event.key === 'ArrowLeft') {
            gotoPrev();
          }
        {% endif %}

        {% if nextEvent %}
          if (event.key === 'ArrowRight') {
            gotoNext();
          }
        {% endif %}

        {% if enterEvent %}
          if (event.key === 'Enter' || event.key === 'ArrowDown') {
            gotoEnter();
          }
        {% endif %}

        {% if escapeEvent %}
          if (event.key === 'Escape' || event.key === 'ArrowUp') {
            gotoEscape();
          }
        {% endif %}
      });
    {% endif %}
  </script>
{% endif %}
