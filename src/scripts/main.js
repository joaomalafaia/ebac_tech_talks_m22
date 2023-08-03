AOS.init();

const dataEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const cronometro = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMS = 1000 * 60

    const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((tempoAteEvento % horaEmMs) / minEmMS);
    const segundosAteEvento = Math.floor((tempoAteEvento % minEmMS) / 1000);

    document.getElementById('countdown').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (tempoAteEvento < 0) {
        clearInterval(cronometro);
        document.getElementById('countdown').innerHTML = 'Evento expirado'
    }
}, 1000)