{

     
      type allResult = string | number  | boolean


      const name: allResult = 'bangladesh';

      const name1: allResult = 'toptal';

      const name2: allResult = 'DSA';

      const name3: allResult = 1950374409;

    //   const name4: allResult = null;

    //   const name5: allResult = undefined;

      const name6: allResult = true

      
      console.log(name, name1, name2, name3, name6)
       


      type value = number


      const  TY = (n: value, m: value) => {

          const all = n + m

          const v = all + 10 

          const a = v 

          console.log(a)


          if(a === 50){

            console.log('good typeAlias')

          } else {
          
             console.log('bad typeAlias')
 

          }
      }


      TY(600, 5000)




      type valueOf = number  


      const think = (ns: valueOf, ns2: valueOf) =>{
           

          const allThinks = ns + ns2 

          console.log(allThinks)


      }

      think( 1111, 21223)











}