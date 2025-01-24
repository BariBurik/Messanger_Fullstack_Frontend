export const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<string>>, setNewAvatar: React.Dispatch<React.SetStateAction<File | null>>) => {
    const file = event.target.files[0];
    setNewAvatar(file);
    setImage(URL.createObjectURL(file));
};