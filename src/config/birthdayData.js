// =========================================================================
// 💖 BIRTHDAY GIFT WEBSITE CONFIGURATION FILE 💖
// =========================================================================
// YOU CAN EDIT ANY TEXT, NAMES, DATES, QUESTIONS, OR PHOTOS IN THIS FILE!
// 
// 📸 HOW TO ADD YOUR OWN PHOTOS:
// 1. Copy your photo files (e.g. photo1.jpg, photo2.jpg) into the folder:
//    birthday-app/public/
// 2. Change the image link below to: "/photo1.jpg", "/photo2.jpg", etc.
// =========================================================================

export const birthdayData = {
  // 👑 HER DETAILS (Change these to her name and nickname!)
  birthdayGirl: {
    name: "My Princess",             // EDIT: Her full name or main name
    nickname: "Babe",                 // EDIT: Her nickname
    age: "22",                        // EDIT: Her age
    birthDate: "2026-07-25",          // EDIT: Her birthday date
    favoriteColor: "#f43f5e",
  },

  coupleData: {
    relationshipStartDate: "2023-02-14",
    songTitle: "Romantic Melody (Playing for You)",
    // Royalty-free acoustic romantic melody audio track (You can replace with your own MP3 link!)
    backgroundMusicUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-acoustic-guitar-114427.mp3",
  },

  // 🎮 INTERACTIVE MEMORY TRIVIA QUIZ
  // If she types the wrong answer or forgets, she can tap "Blow a Kiss to Skip" 💋!
  triviaQuiz: [
    {
      id: 1,
      question: "Which month & day did our beautiful story officially begin?",
      hint: "Think of the day of love & romance! ❤️ (e.g. Feb 14 or February 14)",
      answers: ["feb 14", "february 14", "feb14", "14 feb", "14 february", "02/14", "14/02"],
      skipMessage: "Skipped with a sweet kiss! 😘 I forgive your memory, my love!"
    },
    {
      id: 2,
      question: "What is my absolute favorite nickname for you?",
      hint: "Starts with P or B! 😉",
      answers: ["princess", "babe", "baby", "cutie", "sweetheart", "my love", "angel", "queen"],
      skipMessage: "Kiss accepted! 💋 You are still my one and only Princess!"
    },
    {
      id: 3,
      question: "Where did we go on our first favorite date together?",
      hint: "That cozy spot where we talked for hours!",
      answers: ["cafe", "coffee", "restaurant", "park", "diner", "coffee shop", "beach", "cinema"],
      skipMessage: "A kiss is way better than a correct answer anyway! 😘 Access granted!"
    }
  ],

  // 📖 OUR STORY TIMELINE MILESTONES
  // (You can edit titles, dates, descriptions, and photo links below!)
  timelineEvents: [
    {
      id: 1,
      date: "The Day We First Met",
      title: "Sparks at First Sight ✨",
      description: "I still remember the exact outfit you were wearing and how your beautiful smile lit up the whole room. I knew right then my life was changed forever.",
      tag: "First Glance",
      icon: "Sparkles",
      // Put your photo in birthday-app/public/met.jpg and change link to: "/met.jpg"
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      date: "Our First Official Date",
      title: "Butterflies & Endless Talks ☕",
      description: "We sat across from each other ordering coffee, but time completely stopped. 3 hours felt like 3 minutes. I couldn't stop looking into your eyes.",
      tag: "Unforgettable",
      icon: "Heart",
      // Put your photo in birthday-app/public/first-date.jpg and change link to: "/first-date.jpg"
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      date: "Our Favorite Getaway",
      title: "Adventures & Starry Nights 🌌",
      description: "Remember watching the sunset together and laughing until our stomachs hurt? Holding your hand during that trip was pure magic.",
      tag: "Adventure",
      icon: "Compass",
      // Put your photo in birthday-app/public/trip.jpg and change link to: "/trip.jpg"
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      date: "Today & Forever",
      title: "Celebrating YOU My Queen 👑",
      description: "Every single day with you is a gift. Today is all about celebrating the incredible, kind, funny, gorgeous soul that you are!",
      tag: "Birthday Girl",
      icon: "Gift",
      // Put your photo in birthday-app/public/today.jpg and change link to: "/today.jpg"
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600"
    }
  ],

  // 📸 3D VINTAGE POLAROID SCRAPBOOK
  // Clicking any photo flips it over 180° to reveal the secret note written on the back!
  polaroids: [
    {
      id: 1,
      title: "Your Cutest Smile 💖",
      date: "Precious Memory",
      // Put your photo in birthday-app/public/photo1.jpg and change link to: "/photo1.jpg"
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      secretNote: "This smile right here can cure my worst day in seconds. Never stop laughing like this!"
    },
    {
      id: 2,
      title: "Cozy Stargazing 🌟",
      date: "Late Night Talks",
      // Put your photo in birthday-app/public/photo2.jpg and change link to: "/photo2.jpg"
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600",
      secretNote: "Out of all the stars in the night sky, you shine the brightest by far."
    },
    {
      id: 3,
      title: "Our Goofy Moments 🤪",
      date: "Pure Happiness",
      // Put your photo in birthday-app/public/photo3.jpg and change link to: "/photo3.jpg"
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
      secretNote: "I love that I can be 100% silly with you and you join right in without judging me!"
    },
    {
      id: 4,
      title: "Birthday Queen 👑",
      date: "Special Celebration",
      // Put your photo in birthday-app/public/photo4.jpg and change link to: "/photo4.jpg"
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
      secretNote: "Happy Birthday to the girl who stole my heart and keeps making it bigger every single day."
    }
  ],

  // 💌 "OPEN WHEN..." DIGITAL ENVELOPES
  // You can rewrite any of these letters whenever you want!
  openWhenLetters: [
    {
      id: 1,
      trigger: "Open When You Miss Me 🥺",
      color: "from-pink-500 to-rose-600",
      letter: `My Dearest Love,

If you are reading this because you miss me right now, I want you to close your eyes for 5 seconds and take a deep breath. 

Remember that no matter how many miles or hours separate us, you are always sitting right in the center of my heart. I am probably thinking about you at this exact second too! 

Call or text me right now, and I'll drop everything for you. I love you endlessly!`
    },
    {
      id: 2,
      trigger: "Open When You Need a Laugh 😂",
      color: "from-purple-500 to-indigo-600",
      letter: `Hey Beautiful,

Remember that time when we couldn't stop laughing over that silly joke until tears came out of our eyes? 

Quick reminder: You are with the funniest, most handsome guy in the world (yes, me! 😜). 

Now smile, show those cute dimples, and send me a selfie right now so I can admire your gorgeous face!`
    },
    {
      id: 3,
      trigger: "Open At Midnight On Your Birthday 🕛🎂",
      color: "from-amber-500 to-rose-500",
      letter: `HAPPY BIRTHDAY MY QUEEN! 🎉🎂✨

The clock has struck midnight, and officially a new year of your life has begun! 

I hope this year brings you infinite joy, success, peaceful moments, and all the warm love you deserve. Thank you for coming into my world and filling it with light. 

Blow a kiss to the screen, make a wish, and let's celebrate YOU all day long!`
    },
    {
      id: 4,
      trigger: "Open When You Feel Overwhelmed 🌿",
      color: "from-teal-500 to-emerald-600",
      letter: `Hey Sweetie,

Take a step back, rest your shoulders, and breathe out slowly. You are doing amazing, even when things feel heavy or stressful.

You don't have to carry everything by yourself. I am always in your corner, ready to listen, give you warm back hugs, and take care of you. 

Everything will be okay. I believe in you so much!`
    }
  ],

  // 🎟️ REDEEMABLE ROMANTIC LOVE COUPONS
  // She can tap "Redeem" to claim these vouchers into her wallet!
  loveCoupons: [
    {
      id: "CUP-01",
      title: "1x Candlelight Dinner Date 🕯️🍷",
      description: "Valid for a romantic dinner of your absolute choice cooked or paid by me!",
      icon: "Utensils",
      color: "bg-rose-500/20 border-rose-500/50 text-rose-300"
    },
    {
      id: "CUP-02",
      title: "1x Unlimited Warm Hugs & Cuddles 🧸",
      description: "Redeemable anytime, anywhere. Non-expiring hug voucher!",
      icon: "Heart",
      color: "bg-pink-500/20 border-pink-500/50 text-pink-300"
    },
    {
      id: "CUP-03",
      title: "1x Late Night Ice Cream & Movie Night 🍦🎬",
      description: "You choose the movie, I get the snacks & ice cream. Zero arguments!",
      icon: "Tv",
      color: "bg-purple-500/20 border-purple-500/50 text-purple-300"
    },
    {
      id: "CUP-04",
      title: "1x 'You Are Always Right' Free Pass 👑",
      description: "Redeem during any small argument for an immediate win and sincere apology!",
      icon: "Crown",
      color: "bg-amber-500/20 border-amber-500/50 text-amber-300"
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
