const getErrorMessage = (error: any) => {
    if (error && error.data && Array.isArray(error.data.errors)) {
      // Если ошибка содержит данные и errors является массивом
      return error.data.errors[0]?.message;
    }
    return error?.message || 'An unknown error occurred';
};

export default getErrorMessage;