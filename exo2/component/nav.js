let Nav = {
    data() {
        return {
           
        }
    },
     props: [
             "liste"
            ],
    template: ` 
    <nav>
       <ul>
        <li v-for="texte in liste"> {{ texte.value }} </li>
       </ul>
       </nav>
    `
};

export { Nav };