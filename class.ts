{



     class allProducts {


          constructor( public p1: string, public p2: string, public p3: string, public p4: string ){

          }

          products(){

             console.log(` this products name is >>>>>> ${this.p1}, ${this.p2}, ${this.p3}, ${this.p4} `)

          }

     }

     const pro1 = new allProducts(" batter ", "cheese", "ghee", "poonir");
     console.log(pro1)

     pro1.products();










}