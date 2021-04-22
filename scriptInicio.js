(function selectFavorite() { //estos parentesis son la declaracion a la funcion


    if (localStorage.getItem("arrayDeIratxe")) {
        let a = localStorage.getItem("arrayDeIratxe"); //recoge el dato del localStorage y lo mete en la variable para usarlo después.
        a = JSON.parse(a); //pasa el string a objeto para poder usarlo
        document.querySelector(".nameImgBoton").innerHTML = "";
        for (let i = 0; i < a.length; i++) {
            document.querySelector(".nameImgBoton").innerHTML += `
        <div class="favPerson">
            <p class="favoriteName likeName">${a[i].name}</p>
            <img class="favoriteImage likeImage" src="${a[i].image}">
            <button class="buttonEliminar${i} buttonDelete">Eliminar</button> 
        </div>`
            //se crea el boton para eliminar de fav

        }

        for (let j = 0; j < a.length; j++) {
            document.querySelector(`.buttonEliminar${j}`).addEventListener("click", function () {
                
                a.splice(j,1)

                a = JSON.stringify(a);
                localStorage.setItem("arrayDeIratxe", a)

                selectFavorite()
            })
        }
    }





})() // estos parentesis son para que se ejecute la función anterior. Va siempre de derecha a izquierda

