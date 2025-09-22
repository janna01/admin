export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Метод не разрешен" });
    }

    const { name, email, message } = req.body;

    
    const TELEGRAM_BOT_TOKEN = "8469626716:AAHLYR33Z-3WTXYlAIa3Bc1O_KgP__qqXiE";
    const TELEGRAM_CHAT_ID = "4722607130";

    const text = `Новое сообщение с сайта:
Имя: ${name}
Почта: ${email}
Сообщение: ${message}`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                }),
            }
        );

        const data = await response.json();

        if (data.ok) {
            res.status(200).json({ success: true });
        } else {
            res.status(500).json({ success: false, error: data });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}