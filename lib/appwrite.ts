import { Client, Account, Avatars} from 'react-native-appwrite';

export const client = new Client()
  .setProject('6a1e98e1000fd3ba7c99')   // Your Project ID
  .setPlatform('dev.mobile-app.tovoson');   

export const account = new Account(client);
export const avatars = new Avatars(client);