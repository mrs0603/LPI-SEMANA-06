

        /*função que gera senha numérica aleatória
        param> qtde de digitos que a senha terá
        Exemplo : gerarsenhanumerica(8);
        */
        function gerarsenhanumerica(qtde){
            let senha = "";
            for(let i=0; i<qtde; i++){
                senha += parseInt(Math.random()*10);
                //console.log(senha);
            }
            return senha;
        }

        
        function gerarsenhaalfanumerica(qtde){
            let senha = "";
            for(let i=0; i < qtde; i++){
                let numero =  65 + parseInt(Math.random()*60); 
                senha += String.fromCodePoint(numero);
                //console.log(senha);
            }
            return senha;
        }
        
        


