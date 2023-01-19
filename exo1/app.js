import{ Footer } from "./component/footer.js";
import{ Header } from "./component/header.js";
import{ Main } from "./component/main.js";
  
let App = {  
    components : {  
      Footer   ,
      Header ,
      Main
    },  
    template: `  
    <Header/>
        <Main/>
    <Footer/>
    `  
};  
export { App };