import { Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {

    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'co.edu.sena',
    projectId: '66c4e46a001ea0abb147',
    databaseId: '66c4e884001b0e749e4b',
    userCollectionId: '66c4e8d0000c7803e4c0',
    videoCollectionId: '66c4e9170010eb532100',
    storageId: '66c4ec5b0029c8f030b1'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });


}
// Register User
