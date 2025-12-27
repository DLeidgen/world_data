import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

    mapData(mapSVG: SVGPathElement): Observable<any> {
      let api: string = `https://api.worldbank.org/V2/country/${mapSVG.id}?format=json`;
    return this.http.get(api);
  }

    frmData(frmcc: string): Observable<any>{
      let api: string = `https://api.worldbank.org/V2/country/${frmcc}?format=json`;
    return this.http.get(api);
  }
}
