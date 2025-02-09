const danmuContainer = document.querySelector(".danmu-container");
const input = document.getElementById("danmu-input");
const sendBtn = document.getElementById("send-btn");
//取得元素 對接
sendBtn.addEventListener("click", sendDanmu);
input.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        sendDanmu();
    }
});
//首先偵測是否有鍵盤按下，照理說按下會啟動逗點後的程式
//但這裡再放入了一個if函式來檢驗按下的鍵是否為Enter，
//如果是，啟動sendDanmu，如果不是[則甚麼都不會發生]

console.log(sendBtn); // 測試是否有成功取得按鈕

function sendDanmu(){
    console.log("函式 sendDanmu() 被執行了！");
    const text = input.value.trim();
    if(text){
        console.log("彈幕內容：", text);
        createDanmu(text);
        input.value = "";//清空輸入
    }
}
function createDanmu(text){
    console.log("函式 createDanmu() 被執行了！");
    const danmu = document.createElement("div");
    danmu.classList.add("danmu");
    danmu.textContent = text;

    console.log("建立的彈幕元素：", danmu);

    danmu.style.top = `${Math.random() * 250 + 20}px`;

    const danmuContainer = document.querySelector(".danmu-container");
    if (!danmuContainer) {
        console.error("錯誤：找不到 .danmu-container 容器！");
        return;
    }

    const colors = ["#FFFFFF", "#8B0000"]; 
    danmu.style.color = colors[Math.floor(Math.random() * colors.length)];

    const duration = Math.random() * 3 + 3;
    danmu.style.animationDuration = `${duration}s`;

    danmuContainer.appendChild(danmu);

    setTimeout(() => {
        danmu.remove();
    }, duration * 5000);
}