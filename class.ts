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


     
     class allSkills {


       constructor( public s1: string , public s2: string  , public s3: string  , public s4: string   ){

       }


       skillZ(){

         console.log(` minhazul abedin apon skills is >>> ${this.s1}, ${this.s2}, ${this.s3}, ${this.s4} `)

       }
           
        
     }

     const allOfSkillAre = new allSkills( 'javaScript', 'next.js', 'react.js', 'redux'  ) 

     console.log(allOfSkillAre.s1, allOfSkillAre.s2, allOfSkillAre.s3, allOfSkillAre.s4)













}