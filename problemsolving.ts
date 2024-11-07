{

/////problem--1

    
// ----------------------------------------------

    const sumArray = (number: number[]): number =>{


           const num = number 

           const arr = num 

           const sumArrayNumIs = arr 

           const all = sumArrayNumIs

           return all.reduce(( num1, num2 ) => num1 + num2 )
           
    }

    const arrValue = sumArray([1, 2, 3, 4, 5]) 
    const inValueZ = arrValue 
    console.log(inValueZ)
    
// ----------------------------------------------

  
////problem --2 

/////////////////////////




////////////////////////////

// -----------------------------------------------------

////problem --3 

/////////////////////////
  
    const countWordOccurrences = (sentnce: string, wrd: string) =>{


         const lowerS = sentnce.toLowerCase() 
         const lowerWrd = wrd.toLowerCase()  

         const WordZ = lowerS.split(" ")

         let allCount = 0 ;

         for(const WrdZ of WordZ){

            if(WrdZ === lowerWrd){
                
                allCount++

            }

         }

         return allCount
        
    }

    const allCountWordZ = countWordOccurrences("I love typescript", "typescript") 

    console.log(allCountWordZ)

////////////////////////////

/////---------------------------------------
  
////problem --4

/////////////////////////




////////////////////////////

////------------------------


////problem --5

/////////////////////////

      
     const getProperty = <G, P extends keyof G > (object: G , key: P  ): G[P] =>{
           
           const property = object
            
           return property[key]
     }

     const Person = { name: "Alice",   age: 23 };

     const result = getProperty(Person, "name")

     console.log(result)
    

////////////////////////////











}