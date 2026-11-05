const N_filas = 15;
const N_columnas = 15;
let flota =new Array(N_filas);
const num_barcos = 5;

let vacio = new Array(N_filas);

let contador=0;


 for (let i = 0; i < N_filas ; i++){
        flota[i] = new Array(N_columnas).fill(0);        
    }
for (let i = 0; i < N_filas ; i++){
        vacio[i] = new Array(N_columnas).fill(0);        
    }

    let barcos = 0;

do {
        let filas_alet = Math.floor(Math.random() *N_filas);
        let columnas_alet = Math.floor(Math.random() *N_columnas);

        if(flota[filas_alet][columnas_alet] === 0){
            flota[filas_alet][columnas_alet] = 1;
            barcos++;
        }
    } while (barcos < num_barcos);

    console.table(flota);

        const juego = document.getElementById("juego");
        const hueco = document.createElement("id");


        for(let i = 0; i < N_filas; i++){
            for(let j = 0; j < N_columnas; j++){
                const cuadro_barco = document.createElement("div");
                    cuadro_barco.classList.add("barco");
                    hueco.id = "hueco"+i+"_"+j;                    
                    cuadro_barco.id = "barco"+i+j;
                    if(flota[i][j] === 1){
                        cuadro_barco.classList.add("barco");
                    }
                    juego.appendChild(cuadro_barco);

            }
        }

        console.log(contador);
        

function disprar_barco(){

    if (contador < 3){
    let fila = window.prompt("Introduce la fila: ");
    let columna = window.prompt("Introduce la columna: ");
    
    
    
        if(fila <= 14 && fila >= 0 && columna <= 14 && columna >= 0){

            if(vacio[fila][columna] == 0){

                if(flota[fila][columna] == 1){
                    
                document.getElementById("barco"+fila+columna).classList.add("hundido");
                contador++;
                }else {
                    document.getElementById("barco"+fila+columna).classList.add("ocupada");vacio[fila][columna] = 1;
                }
            }else {
                window.alert("No se puede")
            }
            
    } else {
        window.alert("Error no esta en el rango de posiciones");
    }        

} else {
    document.getElementById("id_boton").disabled = true;
}
}