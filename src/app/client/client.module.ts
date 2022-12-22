import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { DefaultVideoPipe } from './pipes/default-video.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PromotionalProductsComponent } from './components/promotional-products/promotional-products.component';
import { TitleComponent } from './components/shared/title/title.component';
import { MethodsComponent } from './components/methods/methods.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ClientRoutingModule } from './client-routing.module';
import { DefaultLandingImagePipe } from './pipes/default-landing-image.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    DefaultVideoPipe,
    NavbarComponent,
    AboutUsComponent,
    BlogsComponent,
    PartnersComponent,
    PromotionalProductsComponent,
    TitleComponent,
    MethodsComponent,
    ButtonComponent,
    FooterComponent,
    ProgramsComponent,
    DefaultLandingImagePipe,
  ],
  exports:[NavbarComponent,FooterComponent],
  imports: [
    CommonModule,
    
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
