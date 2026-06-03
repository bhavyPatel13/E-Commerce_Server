import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "dl4ppethf",
    api_key: "822769665861676",
    api_secret: "WKc0LuIiXjjS8c3YkYv8jeabSds", // Enforces your 27-character key
    extra_headers: { "X-Cloudinary-Timestamp-Sync": "true" } // Forces time matching
});

async function testUpload() {
    try {
        console.log("Attempting synchronized test upload...");
        const result = await cloudinary.uploader.upload("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", {
            folder: "Test_Connection"
        });
        console.log("✅ HARDCODED CONFIG SUCCESS! URL:", result.secure_url);
    } catch (error) {
        console.error("❌ HARDCODED CONFIG FAILED!");
        console.error(error);
    }
}

testUpload();