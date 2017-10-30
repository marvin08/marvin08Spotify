import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SpotifyService } from './services/spotify.service';


@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  entryComponents: [AboutComponent, SearchComponent],
  providers: [SpotifyService] 
})

export class AppComponent { }
