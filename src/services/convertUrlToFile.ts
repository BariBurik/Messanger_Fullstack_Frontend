export const convertUrlToFile = async (url: string) => {
    if (url) {
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], 'image.jpg', { type: 'image/jpeg' });
    }
}
