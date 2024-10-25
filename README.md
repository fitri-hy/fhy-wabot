- [English Version](./README.md)
- [Versi Bahasa Indonesia](./README-id.md)

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

Next, call the `WaBot()` function to initialize and run the bot:

```javascript
WaBot(false, null, null, null);
```

#### Usage Example

Here’s a complete example of how to use `fhy-wabot`:

```javascript
const { WaBot } = require('fhy-wabot');

// Initialize and run the bot
WaBot(false, null, null, null);
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

WaBot(true, QRCustom, null, null);
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

WaBot(false, null, AutoResponse, null);
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

```
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

WaBot(false, null, null, ManualResponse);
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

```
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

WaBot(true, QRCustom, AutoResponse, ManualResponse);
```

## Advanced Usage Example

```javascript
const { WaBot } = require('fhy-wabot');

const AutoResponse = {};
const ManualResponse = {};

(async () => {
    const sock = await WaBot(false, null, AutoResponse, ManualResponse);

    sock.ev.on('messages.upsert', async ({ messages }) => {
        const { remoteJid: sender } = messages[0].key;
        const text = messages[0].message.conversation || messages[0].message.extendedTextMessage?.text || '';

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
```

## Support and Contributions

If you encounter any issues or have questions regarding the use of this package, please open an issue in your GitHub repository. Contributions are also very welcome to improve the features and functionality of `fhy-wabot`.