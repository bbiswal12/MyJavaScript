export class Product
{
    Name="";
    Price=0;
    Qty=0;
    Total(){
        return this.Price*this.Qty;
     }
     Print(){
        return `Name=${this.Name}<br>Price=${this.Price}<br>Qty=${this.Qty}<br>Total=${this.Total()}`;
     }
} 