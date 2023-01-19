import{ NavList } from "./component/NavList.js";

  
let App = {  
        data() {
        return {
             tab:  [
	{
		title : "Utilisateurs",
		links : [
			"LISTE DES PRODUITS",
			"AJOUTER UN PRODUIT",
			"STATISTIQUES DES PRODUITS"
		]
	},
	{
		title : "Utilisateurs",
		links : [
			"Liste des utilisateurs",
			"Ajouter un utilisateur",
			"Statistiques utilisateurs"
		]
	},
	{
		title : "Utilisateurs",
		links : [
			"Liste des utilisateurs",
			"Ajouter un utilisateur"
		]
	},
]
,
        }
    },
   
    components : {  
      NavList   ,
     
    },  
    template: `
    
  <NavList v-for="elem in tab" :title = "elem.title"  :liContent="elem.links" />
    `  
};  
export { App };

 