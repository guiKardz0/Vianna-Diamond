document.addEventListener('DOMContentLoaded', function () { /*Ordena que o sistema tente rodar os comandos de javascript apenas após o carregamento completo do HTML para evitar erros que envolvam a tentativa de acessar elementos do HTML que ainda não foram carregados*/


    /*Seção que liga constantes e variáveis à elementos do HTML utilizando os IDs ou classes dados aos elementos no HTML*/
    /*getElementById: Cria uma conexão que busca elementos usando um ID (Capaz de pegar um elemento só)*/
    /*querySelectorAll: Cria uma conexão que busca elementos usando, por exemplo, classes (Capaz de pegar mais de um elemento de uma só vez)*/

    const track = document.getElementById('videoTrack') /*Cria uma constante que procura elementos utilizando como base seu ID, nesse cado ID = videoTrack*/
    const setaEsquerda = document.getElementById('setaEsquerda') /*Cria uma constante que procurará o elemento de ID = setaEsquerda*/
    const setaDireita = document.getElementById('setaDireita') /*Cria uma constante que procurará o elemento de ID = setaDireita*/
    const bolinhas = document.querySelectorAll('.bolinha') /*Cria uma constante que buscará todos os elementos que possuam a classe = bolinha*/
    const videoItems = document.querySelectorAll('.video-item') /*Cria uma contante que buscará todos os elemtnetos que possuam a class = video-item*/

    let currentIndex = 0; /*Dita qual é o index do primeiro video (Em javascript, as contagens começam em 0, porntanto o primeiro elemento recebe 0)*/
    let totalVideos = videoItems.length /*Cria uma variável que calcula o total de elementos que estão guardados na constante "videoItems" anteriormente*/

    function atualizarSlider(index){ /*Função que executará a mudança dos videos. Index é o parâmetro de qual video deverá ser mostrado após a execusão da função*/
        if (index < 0) index = totalVideos - 1; /*Comando para impedir que sejá possível voltar para um video antes da posição 0 (Se o índice for ser menor que 0, ele se torna 0)*/
        if (index >= totalVideos) index = 0; /*Comando para impedir que seja possível avançar além do último vídeo (Se o índice >= total de videos, ele se torna o índice do último video, que é o número total menos 1, uma vez que a contagem começa em 0)*/
        currentIndex = index; /*Passa para a constante "currentIndex criada anteriormente, o valor atual após o movimento dos videos*/
        const deslocamento = -currentIndex * 100; /*Cria uma constante que calculará qual deve ser o deslocamento no eixo X (negativo = para esquerda) de 100% para cada clique (mudança de um video para o outro*/
        track.style.transform = `translateX(${deslocamento}%)`; /*Altera a propriedade transform do item linkado à constante "track" e passa uma nova posição no eixo X para os elemtos na Track*/
        bolinhas.forEach((bolinha, i) => { /*bolinhas.forEach = Cria uma função que passa por cada elemento da lista contida na constante "bolinhas", essa que recebe dois parâmetros (bolinha, i), analisando um elemento "bolinha" e seu index*/
            bolinha.classList.toggle('ativa', i === currentIndex); /*Altera os elementos de classe "bolinha" da lista, se o indice atual, for igual ao índice da bolinha, ela ativará, caso contrário, ficará desativada*/
        });
    };

    setaEsquerda.addEventListener('click', function(){ /*Cria uma função do tipo adicionar evento para o click atrelada a constante "setaEsquerda"*/
        atualizarSlider(currentIndex - 1)  /*Quando ativa, ativa a função "atualizarSlider", assim mudando o index atual pra indexAtual - 1 (Move um vídeo para a esquerda)*/
    });

    setaDireita.addEventListener('click', function(){ /*Cria uma função do tipo adicionar evento para o click atrelada a constante "setaDireita"*/
        atualizarSlider(currentIndex + 1) /*Quando ativa, ativa a função "atualizarSlider, assim mudando o index atual para indexAtual + 1 (Move um vídeo para a direita)*/
    });

    bolinhas.forEach((bolinha, index) => {
        bolinha.addEventListener('click', function() {
            atualizarSlider(index)
        });
    });
});