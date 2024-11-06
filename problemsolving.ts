{

//////problem-1 


 const name: string = 'welcome message';

 console.log(name) 


///////problem-2 


type func = "admin" | "password" | "bangladesh"


   function a( b: func ){

      const c = b 

      console.log(c)
   

   }

/////problem-3


     type Person = {

        name: string,
        income: number,
        address: string,
        job: string,
        skills: string

     }


     const p: Person = {

        name: 'pagla',
        income: 100000,
        address: 'bangladesh',
        job: 'softwware development',
        skills: 'javaScript, react.js, next.js'

     }

     console.log(p.address, p.income, p.job, p.name, p.skills)

//////problem-4 



    interface Book {

        b1: string

    }

    interface magazine {

        b2: string

    }

    type all = Book | magazine


    const w: all = {

         b1: 'bangladesh history',
         b2: 'bangla-zine'

    }

    console.log(w)


//////problem-5 


    function Re(name: string){    
         const r = name 
         
         console.log(r)    
    }

    Re('guru')



////////problem---6


    const river = "podda";
    const time = 12;

    (river as string);
    (time as number);

    console.log(river, time)


/////problem--7


    



  










}