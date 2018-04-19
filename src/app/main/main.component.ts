import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { SearchUserComponent } from "../search-user/search-user-component";
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  gitHubData: GitHubModel;  
  gitHubList: Array<GitHubModel>;  

  constructor(private _gitHubService:GitHubService ) {
    this.gitHubList = new Array<GitHubModel>();
   }

  ngOnInit() {
  
  }

  onSearchUser(userName : string)
  {
    this._gitHubService.getUserInfo(userName)
    .subscribe(
               value => {
                 this.gitHubList.push(value);
                 }
        );

  }
  delete(data : GitHubModel)
  {
    this.gitHubList=this.gitHubList.filter(x => x!=data)
  }

}
