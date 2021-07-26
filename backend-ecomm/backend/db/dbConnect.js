const {MongoClient} = require('mongodb');

async function main(){
  const uri = "+srv://ecomm:mubi1234@cluster0.nsg0n.mongodb.net/ecommerceDB?";


  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error)