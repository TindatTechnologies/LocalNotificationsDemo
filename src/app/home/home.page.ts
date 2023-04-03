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

    await LocalNotifications.requestPermissions();
    
    try {
      await LocalNotifications.schedule(options)
    }
    catch(ex) {
      alert(JSON.stringify(ex));
    }

  }
  
  async onClick2 () {
    let options2: ScheduleOptions={
      notifications:[
        {
          id:111,
          title:"francisco",
          body:"aaa",
          largeBody:"Get",
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          summaryText:"qq!"
        }
      ]
    }

    try {
      await LocalNotifications.schedule(options2)
    }
    catch(ex) {
      alert(JSON.stringify(ex));
    }

  }


}

