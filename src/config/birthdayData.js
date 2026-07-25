// =========================================================================
// 💖 BIRTHDAY GIFT WEBSITE CONFIGURATION FILE 💖
// =========================================================================
// YOU CAN EDIT ANY TEXT, NAMES, DATES, OR PHOTOS IN THIS FILE!
// 
// 📸 HOW TO ADD YOUR OWN PHOTOS:
// 1. Copy your photo files (photo1.jpg, photo2.jpg, etc.) into:
//    birthday-app/public/
// 2. Change the image link below to: "/photo1.jpg", "/photo2.jpg", etc.
// =========================================================================

export const birthdayData = {
  // 👑 HER DETAILS (Change these to her name and nickname!)
  birthdayGirl: {
    name: "My Princess",             // EDIT: Her full name
    nickname: "Babe",                 // EDIT: Her nickname
    age: "22",                        // EDIT: Her age
    birthDate: "2026-07-25",          // EDIT: Her birthday date
    favoriteColor: "#f43f5e",
  },

  coupleData: {
    relationshipStartDate: "2023-02-14",
    songTitle: "Romantic Melody (Playing for You)",
    backgroundMusicUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-acoustic-guitar-114427.mp3",
  },

  // 📸 PHOTO GALLERY (Surrounds your main Birthday Letter on Page 3)
  // Each photo has an image link + caption text!
  // Replace image URLs with "/photo1.jpg", "/photo2.jpg", etc. placed in birthday-app/public/
  polaroids: [
    {
      id: 1,
      title: "Your Cutest Smile 💖",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      caption: "This smile right here can cure my worst day in seconds!"
    },
    {
      id: 2,
      title: "Cozy Stargazing 🌟",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600",
      caption: "Out of all the stars in the night sky, you shine the brightest."
    },
    {
      id: 3,
      title: "Our Goofy Moments 🤪",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
      caption: "I love being silly with you and laughing until our stomachs hurt."
    },
    {
      id: 4,
      title: "Birthday Queen 👑",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
      caption: "Happy Birthday to the girl who stole my heart forever."
    },
    {
      id: 5,
      title: "Unforgettable Walks 🌸",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600",
      caption: "Holding your hand and walking beside you is my favorite place."
    },
    {
      id: 6,
      title: "Coffee & Endless Talks ☕",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600",
      caption: "Hours feel like seconds whenever I look into your eyes."
    },
    {
      id: 7,
      title: "Sunset Magic 🌌",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
      caption: "Every sunset is more beautiful when shared with you."
    },
    {
      id: 8,
      title: "Forever & Always 💕",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600",
      caption: "Here is to celebrating YOU today and loving you forever!"
    }
  ],

  // 📜 MAIN HANDWRITTEN BIRTHDAY WISH LETTER
  // You can edit every sentence below!
  mainWishLetter: {
    salutation: "To My Dearest & Most Special Girl,",
    paragraphs: [
      "Happy Birthday, my love! Today is all about celebrating the day the world was blessed with your wonderful presence.",
      "Looking back at all our memories, laughs, and quiet moments together, I am constantly reminded of how incredibly lucky I am to have you by my side. You bring warmth, kindness, and magic into my life every single day.",
      "May this birthday bring you as much happiness as you give to everyone around you. I promise to keep loving you, supporting your dreams, and making you smile forever.",
      "Happy Birthday once again, my gorgeous Queen! 💖🎂✨"
    ],
    signature: "Forever Yours,",
    author: "Your Loving Partner ❤️"
  }
};
