const elementoTexto = document.getElementById('texto')
const elementoBotao = document.getElementById('falar')

function falar(){
    // 1º - Dizer qual é o texto que deve ser lido
    const textoASerFalado = elementoTexto.value;
    
    // 2º - Configurar uma fala
    const configuracaoFala = new SpeechSynthesisUtterance(textoASerFalado);

    // 3º - Colocar o computador para falar 
    // window - É uma variável global (tem acesso a tudo)
    window.speechSynthesis.speak(configuracaoFala);

}

elementoBotao.addEventListener('click', falar);



/* Exemplo com outras vozes do Google

        Note:   Verificar a lista com todas as vozes disponíveis - Verificar no console do navegador.
                window.speechSynthesis.getVoices()


                
    const elementoTexto = document.getElementById('texto')
    const elementoBotao = document.getElementById('falar')

    function falar(){

    const vozGoogle = window.speechSynthesis.getVoices()[19]
    const configuracaoFala = new SpeechSynthesisUtterance("Ola, pessoal!");

    configuracaoFala.voice = vozGoogle;
    window.speechSynthesis.speak(configuracaoFala)

    }

    elementoBotao.addEventListener('click', falar);

*/
