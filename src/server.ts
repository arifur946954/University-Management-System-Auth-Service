import mongoose from "mongoose";
import app from "./app";
import config from "./config";

main().catch(err => console.log(err));

async function main() {
try{
    await mongoose.connect(config.database_url as string);
    console.log(`databse connect successfully`);

    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })

}catch(err){
    console.log(`failed try again ${err}`);

}

} 