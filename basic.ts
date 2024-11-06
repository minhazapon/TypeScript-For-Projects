////ts-node-dev --respawn --transpile-only server.ts

////1#1: Basic Types (string, number, boolean, array, tuple, enum) - বেসিক ডেটা টাইপ এবং তাদের প্রয়োগ।

{

    ///string type
     const countryName: string = 'bangladesh, india, pakistan, afganisthan, america, russia, etc.' 

     console.log(countryName);

    ///number type 
    
    const allNumberZ: number = 1234567890212345678912344;
    
    console.log(allNumberZ)

    ////boolean type 

    const americaIsfakir: boolean = false 

    console.log(americaIsfakir)


    ////array types


    let riverNameZ: string[] = [ 'podda', 'meghna', 'jamuna', 'carnafulee', 'modhumati', 'gorai', 'navaganga' ] 

    console.log(riverNameZ[2], riverNameZ[3], riverNameZ[5])

    let numberZ: number[] = [ 2334, 3545, 4566, 54667, 356, 7554 ] 

    console.log(numberZ)

    let isThink: boolean[] = [ true, false, true, false ]

    console.log(isThink)


    ////tuple types 


    let They: [string, number] = [ "india and pakistan", 1947  ] 

    console.log(They[0], They[1])


    let cupleBirdZ: (string | number)[] = [ 'good bird and bad bird price is >>>>> $', 2000000 ]

    console.log(cupleBirdZ[0], cupleBirdZ[1])



    ////enum types 



    





 

 





}