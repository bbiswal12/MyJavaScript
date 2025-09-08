 export class Product2
{
    details="";
    Name="";
    Price=0;
    Qty=0;
    Total(){
       return this.Price*this.Qty;
    }
    Print(){
       return this.Details=`Name=${this.Name} <br> Price=${this.Price} <br>  Qty=${this.Qty} <br>  Total=${this.Total()}`;
    }
}