import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Preference } from '../services/preference';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public showTab = true;

  constructor(public platform: Platform, public storage:Storage,
    public preference: Preference) {}

    ionViewWillEnter(){
  console.log('enter');
  this.showTabs();
  
    }

    showTabs(){
      this.storage.get('tab').then( data =>{
        if(data){
          this.storage.set('tab', this.showTab).then(data =>{
            console.log(data);
            
          })
        } else{
          this.storage.set('tab', this.showTab).then(data =>{
            console.log(data);
            
          })
        }
      })
    }
  }

