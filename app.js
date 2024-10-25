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

const AutoResponse = {};
const ManualResponse = {};

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
