import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: string[] = [
    'https://images.unsplash.com/photo-1496316778157-e826f5bb47f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f221991eeab09a9b12c98afdce2f1199&auto=format&fit=crop&w=1355&q=80',
    'https://images.unsplash.com/photo-1471874276752-65e2d717604a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d89f633e450817a42ddfaa45de0c0748&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f1ca1d883d6523669e6af0a68c7069ef&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1520655052451-d173e1fe5f85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23ef355cebd4ec85ec50249f865b139e&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1453473552141-5eb1510d09e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=153de990476e0de8e74c1b3b77709125&auto=format&fit=crop&w=1351&q=80',
  ];
}
