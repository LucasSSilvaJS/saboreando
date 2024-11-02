import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db, auth } from "./firebaseConfig";
import { collection, getDocs, getDoc, doc, query, where, addDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// get que pega todos os dados em um array
async function selectAll(path) {
    try {
        const collectionDb = collection(db, path);
        const query = await getDocs(collectionDb);
        const results = []
        query.forEach(q => {
            const categoria = {
                id: q.id,
                ...q.data()
            }
            results.push(categoria)
        })
        return results;
    } catch (e) {
        console.log('Erro:', e)
        return [];
    }
}

// pega um dado em objeto
async function selectOne(path, id) {
    try {
        const docRef = doc(db, path, id);
        const query = await getDoc(docRef);
        const result = {
            id: query.id,
            ...query.data()
        };
        return result;
    } catch (e) {
        console.log('Erro', e);
        return {};
    }
}

// aceita array-contains-any, array-contains, in e not-in
async function selectWithFilter(path, field, operator, value) {
    try {
        const collectionDb = collection(db, path);
        const q = query(collectionDb, where(field, operator, value));

        const querySnapshot = await getDocs(q);
        const results = [];
        querySnapshot.forEach(doc => {
            const data = {
                id: doc.id,
                ...doc.data()
            };
            results.push(data);
        });

        return results;
    } catch (e) {
        console.log("Erro:", e);
        return [];
    }
}

//subir para o firebase usando como paramentro o nome da coleção
//e um objeto
async function postForm(path, data) {
    try {
        const collectionDb = collection(db, path);
        await addDoc(collectionDb, data);

        console.log('Documento adicionado com sucesso!');
        toast.success('Formulário enviado com sucesso!');
    } catch (e) {
        console.error('Erro ao adicionar documento:', e);
        toast.error('Erro ao enviar o formulário!');
    }
}

async function registerUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        if(userCredential.user){
            try{
                await setDoc(doc(db, 'users', userCredential.user.uid), {
                    email: userCredential.user.email,
                    createdAt: new Date(),
                });
                console.log('Usuário registrado:', userCredential.user.uid);
            }catch(error){
                console.log('Erro', error);
            }
        }

        toast.success('Cadastro realizado com sucesso');

        return userCredential.user

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.error('Erro: Este email já está registrado.');
            toast.error('Este email já está registrado. Volte para página anterior e insira outro email!');
        } else {
            console.error('Erro ao registrar usuário:', error.message);
            toast.error('Erro ao registrar usuário!');
        }
        return null
    }
}

async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Usuário logado:', userCredential.user.uid);
        toast.success('Login efetuado com sucesso!')
    } catch (error) {
        // Verifica o código de erro retornado pelo Firebase e fornece mensagens específicas
        let errorMessage;
        
        switch (error.code) {
            case 'auth/user-not-found':
                errorMessage = 'Usuário não encontrado. Verifique o email informado.';
                break;
            case 'auth/wrong-password':
                errorMessage = 'Senha incorreta. Tente novamente.';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Formato de email inválido. Por favor, verifique o endereço de email.';
                break;
            case 'auth/user-disabled':
                errorMessage = 'Este usuário foi desativado. Entre em contato com o suporte.';
                break;
            case 'auth/too-many-requests':
                errorMessage = 'Muitas tentativas de login. Tente novamente mais tarde.';
                break;
            default:
                errorMessage = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
        }
        
        toast.error(errorMessage);
        console.error('Erro ao fazer login:', error.code, error.message);
    }
};

async function logoutUser() {
    try {
        await signOut(auth);
        console.log('Usuário deslogado com sucesso');
        toast.success('Usuário deslogado com sucesso');
    } catch (error) {
        console.error('Erro ao fazer logout:', error.message);
        toast.error('Erro ao fazer logout');
    }
};

export {
    selectAll,
    selectOne,
    selectWithFilter,
    postForm,
    registerUser,
    loginUser,
    logoutUser,
}