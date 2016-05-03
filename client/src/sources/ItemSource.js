export default {
  fetch: () => {
    return new Promise((resolve, reject) => {
      fetch('mock-data.json').then(response => {
        response.json().then(data => {
          resolve(data.items);
        });
      });
    });
  }
}