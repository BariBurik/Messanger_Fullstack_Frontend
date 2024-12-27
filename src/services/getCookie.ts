export function getCookie(name: string) {
    const value = `; ${document.cookie}`; // Добавляем ; для упрощения поиска
    const parts = value.split(`; ${name}=`); // Разделяем строку по нужному cookie
    if (parts.length === 2) {
        return parts.pop().split(';').shift(); // Возвращаем значение cookie
    }
    return null; // Если cookie не найдено
}