import { Component } from '@angular/core';

@Component({
   //selector: 'app-servers',
   selector: '[app-servers]',//we can used like properties
  // selector :'.app-servers', we can select by class by use .app-servers
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent
 {
    ServerId : number=10
    ServerName : string= "My server"
    UserName : string =''
    AllowServer : boolean =false;

      constructor()
      {
          setTimeout(()=>{
            this.AllowServer=true;
          },2000);//Set time out to disabe/Enable buttons for after particular time
      }

   getServerName()//Method
  {
    return this.ServerName
  }

    OnServerCreated()
    {
       alert("You have clicked Add server button");


    }

    OnUpdateServer(event:Event)
    {
      // debugger;
      // console.log(event);
      // alert((<HTMLInputElement>event.target).value)
      return this.ServerName=(<HTMLInputElement>event.target).value;
    }

    OnClearUserName()
    {
      this.UserName='';
    }

  }



