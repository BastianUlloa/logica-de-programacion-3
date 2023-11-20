function factorial() {
    while (true){
        let num = parseInt(prompt("Ingrese el número: "))
        if (!isNaN(num)){
            let r = 1;
            for(let i = num; i>0; i--){
             r *= i;
        };          
            alert(`El factorial es igual a: ${r}`);
            break
        } else (alert ("no es un número"))

    }
}
factorial();