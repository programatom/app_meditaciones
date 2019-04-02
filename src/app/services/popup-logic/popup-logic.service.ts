import { Injectable } from '@angular/core';
import { ObjAmigo } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PopupLogicService {

  friendRequesting = {} as ObjAmigo;

  constructor() { }

  checkPopupStateInArray(array){
    for(let i = 0; i < array.length; i ++){
      let arrayElement = array[i];
      let popupState = arrayElement.popup_state;
      if(popupState == undefined){
        return {
          "status" : false,
          "data":null
        };
      }
      if(popupState == 1){
        return{
          "status" : true,
          "data": arrayElement
        }
      }
    }
    return {
      "status" : false,
      "data":null
    }
  }



}
