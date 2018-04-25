import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../app/model/git-hub-model";

const _userUrl = 'https://api.github.com/users';
//const _userUrl = 'http://10.11.1.100:8080/users';

@Injectable()
export class GitHubServiceMock{

    constructor(private _httpClient: HttpClient){

    }

getUserInfo(userName:String)
{

                let gitHubData= new GitHubModel();
                gitHubData.avatarURL = ' ';
                gitHubData.followers = 1;
                gitHubData.following = 1;
                gitHubData.login = 'Minimi09';
                gitHubData.name = userName;
/*
                let gitHubArr= new Array<GitHubModel>();
                gitHubArr.push(gitHubData);
  */  
                return Observable.of(gitHubData);
}
    
    handleError(error:any) 
    {
        console.log(`Error : ${error}`)
        return Observable.throw(error.json() || 'Server error' );
    }

}