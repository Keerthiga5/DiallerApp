import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialler',
  templateUrl: './dialler.component.html',
  styleUrls: ['./dialler.component.css']
})
export class DiallerComponent implements OnInit {

  public numbr:number;
  public curr:string;

  constructor() { }

  ngOnInit() {
  }

  public enterVal(numbr)
  {
    this.curr= ((document.getElementById("num") as HTMLInputElement).value);
    switch(numbr)
    {
      case 1:
      {
        this.curr=this.curr+''+'1';
        break;
      }
      case 2:
      {
        this.curr=this.curr+''+'2';
        break;
      }
      case 3:
      {
        this.curr=this.curr+''+'3';
        break;
      }
      case 4:
      {
        this.curr=this.curr+''+'4';
        break;
      }
      case 5:
      {
        this.curr=this.curr+''+'5';
        break;
      }
      case 6:
      {
        this.curr=this.curr+''+'6';
        break;
      }
      case 7:
      {
        this.curr=this.curr+''+'7';
        break;
      }
      case 8:
      {
        this.curr=this.curr+''+'8';
        break;
      }
      case 9:
      {
        this.curr=this.curr+''+'9';
        break;
      }
      case 0:
      {
        this.curr=this.curr+''+'0';
        break;
      }
    }
    (document.getElementById("num")as HTMLInputElement).value=this.curr;
  }
  public delete()
  {
  
    this.curr=((document.getElementById("num") as HTMLInputElement).value);
    this.curr=this.curr.substring(0, this.curr.length-1);
    (document.getElementById("num")as HTMLInputElement).value=this.curr;

  }
  public ok()
  {
    console.log("ok");
    alert('The Number'+ (document.getElementById("num")as HTMLInputElement).value +'is successfully entered');
  }

}
