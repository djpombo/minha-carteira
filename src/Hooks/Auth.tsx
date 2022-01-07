import React, { createContext, useContext, useState }from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;    

}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({children}) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira: isLogged');

        return !!isLogged //retorno lógico, se tem conteudo é true
    });

    const signIn = (email: string, password: string) => {
        if(email === 'teste@gmail.com' && password === '123'){
            localStorage.setItem('@minha-carteira: isLogged', 'true');
            setLogged(true);
        } else {
            alert('Senha ou usuario inválidos!');
        }
    }

    const signOut = () => {
        localStorage.removeItem('@minha-carteira: isLogged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };