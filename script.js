// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
 function fetchData(apiUrls) {
      return fetch(apiUrls).then(response => response.json());
    }

    // Function to fetch data from multiple APIs using Promise.all
    function fetchAllData() {
      const startTime = performance.now();
      const promises = apiUrls.map(fetchData);

      Promise.all(promises)
        .then(data => {
          const endTime = performance.now();
          const timeTaken = endTime - startTime;
          displayResult('Promise.all', timeTaken);
        })
        .catch(error => {
          displayResult('Promise.all', 'Error: ' + error.message);
        });
    }

    // Function to fetch data from multiple APIs using Promise.any
    function fetchAnyData() {
      const startTime = performance.now();
      const promises = apiUrls.map(fetchData);

      Promise.any(promises)
        .then(data => {
          const endTime = performance.now();
          const timeTaken = endTime - startTime;
          displayResult1('Promise.any', timeTaken);
        })
        .catch(error => {
          displayResult('Promise.any', 'Error: ' + error.message);
        });
    }

    // Function to display the results on the webpage
    function displayResult(method, timeTaken) {
      const resultsDiv = document.getElementById('output-all');
      resultsDiv.innerHTML = `${method} took ${timeTaken.toFixed(1)} milliseconds.`;
    }
function displayResult1(method, timeTaken) {
      const resultsDiv = document.getElementById('output-any');
      resultsDiv.innerHTML = `${method} took ${timeTaken.toFixed(1)} milliseconds.`;
    }

    // Call both fetch methods when the page loads
    fetchAllData();
    fetchAnyData();
