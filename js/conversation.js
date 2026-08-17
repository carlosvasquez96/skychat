const conversationReplies = {

    greetings: [
        "hi",
        "hello",
        "hey",
        "good morning",
        "good afternoon",
        "good evening"
    ],

    thanks: [
        "thanks",
        "thank you",
        "thx"
    ],

    goodbye: [
        "bye",
        "goodbye",
        "see you"
    ]

};
function getConversationResponse(message) {

    const text = message.toLowerCase().trim();

    if (conversationReplies.greetings.includes(text)) {

        return "👋 Hello! Welcome to SkyChat.\n\nHow can I help you with Skyward today?";
    }

    if (conversationReplies.thanks.includes(text)) {

        return "😊 You're very welcome!\n\nHappy to help.";
    }

    if (conversationReplies.goodbye.includes(text)) {

        return "👋 Have a great day!\n\nCome back anytime you need Skyward help.";
    }

    return null;

}