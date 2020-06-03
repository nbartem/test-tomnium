function getRates() {
    const rates = fetch('/data/rates.json')
        .then(response => response.json())
        .catch(() => console.error("Fetch error"));
    return rates;
  }
  
  export default getRates;