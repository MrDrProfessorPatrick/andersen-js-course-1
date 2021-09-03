function parseJSON(jsonStr, successCb, failureCb) {
  try {
    let parseRes = JSON.parse(jsonStr);
    successCb(parseRes);
  } catch (error) {
    failureCb(error);
  }
}

function successCb(res) {
  console.log('Success Parse', res);
}

function failureCb(err) {
  console.log('Error', err);
}

parseJSON('{ "x": 10 }', successCb, failureCb);
parseJSON('{ x }', successCb, failureCb);
parseJSON('{  }', successCb, failureCb);
