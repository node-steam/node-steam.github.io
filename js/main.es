fetch('/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        const rounds = new Vue({
            el: '.grid',
            data,
        });
    })
    .catch((error) => {
        console.error(error);
    });
