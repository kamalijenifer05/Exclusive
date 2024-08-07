fetch('data/data2.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(browse => {
        const container = document.getElementById("con2");
        const elements = browse.map(items => {
            return `
             <div class = "con2-down">
                <div class = "phone">
                    <img class ="con2-img" src="${items.image2}" alt="${items.name}"></img>
                    <h2 class="con2-h2">${items.name1}</h2>
                </div>
            </div>
            `;
        }).join('');
        container.innerHTML = elements;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });