import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent} from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { SearchComponent } from './components/search/search.component';
import { routing } from './app.routes';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
