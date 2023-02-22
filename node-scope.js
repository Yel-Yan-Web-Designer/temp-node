(function (){
    const superhero = 'batman';
    console.log(superhero);
})(); 
(function (){
    const superhero = 'superman';
    console.log(superhero);
})();

/*
In Node,files are modules and we need to export import it.
When we import it, node will automative wrap module in IIFE function so we don't have to worry about scope problem in node module.
*/