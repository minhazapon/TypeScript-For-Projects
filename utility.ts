{
        ////pick types

         type Utility = {

             name: string,
             capital: string,
             indipendent: number

         }


         type allInfo = Pick < Utility, "capital" >

        
        /////omit types 
        
        
         type allOmit = Omit < Utility, "indipendent" >

        
        ////required types 
        
        
         type reU = Required<Utility>


        //////partial types 
        
        
         type par = Partial<Utility> 


        ///////readonly types 
        
        
         type read = Readonly<Utility>





  





}