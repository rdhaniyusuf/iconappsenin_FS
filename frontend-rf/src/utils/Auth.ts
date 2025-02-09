// interface UserCredentials {
//     username: string;
//     password: string;
// }

interface User {
    username: string;
    password: string;  
    token: string;
}

const dummyUsers: User[] = [
    { username: "test", password: "ABC123#", token: "fake-token" },
    { username: "user.123ASD#",password: "123ASD#", token: "token1" },
    { username: "user.S22411#",password: "S22411#", token: "token2" },
];

export async function loginUser(username: string, password: string): Promise<boolean> {
    // Simulasi autentikasi
    const user = dummyUsers.find(user => user.username === username && user.password === password);
    if (user) {
        sessionStorage.setItem("token", user.token);
        return true;
    }
    return false;
}

export async function registerUser(username: string, password: string): Promise<boolean> {
    // Simulasi pendaftaran pengguna
    console.log("User registered:", { username, password });
    return true;
}

export function isAuthenticated(): boolean {
    return !!getToken();
}

export function logoutUser(): void {
    sessionStorage.removeItem("token");
}

export function getToken(): string | null {
    return sessionStorage.getItem("token");
}

export function getUser(): {
    username: string;
} | null {
    const token = getToken();
    const user = dummyUsers.find(user => user.token === token);
    if (user) {
        return { username: user.username };
    }
    return null;
}