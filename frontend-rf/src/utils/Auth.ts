// interface UserCredentials {
//     username: string;
//     password: string;
// }

export async function loginUser(username: string, password: string): Promise<boolean> {
    // Simulasi autentikasi
    if (username === "test" && password === "123ASD#") {
        sessionStorage.setItem("token", "fake-token");
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
    return !!sessionStorage.getItem("token");
}

export function logoutUser(): void {
    sessionStorage.removeItem("token");
}