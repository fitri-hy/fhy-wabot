- [English Version](./README.md)
- [Versi Bahasa Indonesia](./README-id.md)

# Dokumentasi

fhy-wabot adalah paket Node.js yang dirancang untuk menyederhanakan penggunaan WhatsApp Bot.

## Instalasi

Untuk menginstal paket `fhy-wabot`, jalankan perintah berikut di terminal:

```
npm install fhy-wabot

```

#### Penggunaan

Setelah menginstal paket, Anda dapat menggunakannya di proyek Node.js Anda sebagai berikut (**server.js**):

#### Paket Impor

Pertama, impor `WaBot` dari `fhy-wabot`:

```javascript
const { WaBot } = require('fhy-wabot');
```

#### Inisialisasi dan Jalankan Bot

Selanjutnya, panggil fungsi `WaBot()` untuk menginisialisasi dan menjalankan bot:

```javascript
WaBot(false, null, null, null);
```

#### Contoh Penggunaan

Berikut contoh lengkap cara menggunakan `fhy-wabot`:

```javascript
const { WaBot } = require('fhy-wabot');

// Inisialisasi dan jalankan bot
WaBot(false, null, null, null);
```

#### URL QRCode

Anda dapat menjadikan QRcode sebagai URL data dengan perintah berikut:

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

## Mengirim Pesan Respons Otomatis

`AutoResponse` adalah objek yang digunakan untuk mengonfigurasi respons otomatis yang akan diberikan oleh bot berdasarkan masukan yang diterima. (mendukung multi-pesan).

```javascript
const { WaBot } = require('fhy-wabot');

const AutoResponse = {
    'text': {
        '!text': { 
			response: 'pong!', 
			reply: false 
		}
		// Anda dapat menambahkan data lain di sini
    },
    // Anda dapat menambahkan tipe data lain di sini
};

WaBot(false, null, AutoResponse, null);
```

> - **response**: Pesan yang akan dikirim (misal, 'pong!').
> - **reply**: Jika disetel ke `true`, bot akan membalas pesan dengan kutipan.


#### Teks

```javascript
'text': {
    '!text': { 
        response: 'I sent text!', 
        reply: false 
    }
},
```

#### Teks Dengan Reaksi

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

> - **preReact**: Emoji ditampilkan sebelum mengirim pesan (misalnya, '⏳').
> - **postReact**: Emoji ditampilkan setelah pesan terkirim (misalnya, '✅').
> - **errReact**: Emoji ditampilkan jika terjadi kesalahan (misalnya, '❌').

#### Menyebutkan

```javascript
'mention': {
    '!mention': { 
        response: '@628xxxxxxxx', 
        mention: '628xxxxxxxx@s.whatsapp.net', 
        reply: false 
    }
},
```

> - **mention**: Nomor ID pengguna yang ingin disebutkan.

#### Sebutkan Dengan Reaksi

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

#### Lokasi

```javascript
'location': {
    '!location': { 
        latitude: 24.121231,
        longitude: 55.1121221, 
        reply: false 
    }
},
```

> - **latitude**: Garis lintang lokasi yang akan dibagikan.
> - **longitude**: Bujur lokasi yang akan dibagikan.


#### Lokasi Dengan Reaksi

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

#### Gambar

```javascript
'images': {
    '!image': { 
        url: './uploads/default.jpg',
        caption: 'I sent caption image!',
        reply: false 
    }
},
```

> - **url**: Lokasi gambar
> - **caption**: Keterangan gambar

#### Gambar Dengan Reaksi

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

#### Video Dengan Reaksi

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

#### Audio Dengan Reaksi

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

## Mengirim Pesan

`ManualResponse` adalah objek yang digunakan untuk mengkonfigurasi berbagai jenis pesan yang ingin dikirim (mendukung multi-pesan).

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

> - **id**: Nomor penerima pesan
> - **messageText**: Isi pesan

#### Gambar

```javascript
images: [
    {
        id: '628xxxxxxxxxx@s.whatsapp.net',
        url: './uploads/default.jpg',
        caption: 'I sent image!'
    }
],
```

> - **url**: Lokasi gambar
> - **caption**: Keterangan gambar

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

#### Menyebutkan

```javascript
mention: [
	{
		id: '628xxxxxxxxxx@s.whatsapp.net',
		messageText: '@6281xxxxxxxxx', 
		mention: '6281xxxxxxxxx@s.whatsapp.net'
	}
],
```

> - **mention**: Nomor ID untuk disebutkan


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

> - **latitude**: Garis lintang lokasi yang akan dibagikan.
> - **longitude**: Bujur lokasi yang akan dibagikan.

## Contoh Penggunaan Lengkap

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
        // Anda dapat menambahkan data lain di sini
    },
    // Anda dapat menambahkan tipe data lain di sini
};

const ManualResponse = {
	text: [
		{
			id: '628xxxxxxxxxx@s.whatsapp.net',
			messageText: 'I sent text!'
		}
        // Anda dapat menambahkan data lain di sini
	],
    // Anda dapat menambahkan tipe data lain di sini
};

WaBot(true, QRCustom, AutoResponse, ManualResponse);
```

## Contoh Penggunaan Tingkat Lanjut

```javascript
const { WaBot } = require('fhy-wabot');

(async () => {
    const sock = await WaBot(false, null, null, null);

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

## Contoh Penggunaan Penuh Tingkat Lanjut

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
        // Anda dapat menambahkan data lain di sini
    },
    // Anda dapat menambahkan tipe data lain di sini
};

const ManualResponse = {
	text: [
		{
			id: '628xxxxxxxxxx@s.whatsapp.net',
			messageText: 'I sent text!'
		}
        // Anda dapat menambahkan data lain di sini
	],
    // Anda dapat menambahkan tipe data lain di sini
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
        // Anda dapat menambahkan data tingkat lanjut lain di sini
    });
})();
```

## Dukungan dan Kontribusi

Jika Anda mengalami masalah atau memiliki pertanyaan mengenai penggunaan paket ini, silakan buka masalah di repositori GitHub Anda. Kontribusi juga sangat diharapkan untuk meningkatkan fitur dan fungsionalitas `fhy-wabot`.