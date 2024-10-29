<img src="./ss.png">

# Documentation

fhy-wabot is a Node.js package designed to simplify the use of WhatsApp Bots.

## Installation

To install the `fhy-wabot` package, run the following command in the terminal:

```
npm install fhy-wabot

```

#### Usage

After installing the package, you can use it in your Node.js project as follows (**server.js**):

#### Import Package

First, import `WaBot` from `fhy-wabot`:

```javascript
const { WaBot } = require('fhy-wabot');
```

#### Initialize and Run the Bot

Next, call the `WaBot()` function to initialize and run the bot

**Initialization has fixed rules**:

```javascript
WaBot(QRUrl = false, QRCustom, AutoResponse, ManualResponse, self = false);`
```

> - `QRUrl`: to set the use of QR Url (set: `true` or `false`)
> - `QRCustom`: to create a custom QR url function (if you don't want to use it set to: `null`)
> - `AutoResponse`: to Initialize the function of `AutoResponse` (if you don't want to use it set to: `null`
> - `ManualResponse`: to Initialize the function of `ManualResponse` (if you don't want to use it set to: `null`
> - `self`: to set the use of self mode (set: `true` or `false`)

**Basic usage example that just uses the defaults:**

```javascript
WaBot(QRUrl = false, null, null, null, self = false);
```

You can use another method

```javascript
WaBot(false, null, null, null, false);
```

or

```
WaBot(true, null, null, null, true);
```

#### Usage Example

Here’s a complete example of how to use `fhy-wabot`:

```javascript
const { WaBot } = require('fhy-wabot');

// Default Initialize and run the bot
WaBot(false, null, null, null, false);
```

#### QRCode Url

You can make the QRcode a data URL with the following command:

```javascript
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

WaBot(true, QRCustom, null, null, false);
```


#### Self Mode

```
WaBot(false, null, null, null, true);
```

## Sending Automatic Response Messages

`AutoResponse` is an object used to configure automatic responses that will be given by the bot based on the received input. (supports multi-message).

```javascript
const { WaBot } = require('fhy-wabot');

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

WaBot(false, null, AutoResponse, null, false);
```

> - **response**: The message that will be sent (e.g., 'pong!').
> - **reply**: If set to `true`, the bot will reply to the message with a quote.


#### Text

```javascript
'text': {
    '!text': { 
        response: 'I sent text!', 
        reply: false 
    }
},
```

#### Text With Reaction

```javascript
'textReact': {
    '!text-react': { 
        response: 'I sent text with reaction!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌',  
        reply: false 
    }
},
```

> - **preReact**: Emoji displayed before sending the message (e.g., '⏳').
> - **postReact**: Emoji displayed after the message is sent (e.g., '✅').
> - **errReact**: Emoji displayed if an error occurs (e.g., '❌').

#### Mention

```javascript
'mention': {
    '!mention': { 
        response: '@628xxxxxxxx', 
        mention: '628xxxxxxxx@s.whatsapp.net', 
        reply: false 
    }
},
```

> - **mention**: The ID number of the user to mention.

#### Mention With Reaction

```javascript
'mention': {
    '!mention-react': { 
        response: '@628xxxxxxxx', 
        mention: '628xxxxxxxx@s.whatsapp.net', 
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    }
},
```

#### Location

```javascript
'location': {
    '!location': { 
        latitude: 24.121231,
        longitude: 55.1121221, 
        reply: false 
    }
},
```

> - **latitude**: The latitude of the location to be shared.
> - **longitude**: The longitude of the location to be shared.


#### Location With Reaction

```javascript
'locationReact': {
    '!location-react': { 
        latitude: '24.121231', 
        longitude: '55.1121221', 
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌',  
        reply: false 
    }
},
```

#### Images

```javascript
'images': {
    '!image': { 
        url: './uploads/default.jpg',
        caption: 'I sent caption image!',
        reply: false 
    }
},
```

> - **url**: Image location
> - **caption**: Image caption

#### Images With Reaction

```javascript
'imagesReact': {
    '!image-react': { 
        url: './uploads/default.jpg',
        caption: 'I sent caption image with reaction!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    }
},
```

#### Video

```javascript
'video': {
    '!video': { 
        url: './uploads/default.mp4',
        caption: 'I sent caption video!',
        reply: false 
    },
},
```

#### Video With Reaction

```javascript
'videoReact': {
    '!video-react': { 
        url: './uploads/default.mp4',
        caption: 'I sent caption video with reaction!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    },
},
```

#### Audio

```javascript
'audio': {
    '!audio': { 
        url: './uploads/default.mp3',
        caption: 'I sent caption audio!',
        reply: false 
    },
},
```

#### Audio With Reaction

```javascript
'audioReact': {
    '!audio-react': { 
        url: './uploads/default.mp3',
        caption: 'I sent caption audio with caption!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: true 
    },
},
```

#### Polling

```javascript
'polling': {
	'!poll': { 
		poll: {
			name: 'Title Polling:',
			values: ['Option 1', 'Option 2', 'Option 3'],
			selectableCount: 1
		},
		reply: false 
	}
},
```

> - **name**: Poll Title
> - **values**: Fill in the poll options
> - **selectableCount**: `1` for just one option, `0` for multiple options

#### Polling With Reaction

```
'pollingReact': {
	'!poll-react': { 
		poll: {
			name: 'Title Polling:',
			values: ['Option 1', 'Option 2', 'Option 3'],
			selectableCount: 1
		},
		preReact: '⏳', 
		postReact: '✅', 
		errReact: '❌', 
		reply: false 
	}
}
```

#### VCard

```
'vcard': {
	'!vcard': { 
		contacts: {
			fullName: 'Your Name',
			organization: 'Organization Name',
			phoneId: '+62 8xx xxxx xxxx',
			whatsappId: '628xxxxxxxxxx'
		},
		reply: false 
	}
},
```

> - **fullName**: Contact Name
> - **organization**: Organization Name
> - **phoneId**: Phone number
> - **whatsappId**: Whatsapp number

#### VCard With Reaction

```
'vcardReact': {
	'!vcard-react': { 
		contacts: {
			fullName: 'Your Name',
			organization: 'Organization Name',
			phoneId: '+62 8xx xxxx xxxx',
			whatsappId: '628xxxxxxxxxx'
		},
		preReact: '⏳', 
		postReact: '✅', 
		errReact: '❌', 
		reply: false 
	}
},
```

## Sending Messages

`ManualResponse` is an object used to configure various types of messages you want to send (supports multi-message).

```javascript
const { WaBot } = require('fhy-wabot');

const ManualResponse = {
	text: [
		{
			id: '628xxxxxxxxxx@s.whatsapp.net',
			messageText: 'I sent text!'
		}
	],
};

WaBot(false, null, null, ManualResponse, false);
```

#### Text

```javascript
text: [
    {
        id: '628xxxxxxxxxx@s.whatsapp.net',
         messageText: 'I sent text!'
    }
],
```

> - **id**: Message recipient number
> - **messageText**: Message content

#### Images

```javascript
images: [
    {
        id: '628xxxxxxxxxx@s.whatsapp.net',
        url: './uploads/default.jpg',
        caption: 'I sent image!'
    }
],
```

> - **url**: Image location
> - **caption**: Image caption

#### Video

```javascript
video: [
	{
		id: '628xxxxxxxxxx@s.whatsapp.net',
		url: './uploads/default.mp4',
		caption: 'I sent video!'
	}
],
```

#### Audio

```javascript
audio: [
	{
		id: '628xxxxxxxxxx@s.whatsapp.net',
		url: './uploads/default.mp3',
		caption: 'I sent audio!'
	}
],
```

#### Mention

```javascript
mention: [
	{
		id: '628xxxxxxxxxx@s.whatsapp.net',
		messageText: '@6281xxxxxxxxx', 
		mention: '6281xxxxxxxxx@s.whatsapp.net'
	}
],
```

> - **mention**: ID number to mention


#### Location

```javascript
location: [
	{
		id: '628xxxxxxxxxx@s.whatsapp.net',
		latitude: 24.121231, 
		longitude: 55.1121221
	}
],
```

> - **latitude**: The latitude of the location to be shared.
> - **longitude**: The longitude of the location to be shared.

#### Polling

```javascript
polling: [
	{
		id: '628xxxxxxxxxx@s.whatsapp.net',
		name: 'Title Polling:',
		values: ['Option 1', 'Option 2', 'Option 3'],
		selectableCount: 1
	}
],
```

> - **name**: Poll Title
> - **values**: Fill in the poll options
> - **selectableCount**: `1` for just one option, `0` for multiple options

#### VCard

```
vcard: [
	{
		id: '628xxxxxxxxxx@s.whatsapp.net',
		fullName: 'Your Name',
		organization: 'Organization Name',
		phoneId: '+62 8xx xxxx xxxx',
		whatsappId: '628xxxxxxxxxx'
	}
],
```

> - **fullName**: Contact Name
> - **organization**: Organization Name
> - **phoneId**: Phone number
> - **whatsappId**: Whatsapp number

## Complete Usage Example

```javascript
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

WaBot(true, QRCustom, AutoResponse, ManualResponse, false);
```

## Advanced Usage Example

```javascript
const { WaBot } = require('fhy-wabot');

const AutoResponse = {};
const ManualResponse = {};

(async () => {
    const sock = await WaBot(false, null, AutoResponse, ManualResponse, false);

    sock.ev.on('messages.upsert', async (messageUpdate) => {
        const message = messageUpdate.messages[0];
        const sender = message.key.remoteJid;
        const text = message.message.conversation || message.message.extendedTextMessage?.text || '';

        if (text.toLowerCase() === '!hi') {
            try {
                await sock.sendMessage(sender, { text: 'oh hello there' });
            } catch (error) {
                console.error(`Error occurred: ${error.message}`);
            }
        }
    });
})();
```

#### Download Media Message

To download media you need `downloadMediaMessage`, `fs`, and `path`

```javascript
const { WaBot, downloadMediaMessage } = require('fhy-wabot');
const fs = require('fs');
const path = require('path');
```

Usage example for downloading media when quoting a media message with the `.download` command:

```javascript
if (text.toLowerCase() === '.download') {
	const quotedMessage = message.message.extendedTextMessage?.contextInfo?.quotedMessage;
	if (quotedMessage?.imageMessage) {
		try {
			const buffer = await downloadMediaMessage({ message: quotedMessage }, 'buffer');
			const inputFilePath = path.join(__dirname, './download.jpg');
			fs.writeFileSync(inputFilePath, buffer);
			console.log(`Image downloaded: ${inputFilePath}`);
		} catch (error) {
			console.error(`Error occurred: ${error.message}`);
		}
	} else {
		console.log("Quoted message is not an image.");
	}
}
```

## Advanced Full Usage Example

```javascript
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
    const sock = await WaBot(true, QRCustom, AutoResponse, ManualResponse, false);

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
```

## Send Message With Endpoint

```javascript
const express = require('express');
const { WaBot } = require('fhy-wabot');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post('/send-message', async (req, res) => {
    const { id, messageText } = req.body;

    if (!id || !messageText) {
        return res.status(400).json({ error: 'ID and messageText are required.' });
    }

    const ManualResponse = {
        text: [{ id: `${id}@s.whatsapp.net`, messageText }]
    };

    try {
        await WaBot(false, null, null, ManualResponse, false);
        res.json({ message: 'Message sent successfully.', recipient: `${id}@s.whatsapp.net` });
    } catch (error) {
        console.error('Failed to send message:', error);
        res.status(500).json({ error: 'Failed to send message.' });
    }
});
```

> - npm install express
> - Endpoint: `http://localhost:3000/send-message`
> - Body Request: `{ "id": "628xxxxxxxxxx", "messageText": "Hello from Endpoint!" }`

## Support and Contributions

If you encounter any issues or have questions regarding the use of this package, please open an issue in your GitHub repository. Contributions are also very welcome to improve the features and functionality of `fhy-wabot`.
