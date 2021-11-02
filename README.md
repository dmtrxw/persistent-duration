# persistent-duration

WorkerTimers wrapper to count and save duration into localStorage

## Installation

```
npm install --save persistent-duration
```

## Usage

```javascript
import * as duration from 'persistent-duration'

// Set an interval on worker, func will increment the duration every 1000ms
const intervalId = duration.start()

// Stop the interval.
// Keep in mind that duration still persists even though
// you have stopped the interval
duration.stop(intervalId)

// Get duration (returns a number)
duration.get()

// Remove duration from localStorage
duration.clear()
```
