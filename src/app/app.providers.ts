import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import { GitHubService } from './services/git-hub.service';
import { ColorService } from "./services/color.service";
import { LoginService } from "./services/login.service";
import { LoginGetService } from './services/login.get.service';
import { AddService } from './services/add.service';

export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    GitHubService,
    ColorService,
    LoginService,
    LoginGetService,
    AddService
];
