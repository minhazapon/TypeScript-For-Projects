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

        const removeDuplicates = (numberZ: number[] ): number[] =>{
             
            let CmnNumber: number[] = [];

            for( let n: number = 0; n < numberZ.length; n++ ){
                
               const elements: number = numberZ[n] 
               const valueZ = elements 

               if(!CmnNumber.includes(valueZ)){

                   CmnNumber.push(valueZ);
     
               }
            }
            return CmnNumber;
        }
        const ArrayOfnumberZ: number[] = [1, 2, 2, 3, 4, 4, 5]
        
        const ArrayResult : number[] = removeDuplicates(ArrayOfnumberZ)

        const SendResult = ArrayResult 

        console.log(SendResult)
     

 


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


///-----------------------------


  
////problem --6

/////////////////////////


  interface Profile {

      name: string,
      age: number,
      email: string

  }

  const updateProfile = (profle: Profile, UpDts: Partial<Profile> ): Profile =>{

       const upPro = { ...profle, ...UpDts } 

       const all = upPro 

       return all
 
  }

  const manProfile: Profile = {
      
       name: "Alice",
       age: 26,
       email: "alice@example.com"

  }

  const Manresult = updateProfile(manProfile,  { age:26 } )

  const finalResult = Manresult 

  console.log(finalResult)



////////////////////////////



////problem --7

/////////////////////////


    class Car {

         constructor(public make: string, public model: string, public year: number){
         }
        
         getCarAge(): number {
            
            const CYear = new Date().getFullYear()
            const fullYear = CYear 
            return fullYear - this.year

         }
    }


    const car = new Car("Honda", "Civic", 2018)

    const carResult = car.getCarAge()
    console.log(carResult)
 



////////////////////////////



////problem---8 


///////

     const validateKeys = <T extends object > (obj: T, keys: ( keyof T )[]): boolean =>{

            
            const value = keys 

            const result = value 

            return result.every(key => key in obj)

     }

     const person = { name: "Alice", age: 25, email: "alice@example.com" };

     const keyValue = validateKeys(person, ["name", "age"])

     console.log(keyValue)



///////











}