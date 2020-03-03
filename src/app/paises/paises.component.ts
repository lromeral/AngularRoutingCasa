import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit, OnDestroy {

  constructor(private ruta: ActivatedRoute, private http: HttpClient) {

  }

  queryPais: string = "";
  paises: any[] = [];

  ngOnInit(): void {
    this.getCountries().subscribe(
      (res) => {
        this.paises=res;
        console.log(this.paises)}
        ,
      err => console.log(err),
      () => console.log("getCountries OK")
      );

  }
  ngOnDestroy(): void{
    
  }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/all');
  }
  getContry (country: string):Observable<any[]>{
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/name/' + country)
  }
}
