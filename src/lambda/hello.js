import * as admin from 'firebase-admin';

//global.self = {fetch: require('node-fetch')}

var serviceAccount = {
    //.....
}

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://marine-potion-230514.firebaseio.com",
})

exports.handler = async (event, context,)=>{
    const note = event.queryStringParameters.note || "no text";
    
    try{

        let ref = await app.database().ref("notes").push().set({note})
        
        return {
            statusCode: 200,
            body: `new note contains ${note}`
        }

    }catch(err){
        
        return {
            statusCode: 200,
            body: `err ${err.message}`
        }
    }

};
  