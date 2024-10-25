const { WaBot } = require('fhy-wabot');
const QRCode = require('qrcode');

const QRCustom = async (qr) => {
    try {
        const url = await QRCode.toDataURL(qr);
        console.log('Custom QRCode URL:', url);
    } catch (err) {
        console.error('Failed to generate QR URL:', err);
    }
};

const AutoResponse = {
    'text': {
        '!text': { 
            response: 'pong!', 
            reply: false 
        }
        // You can add other data here
    },
    // You can add other data types here
};

const ManualResponse = {
    text: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            messageText: 'I sent text!'
        }
        // You can add other data here
    ],
    // You can add other data types here
};

(async () => {
    const sock = await WaBot(true, QRCustom, AutoResponse, ManualResponse);

    sock.ev.on('messages.upsert', async ({ messages }) => {
        const { remoteJid: sender } = messages[0].key;
        const text = messages[0].message.conversation || messages[0].message.extendedTextMessage?.text || '';

        if (text.toLowerCase() === '.test') {
            try {
                await sock.sendMessage(sender, { text: 'oh hello there' });
            } catch (error) {
                console.error(`Error occurred: ${error.message}`);
            }
        }
        // You can add other advanced data here
    });
})();