import { Injectable } from "@angular/core";
import { CapacitorHttp, HttpOptions, HttpResponse } from "@capacitor/core";

@Injectable({
    providedIn: 'root'
})
export class CountriesHttpService{
    constructor(){
    }

    async get(options: HttpOptions){
        const response: HttpResponse = await CapacitorHttp.get(options);
        return response.data;
    }
}