{


    //string of typeScript 

    const countryName1: string = "dhaka bangladesh" 
    console.log(countryName1)


    //number 

    const numZ: number = 1950374409 
    console.log(numZ)

    
    const weAreJavaScriptian: boolean = true
    console.log(weAreJavaScriptian)

    const isOkay: null =  null 
    console.log(isOkay)

    const products: undefined = undefined 

    console.log(products)



    /////array of typeScript 
    
    

    let allProducts: string[] = [ 'batter', 'ghee', 'cheese', 'panir' ] 

    console.log(allProducts[1], allProducts[2], allProducts[3])

    let someCountry: string[] = [ 'bangladesh', 'india', 'pakistan', 'afganisthan', 'france' ] 

    console.log(someCountry[1], someCountry[2], someCountry[3])


    const someNumber: number[] = [12,2, 34, 45, 35, 4566, 35, 3] 

    console.log(someNumber[1], someNumber[2], someNumber[3]) 


    /////tuple in typeScript 



    const someFoodAndPrice: [string, number] = [ 'foodName Is >>> brirtyani and price is $', 600 ] 
    
    console.log(someFoodAndPrice)


    const someProducts: ( string | number )[] = [ 'honey', 'tea', 'apple' ] 

    console.log(someProducts)

      


    /////class of TypeScript   



    class meatName {

        
          constructor( public m1: string, public m2: string, public m3: string ){

          }


          meat(){

             console.log(` all meat name is ${this.m1} , ${this.m2}, ${this.m3} `)

          }
    }


    const allMeat = new meatName( " chicken", 'beef', 'meet' ) 

    console.log(allMeat) 

    allMeat.meat();


    /////conditional typeScript 


    type q1 = number 

    type s1 = q1 extends number ? 'true' : 'false'

    
    //////generics typeScript 


    type generic<T> = Array<T> 


    const pro: generic<string> = [ "football", 'bat', 'ball', 'cricketBall' ] 

    console.log(pro)

    const ageZ: generic<number> = [ 12, 23, 45, 567, 67 ] 

    console.log(ageZ)

    type geneR<x, y> = [ x, y ]  

    const someName: geneR<string, number> = [ "name: apon , isAge: >>>>", 23 ]

    console.log(someName)

    

    ////interface in typeScript 
    

    interface myInformation  {

        name: string,
        address: string,
        country: string,
        number: number,
        profession: string

    }


    const info: myInformation = {

        name: 'minhazul abedin',
        address: 'jhenidah sadar',
        country: 'bangladesh',
        number: 10000000,
        profession: 'software'

    }

    console.log(info.address, info.country, info.name, info.number, info.profession)



    interface allZ {
        
        [ index: number ] : number

    }

    const A: allZ = [ 12, 23, 45, 456, 66, 8, 88 ] 

    console.log(A[1], A[2])


    interface FunC {

      (num1: number, num2: number): number

    }

    const B: FunC = (num1, num2) => num1 + num2 
    
    const value = B(20, 30)

    console.log(value)


    type Map = {
 
         name: string,
         profession: string,
         company: string

    }

    type M = {

         [ key in keyof Map ] : string | number

    }


    const mapped: M = {

        name: 'minhazul abedin apon',
        profession: 'software developer',
        company: 'toptal'

    }


    console.log(mapped.company, mapped.name,  mapped.profession)


    /////// type alias 



    type valueIs = number 


    const v1: valueIs = 1000000 

    const v2: valueIs = 2000000

    const v3: valueIs = 300000 


    console.log(v1 + v2 + v3)


    const funZ = (v: valueIs, z: valueIs) =>{

          const allV = v + z 

          const vv = allV / 209 

          const zz = vv - 80 

          const xx = zz * 10000 

          console.log(xx)
         

          if(xx > 200 ){
            
             console.log('is good')

          } else {

             console.log('is not good')

          }

    }


    funZ(100, 200)



    ////type assertion 


   const a = 1000;
   const b = 'bangladesh';
   const c = true;


   (a as number);
   (b as string);
   (c as boolean);

   console.log(a,b,c)


   /////union type of typeScript 


   type UniOz = string | number | boolean | null | undefined 


   const un1: UniOz = 100000 
   const uni2: UniOz = 'bangladesh'
   const uni3: UniOz = true 
   
   console.log(un1, uni2, uni3)


   type FrontEnd =  { skill: string } 

   type backEnd = { skill1: string } 

   type fullStack = FrontEnd & backEnd 


   const MernStack: fullStack = {
      
       skill:  'react.js, next.js', skill1: 'node, express.js, mongoDB'

   }


   console.log(MernStack.skill, MernStack.skill1)



   /////utility in typeScript 

   type uty = {
      
       name: 'apon',
       skill: 'react engineer'

   }

   type u1 = Pick<uty, "name"> 

   type u2 = Omit<uty, "name">

   type u3 = Partial<uty>
   
   type u4 = Readonly<uty>







 














}