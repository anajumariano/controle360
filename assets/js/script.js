  
    function mostrarEtapa(numero) {
      for (let indice = 1; indice <= 4; indice++) {
        document.getElementById('divEtapa' + indice).classList.add('hidden');
      }
      document.getElementById('divEtapa' + numero).classList.remove('hidden');
    }
    function fim() {
        const botao = document.getElementById('voltar');
        window.alert('Fim do onboarding guiado do Controle 360, espero que tenha gostado :)')
        botao.style.display = 'block';
    }
  
