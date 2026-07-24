# 📝 How to Edit & Add Your Own Photos & Messages

All the text, photos, letters, and questions are ready to go with romantic defaults! You can edit or change anything whenever you want in 3 easy steps:

---

## 📸 Step 1: Adding Your Own Photos

1. Copy your photo image files (e.g. `photo1.jpg`, `myphoto.png`) into the `birthday-app/public/` folder:
   📁 `c:\Users\aryan Adharaki\Desktop\23056962_AryanAdhikari_C10_(WorkWizard)\development\birthday-app\public\`

2. Open the config file:
   📄 [birthdayData.js](file:///c:/Users/aryan%20Adharaki/Desktop/23056962_AryanAdhikari_C10_%28WorkWizard%29/development/birthday-app/src/config/birthdayData.js)

3. Change the image link lines from the web link to your filename:
   ```javascript
   // Before:
   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb...",

   // After:
   image: "/photo1.jpg",
   ```

---

## ✏️ Step 2: Editing Names, Memory Questions, & Letters

Open [birthdayData.js](file:///c:/Users/aryan%20Adharaki/Desktop/23056962_AryanAdhikari_C10_%28WorkWizard%29/development/birthday-app/src/config/birthdayData.js) in your text editor:

- **Her Name & Nickname**: Change `name: "My Princess"` to her real name!
- **Memory Trivia Quiz**: Edit the `question`, `hint`, and `answers` array to your real inside jokes/dates!
- **Polaroid Back Notes**: Edit `secretNote` for the text on the back of each photo!
- **"Open When..." Letters**: Rewrite `letter:` text for each envelope!
- **Main Birthday Wish Letter**: Edit `paragraphs:` array for your custom letter!

---

## 🚀 Step 3: Run & Preview

Open PowerShell or Command Prompt in `birthday-app` and run:
```cmd
cmd /c "npm run dev"
```
Open `http://localhost:3000` to see your changes updated instantly!
