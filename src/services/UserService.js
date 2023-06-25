export const userService = {
    fetchUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка получения пользователей');
                }
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
                throw error;
            });
    }
};
