import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataserviceService } from './dataservice.service';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetFitt';

  constructor(private dataService:DataserviceService,
              private Fire:AngularFirestore){}

list:User[];

  getfiredata()
{
this.dataService.getfiredata().subscribe(actionArray =>{
  this.list=actionArray.map(item=>{
    return{
      id: item.payload.doc.id,
      ...item.payload.doc.data()  as User
      
    }
    
  });
  console.log(this.list);
})

}


}
