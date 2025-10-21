// এই ফাংশনটি একটি প্রমিস রিটার্ন করে যা নির্দিষ্ট সময় পর resolve হয়
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
    try {
        console.log("ডেটা আনা শুরু হচ্ছে... ২ সেকেন্ড পর কাজটি শুরু হবে।");

        // প্রথমে ২ সেকেন্ড অপেক্ষা করি
        await delay(2000);

        console.log("এখন ডেটা আনা হচ্ছে...");
        
        // এখন await সঠিকভাবে কাজ করবে কারণ এটি async ফাংশনের সরাসরি ভেতরে আছে
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1" );
        const data = await response.json();

        console.log("✅ ডেটা পাওয়া গেছে:", data);

    } catch (error) {
        console.error("একটি সমস্যা হয়েছে:", error);
    }
}

// async ফাংশন কল করা
getData();
