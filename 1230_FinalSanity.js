const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await ddb.get({
            TableName: "TesthiruTable",
            Key: {
                id: "001"
            }
        }).promise();

    } catch (err) {
        // error handling goes here edit
    };

    return { "message": "Successfully executed" };
};