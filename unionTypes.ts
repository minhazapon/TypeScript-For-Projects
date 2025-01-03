{

    

      type allValue = string | number | boolean | undefined | null



      const a: allValue = 10000;
      const b: allValue = 5000;
      const c: allValue = 2000; 
      const d: allValue = 900;
      const f: allValue = 100000000;
      const x: allValue = 'bangladesh'
      const y: allValue = true
      const z: allValue = null

      const all = { a, b, c, d, f, x, y, z }
     
      console.log(all.a, all.b, all.x, all.y, all.z)



      type FrontEnd = {

         skill1: string

      }
       
      type backEnd = {
          
         skill2: string
         
      }

      type allStack = FrontEnd & backEnd  


      const stack: allStack = {

         skill1: 'react, next.js, redux, javaScript', skill2: 'node.js, express.js, mongoose' 
 

      }

      console.log(stack.skill1, stack.skill2)


      type Programming1 = {

        skilZZZ1 : string

      }
      type Programming2 = {

        skilZZZ2 : string

      }


      type allProgram = Programming1 & Programming2 

      const prog: allProgram = {

            skilZZZ1:"javaScript", skilZZZ2: 'next.js'
  

      }

      console.log(prog.skilZZZ1, prog.skilZZZ2)




}