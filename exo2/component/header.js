import{ Nav } from "./nav.js";

let Header = {  
    data() {  
        return {  
            li : [  
                {  
                    value : "Article 1",
                    
                }
                ,  
                {  
                    value : "Article 2",  
                },  
                {  
                    value : "Article 3",  
                }  ,
                {  
                    value : "coucou 3",  
                } 
            ]  
        }  
    }, 
    
    
    components : {  
      Nav,
    }, 
    
    
    template: `  
       <header>
       <Nav  :liste="this.li"/>
       </header>
    `
};  
  
export { Header };