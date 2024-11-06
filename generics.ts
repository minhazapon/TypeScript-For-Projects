{


       type generic<T> = Array<T> 


       const name: generic<string> = ['javaScript', 'typeScript', 'react', 'next.js', 'redux', 'express.js', 'mongoose']
       
       console.log(name[1], name[2], name[3], name[4], name[5], name[6])


       const number: generic<number> = [ 12, 34, 45, 56, 355, 566 ] 

       console.log(number[2], number[4])




       type geneR<x, y> = [ x, y ] 


       const all: geneR<String, number> = [ 'bangladesh', 1971 ] 

       console.log(all[0], all[1])


}