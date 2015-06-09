export class Search {
    constructor(){

    }

    fetch(q, opts){
        opts = opts || {};
        q = q || 'The libertines';
        var type = opts.type || 'artist';

        return fetch('https://api.spotify.com/v1/search?q=' + q + '&type=' + type).then(function(response){
            return response.json();
        });
    }
}
