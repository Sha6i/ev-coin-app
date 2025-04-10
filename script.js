const ALARM_TIMES = ["14:50", "19:50"];
const ALARM_SOUND = "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3";

function checkAlarm() {
    const now = new Date();
    const currentTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    if (ALARM_TIMES.includes(currentTime)) {
        triggerAlarm();
    }
}

function triggerAlarm() {
    const audio = new Audio(ALARM_SOUND);
    audio.loop = true;
    audio.play();
    document.getElementById("status").textContent = "⚠️ СИГНАЛ ЗА ТЪРГОВИЯ! ⚠️";
}

document.getElementById("stopBtn").addEventListener("click", () => {
    document.getElementById("status").textContent = "Сигналът е спрян";
    const audios = document.querySelectorAll("audio");
    audios.forEach(audio => audio.pause());
});

setInterval(checkAlarm, 60000);
checkAlarm();
