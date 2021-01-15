import { Current } from 'src/app/task/model/current.model'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return from(fetch('https://mockend.com/org/repo/posts')
    .then(res => res.json())
    .then(json => {
      console.log(json, ' mocked');
      return 'json';
    }))

    // return this.http.get('../../../../assets/todos.json')
    // return from(fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((response) => response.json())
    // .then((json) => {
    //   console.log(json);
    //   return json;
    // }))
  }

  addTodo() {
    // return this.http.post('../../../../assets/todos.json',todo,'').subscribe(console.log)
    fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST'
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

  editTodo() {

  }

  deleteTodo() {

  }
}
