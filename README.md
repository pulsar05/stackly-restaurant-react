# 🍽️ Restaurant App (Frontend)

A responsive restaurant website frontend built with **React**. Browse the menu, add dishes to the cart, and view an order summary, all running in the browser with static data.

🔗 **Live Demo:** [add your deployed link here]

---

## ✨ Features

- Browse the menu by category (starters, mains, desserts, drinks)
- Search and filter dishes
- Add items to the cart and update quantities
- Order summary with total price
- Table reservation form (UI only)
- Fully responsive design for mobile, tablet, and desktop

## 🛠️ Tech Stack

- **React** (functional components and hooks)
- **React Router** for page navigation
- **Styling:** [CSS / Tailwind CSS / Bootstrap / Material UI]
- **State Management:** [Context API / useState]
- **Build Tool:** [Vite / Create React App]

## 📸 Screenshots

| Home | Menu | Cart |
|------|------|------|
| ![Home](screenshots/home.png) | ![Menu](screenshots/menu.png) | ![Cart](screenshots/cart.png) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/[your-username]/[repo-name].git
   ```

2. Go to the project folder
   ```bash
   cd [repo-name]
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm start
   ```
   (Use `npm run dev` if the project uses Vite.)

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
restaurant-app/
├── public/
├── src/
│   ├── components/    # Navbar, MenuCard, Cart, Footer...
│   ├── pages/         # Home, Menu, Cart, Contact
│   ├── data/          # Static menu data
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |

## 🌐 Deployment

Build the project and deploy the output folder to Netlify, Vercel, or GitHub Pages.

```bash
npm run build
```

## 🔮 Future Improvements

- Dark mode
- Wishlist / favorite dishes
- Animations and page transitions
- Multi-language support

## 🤝 Contributing

1. Fork the project
2. Create a branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👤 Author

**[Your Name]**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin-url]
