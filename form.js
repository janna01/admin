document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const model = document.getElementById("model").value;
        const message = document.getElementById("message").value;

        const TELEGRAM_BOT_TOKEN = "8469626716:AAHLYR33Z-3WTXYlAIa3Bc1O_KgP__qqXiE";
        const TELEGRAM_CHAT_ID = "4722607130";

        const text = `📩 Новое сообщение с сайта:
👤 Имя: ${name}
📧 Почта: ${email}
📱 Телефон: ${phone}
📦 Модель: ${model}
📝 Сообщение: ${message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: text,
                }),
            });

            const result = await response.json();
            console.log("Ответ Telegram API:", result);

            if (result.ok) {
                alert("Сообщение отправлено!");
                form.reset();
            } else {
                alert("Ошибка при отправке!\n\n" + JSON.stringify(result, null, 2));
            }
        } catch (err) {
            console.error("Ошибка соединения:", err);
            alert("Ошибка соединения!\n\n" + err.message);
        }
    });
});
