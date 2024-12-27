import { getCookie } from '@/services/getCookie';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';

const httpLinkGraphene = new HttpLink({
    uri: 'http://localhost:8000/graphql/graphene/',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
});

const httpLinkStrawberry = new HttpLink({
    uri: 'http://localhost:8000/graphql/strawberry/',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Логика для маршрутизации запросов по URL
const httpLink = ApolloLink.split(
    (operation) => {
        // Проверяем контекст операции
        const server = operation.getContext().server || 'graphene'; // Значение по умолчанию
        return server === 'strawberry'; // Если контекст указывает на 'strawberry', используем этот сервер
    },
    httpLinkStrawberry,
    httpLinkGraphene
);

// Создание WebSocket-соединения для подписок
const wsLink = new WebSocketLink({ 
    uri: `ws://127.0.0.1:8000/graphql/subscription/`, 
    options: { 
        reconnect: true
    }
})

const link = ApolloLink.split(
    operation =>
        operation.query.definitions.some(
            def =>
                def.kind === 'OperationDefinition' &&
                def.operation === 'subscription'
        ),
    wsLink,
    httpLink
);

// Добавление CSRF-токена
const csrfLink = setContext((_, { headers }) => {
    const csrfToken = getCookie('csrftoken');

    return {
        headers: {
            ...headers,
            'X-CSRFToken': csrfToken || "", // Добавляем CSRF-токен в заголовки
        },
    };
});

const client = new ApolloClient({
    link: ApolloLink.from([csrfLink, link]), // Связываем авторизацию и основной запрос
    cache: new InMemoryCache()
});

export default client