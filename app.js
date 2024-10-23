const { WaBot } = require('fhy-wabot');

const AutoResponse = {
    'text': {
        '!text': { 
			response: 'pong!', 
			reply: false 
		}
    },
	'textReact': {
        '!text-react': { 
			response: 'pong react!',
			preReact: '⏳', 
			postReact: '✅', 
			errReact: '❌',  
			reply: false 
		}
    },
	'mention': {
        '!mention': { 
			response: '@6289653518308', 
			mention: '6289653518308@s.whatsapp.net', 
			reply: false 
		}
    },
	'mentionReact': {
        '!mention-react': { 
			response: '@6289653518308', 
			mention: '6289653518308@s.whatsapp.net', 
			preReact: '⏳', 
			postReact: '✅', 
			errReact: '❌', 
			reply: false 
		}
    },
	'location': {
        '!location': { 
			latitude: 24.121231, 
			longitude: 55.1121221, 
			reply: false 
		}
    },
	'locationReact': {
        '!location-react': { 
			latitude: 24.121231, 
			longitude: 55.1121221, 
			preReact: '⏳', 
			postReact: '✅', 
			errReact: '❌',  
			reply: false 
		}
    },
	'images': {
        '!image': { 
			url: './uploads/default.jpg',
			caption: 'Gambar Local',
			reply: false 
		}
    },
	'imagesReact': {
        '!image-react': { 
			url: './uploads/default.jpg',
			caption: 'Gambar Local Reaction',
			preReact: '⏳', 
			postReact: '✅', 
			errReact: '❌', 
			reply: false 
		}
    },
	'video': {
        '!video': { 
			url: './uploads/default.mp4',
			caption: 'Video Local',
			reply: false 
		},
    },
	'videoReact': {
        '!video-react': { 
			url: './uploads/default.mp4',
			caption: 'Video Local Reaction',
			preReact: '⏳', 
			postReact: '✅', 
			errReact: '❌', 
			reply: false 
		},
    },
	'audio': {
        '!audio': { 
			url: './uploads/default.mp3',
			caption: 'Audio Local',
			reply: false 
		},
    },
	'audioReact': {
        '!audio-react': { 
			url: './uploads/default.mp3',
			caption: 'Audio Local Reaction',
			preReact: '⏳', 
			postReact: '✅', 
			errReact: '❌', 
			reply: false 
		},
    },
};

/*
const ManualResponse = {
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
};
*/

WaBot(AutoResponse, ManualResponse);
