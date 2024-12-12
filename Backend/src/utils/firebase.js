import admin from "firebase-admin";
import serviceAccount from "../../fir-ef23f-firebase-adminsdk-3u0vg-d46030c41e.json" with { type: "json" };
import fs from "fs"
// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.BUCKET_NAME, 
});

const bucket = admin.storage().bucket();

export const uploadFile = async (localFilePath, destination) => {
  try {
    // Upload the file to Firebase Storage
    const [file] = await bucket.upload(localFilePath, {
      destination, 
      metadata: {
        cacheControl: "public, max-age=31536000", 
      },
    });

    // console.log(`File uploaded to ${destination}`);

    // Make the file publicly accessible
    await file.makePublic();

    // after upload into firebase delete image from local 
    fs.unlinkSync(localFilePath) 

    // Construct the public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;
    return publicUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Could not upload the file");
  }
};
