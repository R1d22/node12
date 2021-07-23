const formEl = document.querySelector('.planets');

formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    // console.log('ev:', ev.target)
    const formData = new FormData(formEl);
    const getId = formData.get('planet');
    //console.log(getId);

    const url = `https://swapi.dev/api/planets/${getId}`;
    const result = await axios.get(url);
    console.log(result.data.name);
    
});


