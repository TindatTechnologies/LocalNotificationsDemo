import { Component } from '@angular/core';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}

  async onClick () {
    let options: ScheduleOptions={
      notifications:[
        {
          id:111,
          title:"pepe",
          body:"aaa",
          largeBody:"Get",
          summaryText:"qq!"
        }
      ]
    }

    try {
      await LocalNotifications.schedule(options)
    }
    catch(ex) {
      alert(JSON.stringify(ex));
    }

  }
  


}

