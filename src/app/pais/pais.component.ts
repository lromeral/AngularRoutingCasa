import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  constructor(private q: ActivatedRoute, private http: HttpClient) { }

  queryPais: string = "";
  pais: any[]=[]


  ngOnInit(): void {
    this.q.params.subscribe(
      (res) => {
        this.getPaisByName(res.id).subscribe(
          p => this.pais=p,
          err => console.log("Error Pais"),
          ()=> console.log ("complete pais")
        )}
        ,
      err => console.log(err),
      () => console.log ("query complete")
    )

  }
  getPaisByName(pais:string):Observable<any[]>{
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/name/' + pais);
  }

}
