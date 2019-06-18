// import * as request from 'superagent';

export function sagaApi(input) {
  /*
  return request
    .get(`http://0.0.0.0:5000/saga?name=${input}`)
    .then(response => {
      const body = response.body;
      return { body };
    })
    .catch(error => {
      return { error };
    });
    */
  return { body: input, error: '' }
}
