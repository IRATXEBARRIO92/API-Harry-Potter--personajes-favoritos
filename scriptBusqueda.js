let character = "";

document.querySelector("button").addEventListener("click", selectCharacter) //una vez tiene los datos de la API, si hace click en el boton entra en la siguiente función

function selectCharacter(){
    let exist = false; //si entra por if es true y si no entra es false
    let userCharacter = document.querySelector("#name").value; //coge el valor que se da en el boton
    userCharacter = userCharacter.toLowerCase(); //para que sea todo minusculas
for (let i = 0; i < character.length; i++) {
  
    if(character[i].name.toLowerCase().includes(userCharacter)){ //si incluye lo que he escrito aparece
        exist = true; //se pone aqui true para poder usarlo fuera

        document.querySelector(".characterContainer").innerHTML = ""; //para que vacie lo que habia antes

        document.querySelector(".characterContainer").innerHTML += `<h2 class="nameCharacter">${character[i].name}</h2>`;

        document.querySelector(".characterContainer").innerHTML += '<img class="imgCharacter" src='+character[i].image+'>'

            if (character[i].gender == "male"){
                document.querySelector(".characterContainer").innerHTML += `<p class="actorCharacter"> El actor que interpreta este personaje es ${character[i].actor}</p>`
            } else {
                document.querySelector(".characterContainer").innerHTML += `<p class="actorCharacter"> La actriz que interpreta este personaje es ${character[i].actor}</p>`
            }

        

            if(character[i].house == "Gryffindor"){
                document.querySelector(".historiaCasa").innerHTML = ""; //vacia el texto que hubiese antes

                document.querySelector(".characterContainer").innerHTML +=`<div class="escudoClase"><img class="escudo" src="./img/escudoGryffindor.png"><p class="houseCharacter">Pertenece a la casa ${character[i].house}</p> </div>`
                document.querySelector(".historiaCasa").innerHTML +=`<p class="textOfHouse">Gryffindor es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería, fundada por Godric Gryffindor. Su animal emblemático es el león y sus colores son el rojo escarlata y el dorado. Las principales características de los Gryffindor son el coraje y la caballerosidad. El elemento de Gryffindor es el fuego. La sala común de Gryffindor está localizada en la Torre de Gryffindor, la entrada está localizada en el séptimo piso y está custodiada por el retrato de la Dama Gorda, que utiliza un vestido rosa. Ella permite la entrada solamente si la clave es la correcta (cambia regularmente. La Casa de Gryffindor estima el coraje, así, sus miembros se caracterizan por ser valientes aunque a veces hasta el punto de ser imprudentes.</p><a href="https://harrypotter.fandom.com/es/wiki/Gryffindor#:~:text=Gryffindor%20es%20una%20de%20las,rojo%20escarlata%20y%20el%20dorado.&text=Las%20principales%20caracter%C3%ADsticas%20de%20los%20Gryffindor%20son%20el%20coraje%20y%20la%20caballerosidad." target="_blank"><img class="salonHouse" src="./img/casaGryffindor.jpg"></a>`


             } else if (character[i].house == "Slytherin"){
                document.querySelector(".historiaCasa").innerHTML = "";
                document.querySelector(".characterContainer").innerHTML +=`<div class="escudoClase"><img class="escudo" src="./img/escudoSlytherin.png"><p class="houseCharacter"> Pertenece a la casa ${character[i].house}</p> </div>`
                document.querySelector(".historiaCasa").innerHTML += `<p class="textOfHouse"> Slytherin es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería, fundada por Salazar Slytherin. Sus características incluyen: astucia, ingenio y ambición. El fundador valoraba y favorecía a los estudiantes de sangre pura y el Sombrero Seleccionador admitió que puede ser un factor al ser seleccionado. Los estudiantes de cualquier estatus de sangre ahora pueden ser ubicados en la casa. Sin embargo, un estudiante hijo de muggles de esa casa se considera bastante raro. El animal emblemático de la casa es una serpiente y sus colores son verde y plateado. El patrón fantasma de la casa es el Barón Sanguinario.</p><a href="https://harrypotter.fandom.com/es/wiki/Salazar_Slytherin#:~:text=Salazar%20Slytherin%20fue%20un%20famoso,que%20hubo%20entre%20los%20fundadores." target="_blank"><img class="salonHouse" src="./img/salonSlytherin.jpg"></a>`


             }else if (character[i].house == "Hufflepuff"){
                document.querySelector(".historiaCasa").innerHTML = "";
                document.querySelector(".characterContainer").innerHTML +=`<div class="escudoClase"><img class="escudo" src="./img/escudoHuflepuff.png"><p class="houseCharacter"> Pertenece a la casa ${character[i].house}</p> </div>`

                document.querySelector(".historiaCasa").innerHTML += `<p class="textOfHouse">Hufflepuff es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería. Su fundadora es la bruja medieval Helga Hufflepuff. La jefa de la casa es Pomona Sprout. El fraile gordo es el fantasma de la casa. Hufflepuff es la más inclusiva de las cuatro casas; el trabajo duro, la paciencia, la amistad y la honestidad son sumamente necesarias para ser miembros. Su animal emblemático es el tejón y sus colores son el amarillo y negro. A la sala común de Hufflepuff se accede desde el mismo pasillo que a las cocinas de Hogwarts. Como método de seguridad para disuadir a los estudiantes que no son de Hufflepuff, si se golpea el barril incorrecto o se golpea un número incorrecto la tapa de uno de los otros barriles se abre y ducha a la persona con vinagre. </p><a href="https://harrypotter.fandom.com/es/wiki/Hufflepuff#:~:text=Su%20fundadora%20es%20la%20bruja,la%20casa%20es%20Pomona%20Sprout.&text=Hufflepuff%20es%20la%20m%C3%A1s%20inclusiva,son%20el%20amarillo%20y%20negro." target="_blank"><img class="salonHouse" src="./img/salonHufflepuff.jpg"></a>`

             }else if (character[i].house == "Ravenclaw"){
                document.querySelector(".historiaCasa").innerHTML = "";
                document.querySelector(".characterContainer").innerHTML +=`<div class="escudoClase"><img class="escudo" src="./img/escudoRavenclaw.png"><p class="houseCharacter">Pertenece a la casa ${character[i].house}</p> </div>`

                document.querySelector(".historiaCasa").innerHTML += `<p class="textOfHouse">Ravenclaw es una de las cuatro casas que componen el Colegio Hogwarts de Magia y Hechicería, fundada por Rowena Ravenclaw, quién tuvo una hija, cuyo fantasma es la Dama Gris la cual fue asesinada por el Barón Sanguinario. Su hija le robó la diadema que le pertenecía y huyó a los bosques de Albania, lugar donde fue asesinada, y donde años después, Lord Voldemort encuentra la diadema y la esconde en la sala de los menesteres, en el Colegio Hogwarts de Magia y Hechicería. Se dice que fue Ravenclaw quien le puso el nombre al castillo. La casa Ravenclaw premia el aprendizaje, la sabiduría, el ingenio, y el intelecto de sus miembros. Por ello, muchos Ravenclaw tienden a tener talento académico y a ser estudiantes motivados. La sala común de Ravenclaw se encuentra en una de las torres del castillo, es amplia y circular. Es necesario dar la respuesta correcta para que la puerta se abra. De lo contrario, habría que esperar a que llegue otro alumno de Ravenclaw que pueda resolver el acertijo propuesto. Algunas de las preguntas antes de la batalla de Hogwarts fueron: ¿Qué fue antes, el fénix o la llama? La respuesta correcta era "el círculo no tiene principio".</p><a href="https://harrypotter.fandom.com/es/wiki/Ravenclaw#:~:text=Ravenclaw%20%5BR%C3%89I%2Dben%2Dklo,asesinada%20por%20el%20Bar%C3%B3n%20Sanguinario.&text=Se%20dice%20que%20fue%20Ravenclaw%20quien%20le%20puso%20el%20nombre%20al%20castillo." target="_blank"><img class="salonHouse" src="./img/salonRavenclaw.jpg"></a>`
             }

        


        if(character[i].patronus !== ""){
            document.querySelector(".characterContainer").innerHTML += `<p class="patronusCharacter"> Su patronus es ${character[i].patronus}</p>`
        }

         document.querySelector(".characterContainer").innerHTML += `<button class="likeButton">Like </button>`
        


         document.querySelector(".likeButton").addEventListener("click", function(){ //funcion anonima para que no salte al momento solo al hacer click
            
            let fav = {name: character[i].name, image: character[i].image} //creo objeto de los datos que voy a querer sacar en el localstorage
        
            // LOCALSTORAGE
            
            let localStg= localStorage.getItem("arrayDeIratxe") //coger el dato del localstorage

        
    
         if(localStg === null || localStg === undefined){ //compruebo para la primera vez que voy a meter un personaje en favs
             localStg = []; // si no hay lista de favs en localstorage, inicio un array vacio
         }
         else{
             localStg = JSON.parse(localStg); //si ya hay una lista de favs, lo recupero y parseo (cambio de string a objeto)
         }
         let exit = false;

         //PARA NO REPETIR FAVORITO
         for (let i = 0; i < localStg.length; i++) { //hacemos for para recorrer el localstorage para saber si se repite un personaje. En localStg se guarda el dato
                if (localStg[i].name === fav.name){ // si el nombre  coincide con el nombre que se ha guardado en let fav no hace nada
                    exit = true;
                }
             
         }

                if (exit === false) {//si el nombre  coincide con el nombre que se ha guardado en let fav entonces hace el array.push
                    localStg.push(fav); //añado el nuevo elemento al objeto creado de lo que hay en el localstorage

                }

         localStg = JSON.stringify(localStg); //lo paso a string para poder guardarlo en el localstorage
         localStorage.setItem("arrayDeIratxe", localStg) //y por ultimo lo guardo en el local storage
        }) //ponemos fav porque se le van a pasar por parametro los datos de fav
         

        break; //para romper el for 
    }
    
}
    if(exist === false) { //si es false saca el alert pero no se repite porque está fuera del for
       alert("Ese personaje no existe")
    
        
    }
}





axios.get('http://hp-api.herokuapp.com/api/characters')



.then(function (response){
character = response.data; //1º recoge en let character (declarado arriba) los datos de la API. Despues sube arriba
console.log(character);
if (response.status != 200) {
    alert("No funciona la API")
}




})