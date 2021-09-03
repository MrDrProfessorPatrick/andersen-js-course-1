function delay(ms) {
  return new Promise(function(resolved) {
    setTimeout(() => {
      resolved(100);
    }, ms);
  });
}

delay(3000).then(value => console.log('Done with ', value));
