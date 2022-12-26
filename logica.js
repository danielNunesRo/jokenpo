computador = ['Pedra', 'Papel', 'Tesoura'];

const randomElement = computador[Math.floor(Math.random() * computador.length)];
console.log(randomElement);


        function pedra() {
            if(randomElement == 'Pedra') {
                alert("EMPATE!\nAPERTE F5 PARA JOGAR NOVAMENTE");
                
            } 

            else if(randomElement == 'Papel') {
                alert("Computador escolheu Papel, você escolheu Pedra.\nVocê perdeu!\nAPERTE F5 PARA JOGAR NOVAMENTE")
            } else {
                alert("O computador escolheu tesoura, você escolheu Pedra.\nVocê venceu!\nAPERTE F5 PARA JOGAR NOVAMENTE")
            }

        
        }

        function papel() {
            if(randomElement == 'Pedra') {
                alert("O computador escolheu Pedra, você escolheu Papel.\nVocê venceu!\nAPERTE F5 PARA JOGAR NOVAMENTE")
            } 

            else if(randomElement == 'Papel') {
                alert("EMPATE\nAPERTE F5 PARA JOGAR NOVAMENTE")
            } else {
                alert("O computador escolheu tesoura, você escolheu Papel.\nVocê perdeu!\nAPERTE F5 PARA JOGAR NOVAMENTE")
            }
        }

        function tesoura() {
            if(randomElement == 'Pedra') {
                alert("O computador escolheu Pedra, você escolheu Tesoura.\nVocê perdeu!\nAPERTE F5 PARA JOGAR NOVAMENTE")
            } 

            else if(randomElement == 'Papel') {
                alert("O computador escolheu Papel, você escolheu Tesoura.\nVocê ganhou!\nAPERTE F5 PARA JOGAR NOVAMENTE")
            } else {
                alert("EMPATE!\nAPERTE F5 PARA JOGAR NOVAMENTE")
            }
        }
      