function getCatFact() {
    
    fetch('https://cat-fact.herokuapp.com/facts/random')
       
        .then(response => response.json())
      
        .then(data => {
            document.getElementById('cat-fact').textContent = data.text;
        })
      
        .catch(error => {
            console.error(error);
            document.getElementById('cat-fact').textContent = 'Sorry, something went wrong.';
        });
}
function refreshData() {
    getCatFact();
}

window.onload = refreshData;

document.getElementById('refresh-button').addEventListener('click', refreshData);