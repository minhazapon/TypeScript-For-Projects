{



     type map = {

        name: string,
        number: number,
        address: string,
        location: string,
        profession: string,
        skilss: string


     }


     type allMap = {

       
        [ key in keyof map ] : string | number


     }


     const all: allMap = {

        
         name: 'minhazul abedin apon',
         number: 1950374409,
         address: 'bangladesh',
         location: 'jhenaidah',
         profession: 'software development',
         skilss: 'react, next.js, redux, mongoose, express.js, js, ts'


     }


     console.log(all.address, all.location, all.name, all.number, all.profession, all.skilss)


     type allMp =  {

       country: string,
       country1: string,
       countryAge: number

     }


     type mapZ = {

       [ key in keyof allMp ] : string | number

     }


     const info: mapZ = {
         
       country: 'bangladesh',
       country1: 'america',
       countryAge: 20000000
 
     } 


     console.log(info.country, info.country1, info.countryAge)













}