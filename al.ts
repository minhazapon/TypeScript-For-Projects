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


























}