
const urls = [
    'http://www.json-generator.com/api/json/get/cfVGucaXPC',
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK',
  ];
  
  const requests = urls.map(url => fetch(url));
  
  function getArrayWithPromiseAll(array) {
    return Promise.all(array)
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(data => console.log(data));
  }
  
  getArrayWithPromiseAll(requests);