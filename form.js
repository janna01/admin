form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        model: document.getElementById("model").value,
        message: document.getElementById("message").value,
    };

    const TELEGRAM_BOT_TOKEN = "8469626716:AAHLYR33Z-3WTXYlAIa3Bc1O_KgP__qqXiE";
    const TELEGRAM_CHAT_ID = "4722607130";

    const text = `Новое сообщение с сайта:
Имя: ${data.name}
Почта: ${data.email}
Телефон: ${data.phone}
Модель: ${data.model}
Сообщение: ${data.message}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            }),
        });

        const result = await response.json();
        if (result.ok) {
            alert("Сообщение отправлено!");
            form.reset();
        } else {
            alert("Ошибка при отправке!");
        }
    } catch (err) {
        console.error("Ошибка:", err);
        alert("Ошибка соединения!");
    }
});
