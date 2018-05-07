import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";
import { AddModel } from "../model/add-model";

const _userUrl = 'http://localhost:7001/scheduler-web/resources/catalog/agregar';

@Injectable()
export class AddService{

    constructor(private _httpClient: HttpClient){

    }

    putUserInfo(addModel : AddModel)
    {    //console.log(addModel);
         return this._httpClient.post(_userUrl, addModel);
    }
 
    handleError(error:any) 
    {
        console.log(`Error : ${error}`)
        return Observable.throw(error.json() || 'Server error' );
    }

}