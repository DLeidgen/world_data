import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../api/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  providers: [ApiService]
})
export class MapComponent {

  constructor(private http: HttpClient, private ApiService: ApiService){}

  ngOnInit(): void {
    let mapSVGPaths = document.querySelectorAll<SVGPathElement>('path');

    Array.prototype.forEach.call(mapSVGPaths, (mapSVG: SVGPathElement) => {
      mapSVG.addEventListener('mouseover', (event: MouseEvent) => {
        const path = event.target as SVGPathElement;
        path.style.fill = 'rgb(71,136,0)';
      });
      mapSVG.addEventListener('mouseleave', (event:MouseEvent)=> {
        const path = event.target as SVGPathElement;
        path.style.fill = '';
      });
      mapSVG.addEventListener('click', () => {
        this.ApiService.mapData(mapSVG).subscribe(data => {
          let mapData: any = data[1];
          console.log(data);
          console.log(mapData);
          let name: string = mapData[0].name;
          document.getElementById('name')!.innerText = name;
          let capital: string = mapData[0].capitalCity;
          document.getElementById('capital')!.innerText = capital;
          let region: string = mapData[0].region.value;
          document.getElementById('region')!.innerText = region;
          let income: string = mapData[0].incomeLevel.value;
          document.getElementById('income')!.innerText = income;
          let longitude: string = mapData[0].longitude;
          document.getElementById('longitude')!.innerText = longitude;
          let latitude: string = mapData[0].latitude;
          document.getElementById('latitude')!.innerText = latitude;
        });
      });
    });
  }
  mapCC = {
    ctCode: '',
    disabled: false
  };

  onClickSubmit() {
    let location: string = this.mapCC.ctCode;
    console.log(location);
    console.log(typeof location);
    this.ApiService.frmData(location).subscribe((data: any) => {
      let mapData: any = data[1];
      console.log(data);
      console.log(mapData);
      let name: string = mapData[0].name;
      document.getElementById('name')!.innerText = name;
      let capital: string = mapData[0].capitalCity;
      document.getElementById('capital')!.innerText = capital;
      let region: string = mapData[0].region.value;
      document.getElementById('region')!.innerText = region;
      let income: string = mapData[0].incomeLevel.value;
      document.getElementById('income')!.innerText = income;
      let longitude: string = mapData[0].longitude;
      document.getElementById('longitude')!.innerText = longitude;
      let latitude: string = mapData[0].latitude;
      document.getElementById('latitude')!.innerText = latitude;
    });
  }
}
