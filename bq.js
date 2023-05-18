require('dotenv').config();

// Imports the Google Cloud client library
const { ConnectionServiceClient, } = require('@google-cloud/bigquery-connection');
  
  // Creates a client
  const client = new ConnectionServiceClient();
  project = 'gt3dproductsv01' // Project to list connections for.
  const parent = `projects/${project}/locations/US`;
  console.log(parent);
  
  async function listConnections() {

    const [connections] = await client.listConnections({
      parent: parent,
    });
  
    console.info(`found ${connections.length} connections:`);
    console.info(connections);
  }

  const listConnectionsResponse = listConnections();
  console.log("List of all connection responses: ", listConnectionsResponse);