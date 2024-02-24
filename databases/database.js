import pkg from 'pg';
const {Client} = pkg;

const connectionString ='postgres://bart:rLXxqjbIagLziy0zkToyJmBmfg19Lc4S@dpg-cnd2v8eg1b2c739kqhcg-a/database01_wllf';

const client = new Client({connectionString: connectionString});

const conectar=()=>{
    client.connect()
    .then(()=>console.log('Conectado a la base de datos'))
    .catch(e=>console.log(e))
}

export default conectar;
export {client}