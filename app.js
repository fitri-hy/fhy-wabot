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
    },
};

const ManualResponse = {
	text: [
		{
			id: '6281234567890@s.whatsapp.net',
			messageText: 'I sent text!'
		}
	],
};

(async () => {
    const sock = await WaBot(false, QRCustom, AutoResponse, ManualResponse);

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
    });
})();
