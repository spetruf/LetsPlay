import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../../services/fireauth.service';
import { FireadbService } from '../../services/fireadb.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  items: any[];
  constructor(public fireAuthService: FireauthService,
              public fireDBService: FireadbService) {
      fireAuthService.SignIn('sergio@petruf.com', '123456');
      // tslint:disable-next-line: deprecation
      fireDBService.getItmes().subscribe( items => {this.items = items;
                                                    console.log('items', this.items); } );
   }

  ngOnInit() {
  }

}
