import { db } from "./firebaseConfig";
import { collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";

async function selectAll(path){
    try{
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
    }catch(e){
        console.log('Erro:', e)
        return [];
    }
}

async function selectOne(path, id) {
    try{
        const docRef = doc(db, path, id);
        const query = await getDoc(docRef);
        const result = {
            id: query.id,
            ...query.data()
        };
        return result;
    }catch(e){
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

async function postForm(path, data) {
    try {
        const collectionDb = collection(db, path);
        await addDoc(collectionDb, data);

        console.log('Documento adicionado com sucesso! ID:');
    } catch (e) {
        console.error('Erro ao adicionar documento:', e);
    }
}


export {selectAll, selectOne, selectWithFilter, postForm}