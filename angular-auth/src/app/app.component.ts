import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth.service';
import { ChartsComponent } from './components/charts/charts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private authService : AuthService){}
  
  async handleLogin(){
    var result = await this.authService.getToken().subscribe()
    console.log(result);
    
  }
  
}
