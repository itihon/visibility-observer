## Visibility observer. Check visibility of a DOM element in viewport.

### Installation

```sh
npm install visibility-observer
```

### Usage

```js
  import visibilityObserver from 'visibility-observer';

  // start observing the target element
  visibilityObserver.observe(target);

  // get viewport size based on the property `rootBounds` of an IntersectionObserver instance
  const { width, height } = visibilityObserver.getLastViewportRect();

  // get a visibility state string for the target element: "FULLY_VISIBLE" | "PARTLY_VISIBLE" | "INVISIBLE"
  const visibilityState = visibilityObserver.getVisibilityState(target);

  // get the last IntersectionObserverEntry for the target element
  const lastRecord = visibilityObserver.getLastRecord(target);

  // stop observing the target element
  visibilityObserver.unobserve(target);
 
  // stop observing all target elements
  visibilityObserver.disconnect();
```