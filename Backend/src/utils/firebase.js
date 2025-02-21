import admin from "firebase-admin";
// import serviceAccount from "../../fir-ef23f-firebase-adminsdk-3u0vg-d46030c41e.json" with { type: "json" };
import fs from "fs";
import { v4 as uuidv4 } from "uuid"; // Importing UUID for unique filenames



// for deployment read the service account from the environment variable on the server
const serviceAccount = JSON.parse(
  fs.readFileSync("/etc/secrets/fir-ef23f-firebase-adminsdk-3u0vg-d46030c41e.json", "utf8")
);

if (!admin.apps.length) {
  admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: process.env.BUCKET_NAME,
  });
}


// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.BUCKET_NAME,
});

const bucket = admin.storage().bucket();

export const uploadFile = async (localFilePath, destination) => {
  try {
    // Generate a unique file name using UUID or timestamp
    const uniqueFilename = `${uuidv4()}-${destination}`;

    // Upload the file to Firebase Storage
    const [file] = await bucket.upload(localFilePath, {
      destination: uniqueFilename,
      metadata: {
        cacheControl: "public, max-age=31536000",
      },
    });

    // Make the file publicly accessible
    await file.makePublic();

    // After upload into firebase, delete the image from local
    fs.unlinkSync(localFilePath);

    // Construct the public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${uniqueFilename}`;
    return publicUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Could not upload the file");
  }
};
