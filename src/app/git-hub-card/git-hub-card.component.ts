import { Component , OnInit, OnDestroy} from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";


@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit, OnDestroy {
   
    gitHubData:GitHubModel

    constructor(){
        this.gitHubData = new GitHubModel();
        this.gitHubData.avatarUrl = 'https://avatars3.githubusercontent.com/u/38266223?v=4';
        this.gitHubData.followers = 1;
        this.gitHubData.following = 1;
        this.gitHubData.name= 'Minely';
        this.gitHubData.login= 'Minimi09';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }

}