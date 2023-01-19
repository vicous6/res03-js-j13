let NavList = {  
     data() {  
        return {  
            truc : "hide"
        }  
    },  
    methods : {  
        toogleClass()
        {
            console.log(this.truc)
            if(this.truc=== "hide"){
                this.truc = ""
            }else{
                this.truc= "hide"
            }
        }  
    }  ,
    
    
      props: [
             "title",
             "liContent"
            ],
    
    template: `  
       <header @click="toogleClass">
    <h2 class="title" >{{title}}</h2>
    <i class="bi bi-caret-down-square"></i>
    </header>
   
     
     <ul v-if="truc === ''" class="liste">
      <li v-for="li in liContent">{{li}}</li>
      </ul>
      <ul v-else-if="truc === 'hide'" class="liste hide">
       <li v-for="li in liContent">{{li}}</li>
     </ul>
    `,
    
};  
  
export { NavList };