document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            model: document.getElementById("model").value,
            message: document.getElementById("message").value,
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
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
});