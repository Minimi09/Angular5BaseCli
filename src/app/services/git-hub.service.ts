import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";

const _userUrl = 'https://api.github.com/users';
//const _userUrl = 'http://10.11.1.100:8080/users';

@Injectable()
export class GitHubService{

    constructor(private _httpClient: HttpClient){

    }

    getUserInfo(userName:String)
    {     
        return this._httpClient.get(`${_userUrl}/${userName}`,{responseType:'json'}) 
               .map((x:any) => {
                let gitHubData= new GitHubModel();
                gitHubData.avatarURL = x.avatar_url;
                gitHubData.followers = x.followers;
                gitHubData.following = x.following;
                gitHubData.login = x.login;
                gitHubData.name = x.name; 
                return gitHubData;  
            })
            .catch(this.handleError);
                }
    
    handleError(error:any) 
    {
        console.log(`Error : ${error}`)
        return Observable.throw(error.json() || 'Server error' );
    }

}