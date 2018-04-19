import { Component, OnInit, OnDestroy, Output , EventEmitter} from "@angular/core";
//import { EventEmitter } from "protractor";

@Component({
    selector : 'app-search-user-component',
    templateUrl : './search-user-component.html',
    styleUrls : ['./search-user-component.css']
})

export class SearchUserComponent implements OnInit, OnDestroy {
    
    @Output () onSearchUser = new EventEmitter<string>();
    userName : string ;
    
    constructor(){

    }

    onSearchClick() {
      this.onSearchUser.emit(this.userName);
     
    }
    
    
    ngOnInit() {
     
    }

    ngOnDestroy() {
        
    }
}