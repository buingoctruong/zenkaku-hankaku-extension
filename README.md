# ZENKAKU HANKAKU Converter

**ZENKAKU HANKAKU Converter** is a Chrome extension designed to convert text between Zenkaku (全角) and Hankaku (半角)
formats for Japanese characters.
This lightweight and user-friendly tool allows you to perform real-time conversions directly within your browser.

---

## 🚀 Features

- **Real-time Conversion**: Automatically converts text to Zenkaku and Hankaku as you type.
- **Simple UI**: A clean, intuitive interface with clear input and output sections.
- **Offline Ready**: Fully functional offline once installed.

---

## 📥 Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-repo/zenkaku-hankaku-extension.git
   cd zenkaku-hankaku-extension
2. Open chrome://extensions/ in Google Chrome.
3. Enable Developer mode in the top-right corner.
4. Click `Load unpacked` and select the `dist` folder from the project.
5. The extension will appear in your toolbar with its icon.

## 🛠 Usage

1. Click the extension icon in the Chrome toolbar to open the popup.
2. Enter the text you wish to convert into the text area.
3. View the Zenkaku and Hankaku conversions in the respective columns.

## 📂 Project Structure

* `src` - Source Code
    * `icon16.png` - Icons 16x16 for the Chrome extension.
    * `icon48.png` - Icons 48x48 for the Chrome extension.
    * `icon128.png` - Icons 128x128 for the Chrome extension.
    * `index.html` - The popup interface for the extension,
    * `popup.js` - JavaScript file for text conversion logic.
    * `styles.css` - Styling for the popup UI.
    * `manifest.json` - Configuration for the Chrome extension.

## 📜 Scripts

Starts the development server with Parcel.

```bash
npm run start
```

## 🔗 Dependencies

1. [moji.js](https://www.npmjs.com/package/moji): For handling Zenkaku and Hankaku conversions.
2. [Parcel](https://parceljs.org/): A web application bundler.

## 🤝 Contribution

Contributions are welcome! If you'd like to improve the extension or fix any issues:

1. Fork the repository.
2. Create a new branch.
3. Submit a pull request.
