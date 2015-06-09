import { Component, Template, bootstrap } from 'angular2/angular2';

@Component({
    selector: 'spotify-app'
})
@Template({
    url: 'views/main.html'
})
class SpotifyApp {
    constructor(){
        console.log('Constructing the app');
        this.name = 'Andres';
    }
}

bootstrap(SpotifyApp);
