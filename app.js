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

WaBot(true, QRCustom, AutoResponse, ManualResponse);

