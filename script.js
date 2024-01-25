document.getElementById('screenshotBtn').addEventListener('click', function() {
    //Ocultar o botão captura de tela
    this.classList.add('hidden');

    //tira a captural de tela
    html2canvas(document.documentElement, {
        //capturar na proporção de pixels do dispositivo
        scale: window.devicePixelRatio, 
        //ativar o registro para depuração
        logging: true,
        //use CORS para lidar com imagens de origem cruzada
        useCORS: true,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
    }).then(canvas => {
        //cia a image
        var image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");

        //crie um link para baixar a imagem
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = image;
        link.click();

        //mostre o botão novamente
        this.classList.remove('hidden');

    });
});