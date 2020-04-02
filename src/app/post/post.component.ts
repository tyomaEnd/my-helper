import {Component} from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {HttpClient} from '@angular/common/http';
// import {Post} from '../model/post';
//
//
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
}
//   form: FormGroup;
//
//   constructor(private http: HttpClient) {
//   }

  // ngOnInit() {
  //   this.form = new FormGroup({
  //     title: new FormControl('', [Validators.minLength(5), Validators.required]),
  //     link: new FormControl(''),
  //     text: new FormControl('', Validators.required)
  //   });
  //   // this.http.get<Post[]>('http://localhost:3000/posts')
  //   //   .subscribe(posts => {
  //   //     console.log('GetPost', posts);
  //   //     this.posts = posts;
  //   //   });
  // }

//   submit() {
//     const formData: Post = {...this.form.value};
//     console.log('Form', formData);
//     this.http.post<Post>('http://localhost:3000/posts', formData)
//       .subscribe(result => {
//         this.posts.push(formData);
//       });
//     this.form.reset();
//   }
// }
