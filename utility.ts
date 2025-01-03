{
        ////pick types

         type Utility = {

             name: string,
             capital: string,
             indipendent: number

         }

         type Utility2 = {

            n1: string,
            n2: number

         }


         type allInfo = Pick < Utility, "capital" >

         type uIn = Pick <Utility2, "n1" >

        
        /////omit types 
        
        
         type allOmit = Omit < Utility, "indipendent" >

        
        ////required types 
        
        
         type reU = Required<Utility>


        //////partial types 
        
        
         type par = Partial<Utility> 


        ///////readonly types 
        
        
         type read = Readonly<Utility>





  





}