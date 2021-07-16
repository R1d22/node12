const formEl = document.querySelector('.planets');

formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const getId = formData.get('planet');
    console.log(getId);

    //const url = `https://swapi.dev/api/planets/${getId}`;
    const result = await axios.post('/id', getId);
    console.log(result.data.name);
});


