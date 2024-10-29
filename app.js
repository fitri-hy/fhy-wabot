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
    const sock = await WaBot(QRUrl = false, QRCustom, AutoResponse, ManualResponse, self = false);

    sock.ev.on('messages.upsert', async (messageUpdate) => {
        const message = messageUpdate.messages[0];
        const sender = message.key.remoteJid;
        const text = message.message.conversation || message.message.extendedTextMessage?.text || '';

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