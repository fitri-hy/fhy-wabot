- [English Version](./README.md)
- [Versi Bahasa Indonesia](./README--id.md)

# Dokumentasi

`fhy-wabot` adalah paket Node.js yang dirancang untuk mempermudah penggunaan WhatsApp Bot.

## Instalasi

Untuk menginstal paket `fhy-wabot`, jalankan perintah berikut di terminal:

```
npm install fhy-wabot

```

#### Cara Penggunaan

Setelah menginstal paket, Anda dapat menggunakannya dalam proyek Node.js Anda dengan cara berikut (**server.js**):

#### Import Paket

Pertama, import `WaBot` dari `fhy-wabot`:

```javascript
const { WaBot } = require('fhy-wabot');
```

#### Inisialisasi dan Jalankan Bot

Selanjutnya, panggil fungsi `WaBot()` untuk menginisialisasi dan menjalankan bot:

```javascript
WaBot();
```

#### Contoh Penggunaan

Berikut adalah contoh lengkap cara menggunakan `fhy-wabot`:

```javascript
const { WaBot } = require('fhy-wabot');

// Inisialisasi dan jalankan bot
WaBot();
```

## Mengirim Pesan

`ManualResponse` adalah objek yang digunakan untuk mengatur berbagai jenis pesan yang ingin Anda kirim (mendukung multi Pesan).

#### Pesan Teks

Untuk mengirim pesan teks, Anda dapat menggunakan struktur berikut:

```javascript
const ManualResponse = {
    text: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            messageText: 'Saya mengirim teks!'
        }
        // Anda bisa menambakan data pesan lainnya disini.
    ],
};
```

#### Pesan Gambar

Untuk mengirim gambar, gunakan struktur berikut:

```javascript
const ManualResponse = {
    images: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './path/default.jpg',
            caption: 'Saya mengirim gambar!'
        }
        // Anda bisa menambakan data pesan lainnya disini.
    ],
};
```

#### Pesan Video

Untuk mengirim video, gunakan struktur berikut:

```javascript
const ManualResponse = {
    video: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './path/default.mp4',
            caption: 'Saya mengirim video!'
        }
    ],
    // Data lainnya bisa Anda tambahkan disini.
};
```

#### Pesan Audio

Untuk mengirim audio, gunakan struktur berikut:

```javascript
const ManualResponse = {
    video: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './path/default.mp3',
            caption: 'Saya mengirim audio!'
        }
    ],
    // Data lainnya bisa Anda tambahkan disini.
};
```

#### Pesan Mention

Untuk mengirim pesan yang menyebut pengguna lain, gunakan struktur berikut:

```javascript
const ManualResponse = {
    mention: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            messageText: '@6281xxxxxxxxx', 
            mention: '6281xxxxxxxxx@s.whatsapp.net'
        }
    ],
    // Data lainnya bisa Anda tambahkan disini.
};
```

#### Pesan Lokasi

Untuk mengirim lokasi, gunakan struktur berikut:

```javascript
const ManualResponse = {
    location: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            latitude: 24.121231, 
            longitude: 55.1121221
        }
    ],
    // Data lainnya bisa Anda tambahkan disini.
};
```

#### Contoh Penggunaan

Anda dapat menggabungkan berbagai jenis pesan dalam satu objek ManualResponse sebelum mengirimnya. Berikut adalah contoh cara mengirim semua jenis pesan sekaligus:

```javascript
const { WaBot } = require('fhy-wabot');

const ManualResponse = {
    text: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            messageText: 'Pesan anda'
        }
    ],
    images: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './uploads/default.jpg',
            caption: 'Pesan anda'
        }
    ],
    video: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './uploads/default.mp4',
            caption: 'Pesan anda'
        }
    ],
    audio: [
        {
            id: '628xxxxxxxxxx@s.whatsapp.net',
            url: './uploads/default.mp3',
            caption: 'Pesan anda'
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

#### Contoh Penggunaan Endpoint 

Endpoint ini digunakan untuk mengirim pesan menggunakan objek `ManualResponse` yang dikirim melalui permintaan `POST`.

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

**Body Permintaan**:

```javascript
{
  "ManualResponse": {
    "text": [
      {
        "id": "628xxxxxxxxxx@s.whatsapp.net",
        "messageText": "Pesan anda.
  }
}
```

## Mengirim Respon Pesan Otomatis

`AutoResponse` adalah objek yang digunakan untuk mengatur respons otomatis yang akan diberikan oleh bot berdasarkan input yang diterima. (mendukung multi Pesan).

#### Respons Teks

Bot akan merespon jika mendapatkan awalan pesan `!text`

```javascript
'text': {
    '!text': { 
        response: 'Saya mengirim pesan!', 
        reply: false 
    }
    // Data lainnya bisa Anda tambahkan disini.
}
```

- **response**: Pesan yang akan dikirimkan (misalnya, 'pong!').
- **reply**: Jika diatur ke true, bot akan membalas pesan dengan mengutip.

#### Respons Teks dengan Reaksi

Bot akan merespon dengan Reaksi jika mendapatkan awalan pesan `!text-react`

```javascript
'textReact': {
    '!text-react': { 
        response: 'Saya mengirim pesan dengan reaksi!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌',  
        reply: false 
    }
    // Data lainnya bisa Anda tambahkan disini.
}
```

- **preReact**: Emoji yang ditampilkan sebelum mengirim pesan (misalnya, '⏳').
- **postReact**: Emoji yang ditampilkan setelah pesan dikirim (misalnya, '✅').
- **errReact**: Emoji yang ditampilkan jika terjadi kesalahan (misalnya, '❌').

#### Respons Menyebut Pengguna

Bot akan merespon jika mendapatkan awalan pesan `!mention`

```javascript
'mention': {
    '!mention': { 
        response: '@628xxxxxxxxxx', 
        mention: '628xxxxxxxxxx@s.whatsapp.net', 
        reply: false 
    }
    // Data lainnya bisa Anda tambahkan disini.
}
```

- **mention**: ID pengguna yang akan disebut.

#### Respons Menyebut Pengguna Dengan Reaksi

Bot akan merespon dengan Reaksi jika mendapatkan awalan pesan `!mention-react`

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
    // Data lainnya bisa Anda tambahkan disini.
}
```

#### Respons Lokasi

Bot akan merespon dengan mengirimkan lokasi jika mendapatkan awalan pesan `!location`

```javascript
'location': {
    '!location': { 
        latitude: 24.121231, 
        longitude: 55.1121221, 
        reply: false 
    }
    // Data lainnya bisa Anda tambahkan disini.
}
```

- **latitude**: Latitude dari lokasi yang akan dibagikan.
- **longitude**: Longitude dari lokasi yang akan dibagikan.

#### Respons Lokasi Dengan Reaksi

Bot akan merespon dengan mengirimkan lokasi & reaksi jika mendapatkan awalan pesan `!location-react`

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
    // Data lainnya bisa Anda tambahkan disini.
}
```

#### Respons Gambar

Bot akan merespon dengan mengirimkan gambar jika mendapatkan awalan pesan `!image`

```javascript
'images': {
    '!image': { 
        url: './path/default.jpg',
        caption: 'Saya mengirim gambar!',
        reply: false 
    }
    // Data lainnya bisa Anda tambahkan disini.
}
```

#### Respons Gambar Dengan Reaksi

Bot akan merespon dengan mengirimkan gambar & reaksi jika mendapatkan awalan pesan `!image-react`

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
    // Data lainnya bisa Anda tambahkan disini.
}
```

#### Respons Video

Bot akan merespon dengan mengirimkan Video jika mendapatkan awalan pesan `!video`

```javascript
'video': {
    '!video': { 
        url: './path/default.mp4',
        caption: 'Saya mengirim video!',
        reply: false 
    },
    // Data lainnya bisa Anda tambahkan disini.
}
```

#### Respons Video Dengan Reaksi

Bot akan merespon dengan mengirimkan Video & reaksi jika mendapatkan awalan pesan `!video-react`

```javascript
'videoReact': {
    '!video-react': { 
        url: './path/default.mp4',
        caption: 'Saya mengirim video & reaksi!',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    },
    // Data lainnya bisa Anda tambahkan disini.
}
```

#### Respons Audio

Bot akan merespon dengan mengirimkan Audio jika mendapatkan awalan pesan `!audio`

```javascript
'audio': {
    '!audio': { 
        url: './path/default.mp3',
        reply: false 
    },
    // Data lainnya bisa Anda tambahkan disini.
}
```

#### Respons Audio Dengan Reaksi

Bot akan merespon dengan mengirimkan Audio & reaksi jika mendapatkan awalan pesan `!audio-react`

```javascript
'audioReact': {
    '!audio-react': { 
        url: './path/default.mp3',
        preReact: '⏳', 
        postReact: '✅', 
        errReact: '❌', 
        reply: false 
    },
    // Data lainnya bisa Anda tambahkan disini.
}
```

## Dukungan dan Kontribusi

Jika Anda menemukan masalah atau memiliki pertanyaan mengenai penggunaan paket ini, silakan buka isu di repository GitHub Anda. Kontribusi juga sangat diterima untuk meningkatkan fitur dan fungsionalitas `fhy-wabot`.