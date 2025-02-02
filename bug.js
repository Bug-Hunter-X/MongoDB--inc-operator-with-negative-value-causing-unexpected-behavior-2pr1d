```javascript
//Incorrect usage of $inc operator
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { sequence: -1 }});
```