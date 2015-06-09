export class ArtistsStore {
    constructor(){
        this.artists = [];
    }

    fetch(){
        return fetch('https://api.spotify.com/v1/artists/4fSPtBgFPZzygkY6MehwQ7/albums').then(function(response){
            return response.json();
        });
    }
}
