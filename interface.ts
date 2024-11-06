{


   

    interface Products {

       p1: string, 
       p2: string,
       p3: string,
       p4: string,
       prodcutsPrice: number

    }


    const allProducts: Products = {

       p1: 'cheese',
       p2: 'batter',
       p3: 'gawa ghee',
       p4: 'poonir', 
       prodcutsPrice: 2000

    }


    console.log(allProducts.p1, allProducts.p2, allProducts.p3, allProducts.p4, allProducts.prodcutsPrice)


    /////array in interface//// 


    interface all {

       [index: number] : number

    } 

    const allArr: all = [ 1, 233, 455, 4667, 456, 3456, 4356, 6778, 45 ] 

    console.log(allArr[2], allArr[4], allArr[5], allArr[6], allArr[7])


    //////function in interface////////


    interface fun {

       (num1: number, num2: number) : number

    }

    const allF: fun = (num1, num2) => num1 + num2
    const a = allF(20, 40)
    console.log(a)



}