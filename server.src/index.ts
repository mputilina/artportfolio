import Express from 'express';
import { resolve } from 'path';

const rootPath = resolve( __dirname, '..' );
process.chdir( rootPath );

const app = Express();
app.listen( 8000 );

app.use( Express.static( resolve( rootPath, 'public' ) ) );

app.get('/', (_req, _res)=>{
    console.log("App opened!");
});