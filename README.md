- [English Version](./README.md)
- [Versi Bahasa Indonesia](./README--id.md)

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
WaBot();
```

#### Usage Example

Here’s a complete example of how to use `fhy-wabot`:

```javascript
const { WaBot } = require('fhy-wabot');

// Initialize and run the bot
WaBot();
```

## Sending Messages

`ManualResponse` is an object used to configure various types of messages you want to send (supports multi-message).

#### Text Messages

To send a text message, you can use the following structure:

```javascript
const ManualResponse = {
    text: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            messageText: 'I am sending text!'
        }
        // You can add other message data here.
    ],
};
```

#### Image Messages

To send an image, use the following structure:

```javascript
const ManualResponse = {
    images: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './path/default.jpg',
            caption: 'I am sending an image!'
        }
        // You can add other message data here.
    ],
};
```

#### Video Messages

To send a video, use the following structure:

```javascript
const ManualResponse = {
    video: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './path/default.mp4',
            caption: 'I am sending a video!'
        }
    ],
    // You can add other data here.
};
```

#### Audio Messages

To send audio, use the following structure:

```javascript
const ManualResponse = {
    video: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './path/default.mp3',
            caption: 'I am sending audio!'
        }
    ],
    // You can add other data here.
};
```

#### Mention Messages

To send a message mentioning another user, use the following structure:

```javascript
const ManualResponse = {
    mention: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            messageText: '@6281xxxxxxxxx', 
            mention: '6281xxxxxxxxx@s.whatsapp.net'
        }
    ],
    // You can add other data here.
};
```

#### Location Messages

To send a location, use the following structure:

```javascript
const ManualResponse = {
    location: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            latitude: 24.121231, 
            longitude: 55.1121221
        }
    ],
    // You can add other data here.
};
```

#### Usage Example

You can combine various types of messages in one `ManualResponse` object before sending it. Here’s an example of how to send all types of messages at once:
```javascript
const { WaBot } = require('fhy-wabot');

const ManualResponse = {
    text: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            messageText: 'Your message'
        }
    ],
    images: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './uploads/default.jpg',
            caption: 'Your message'
        }
    ],
    video: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './uploads/default.mp4',
            caption: 'Your message'
        }
    ],
    audio: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './uploads/default.mp3',
            caption: 'Your message'
        }
    ],
    mention: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            messageText: '@6281xxxxxxxxx', 
            mention: '6281xxxxxxxxx@s.whatsapp.net'
        }
    ],
    location: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            latitude: 24.121231, 
            longitude: 55.1121221
        }
    ],
};

WaBot.sendMessage(ManualResponse);
```

#### Endpoint Usage Example

This endpoint is used to send messages using the `ManualResponse` object sent via a `POST` request.

```javascript
const { WaBot } = require('fhy-wabot');

app.post('/send-message', async (req, res) => {
    const { ManualResponse } = req.body;
    if (!ManualResponse) return res.status(400).json({ error: 'ManualResponse is required' });

    try {
        await WaBot(req.body.AutoResponse, ManualResponse);
        res.status(200).json({ message: 'Messages sent successfully' });
    } catch (err) {
        console.error('Error sending messages:', err);
        res.status(500).json({ error: 'Error sending messages' });
    }
});

WaBot.sendMessage(ManualResponse);
```

**Request Body:**:

```javascript
{
  "ManualResponse": {
    "text": [
      {
        "id": "628xxxxxxxxxx@s.whatsapp.net",
        "messageText": "You message"
      }
    ],
    // You can add other data here
  }
}
```

## Sending Automatic Response Messages

`AutoResponse` is an object used to configure automatic responses that will be given by the bot based on the received input. (supports multi-message).

#### Text Response

The bot will respond if it receives a message starting with `!text`

```javascript
'text': {
    '!text': { 
        response: 'I am sending a message!', 
        reply: false 
    }
    // You can add other data here
}
```

- **response**: The message that will be sent (e.g., 'pong!').
- **reply**: If set to true, the bot will reply to the message with a quote.

#### Text Response with Reaction

The bot will respond with a reaction if it receives a message starting with `!text-react`

```javascript
'textReact': {
    '!text-react': { 
        response: 'I am sending a message with a reaction!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌',  
        reply: false 
    }
    // You can add other data here
}
```

- **preReact**: Emoji displayed before sending the message (e.g., '⏳').
- **postReact**: Emoji displayed after the message is sent (e.g., '✅').
- **errReact**: Emoji displayed if an error occurs (e.g., '❌').

#### User Mention Response

The bot will respond if it receives a message starting with `!mention`

```javascript
'mention': {
    '!mention': { 
        response: '@628xxxxxxxxxx', 
        mention: '628xxxxxxxxxx@s.whatsapp.net', 
        reply: false 
    }
    // You can add other data here
}
```

- **mention**: The ID of the user to mention.

#### User Mention Response with Reaction

The bot will respond with a reaction if it receives a message starting with `!mention-react`

```javascript
'mentionReact': {
    '!mention-react': { 
        response: '@628xxxxxxxxxx', 
        mention: '628xxxxxxxxxx@s.whatsapp.net', 
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    }
    // You can add other data here
}
```

#### Location Response

The bot will respond by sending a location if it receives a message starting with `!location`

```javascript
'location': {
    '!location': { 
        latitude: 24.121231, 
        longitude: 55.1121221, 
        reply: false 
    }
    // You can add other data here
}
```

- **latitude**: The latitude of the location to be shared.
- **longitude**: The longitude of the location to be shared.

#### Location Response with Reaction

The bot will respond by sending a location & reaction if it receives a message starting with `!location-react`

```javascript
'locationReact': {
    '!location-react': { 
        latitude: 24.121231, 
        longitude: 55.1121221, 
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌',  
        reply: false 
    }
    // You can add other data here
}
```

#### Image Response

The bot will respond by sending an image if it receives a message starting with `!image`

```javascript
'images': {
    '!image': { 
        url: './path/default.jpg',
        caption: 'Saya mengirim gambar!',
        reply: false 
    }
    // You can add other data here
}
```

#### Image Response with Reaction

The bot will respond by sending an image & reaction if it receives a message starting with `!image-react`

```javascript
'imagesReact': {
    '!image-react': { 
        url: './path/default.jpg',
        caption: 'Saya mengirim gambar dengan reaksi!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    }
    // You can add other data here
}
```

#### Video Response

The bot will respond by sending a Video if it receives a message starting with `!video`

```javascript
'video': {
    '!video': { 
        url: './path/default.mp4',
        caption: 'I am sending a video!',
        reply: false 
    },
    // You can add other data here
}
```

#### Video Response With Reactions

The bot will respond by sending a Video & reactions if it receives a message starting with `!video-react`

```javascript
'videoReact': {
    '!video-react': { 
        url: './path/default.mp4',
        caption: 'I am sending a video & reation!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    },
    // You can add other data here
}
```

#### Audio Response

The bot will respond by sending Audio if it receives a message starting with `!audio`

```javascript
'audio': {
    '!audio': { 
        url: './path/default.mp3',
        reply: false 
    },
    // You can add other data here
}
```

#### Audio Response With Reactions

The bot will respond by sending Audio & reactions if it receives a message starting with `!audio-react`

```javascript
'audioReact': {
    '!audio-react': { 
        url: './path/default.mp3',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    },
    // You can add other data here
}
```

## Support and Contributions

If you encounter any issues or have questions regarding the use of this package, please open an issue in your GitHub repository. Contributions are also very welcome to improve the features and functionality of `fhy-wabot`.