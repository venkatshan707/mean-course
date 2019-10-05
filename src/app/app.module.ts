import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule,MatCardModule, MatButtonModule,MatToolbarModule,MatExpansionModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {PostCreateComponent} from './posts/post-create/post-create-component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostsService } from './posts.service';



@NgModule({
  declarations: [
    AppComponent, PostCreateComponent, HeaderComponent, PostListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,FormsModule,MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
