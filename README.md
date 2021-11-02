# persistent-duration

WorkerTimers wrapper to count and save duration into localStorage

## Installation
```
npm install --save persistent-duration
```

## Usage
```javascript
import * as duration from 'persistent-duration'
```

## Available methods

### `start()`
Set an interval on worker, func will increment the duration every 1000ms

```javascript
const intervalId = duration.start()
```

### `stop(id)`
Stop the interval

```javascript
duration.stop(intervalId)
```

### `get()`
Get current duration. Returns a number

### `clear()`
Remove duration from `localStorage`

```javascript
duration.clear()
```
