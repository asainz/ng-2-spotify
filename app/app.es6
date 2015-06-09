import { Component, Template, bootstrap, Foreach } from 'angular2/angular2';
import { Search } from 'services/search';

@Component({
    selector: 'spotify-app',
    componentServices: [
        Search
    ]
})
@Template({
    url: 'views/main.html',
    directives: [Foreach]
})
class SpotifyApp {
    searchAPI: Search;
    constructor(searchAPI: Search){
        console.log('Constructing the app');
        this.name = 'Andres';

        this.searchAPI = searchAPI;
    }

    searchArtists(q){
        this.searchAPI.fetch(q.value, {type: 'artist,album,playlist'}).then(function(response){
            this.artists = response.artists.items;
            this.albums = response.albums.items;
            this.playlists = response.playlists.items;
        }.bind(this));
    }

}

bootstrap(SpotifyApp);
