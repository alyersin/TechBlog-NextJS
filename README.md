# Tech Blog - A Modern Responsive Blog Platform

Tech Blog is a responsive, user-friendly blog platform built using modern technologies like Next.js, Chakra UI, and TypeORM. It provides an engaging experience for readers with featured posts, categories, and interactive UI components. This platform is ideal for tech enthusiasts, bloggers, and developers.

---

## 🌟 Features

- **Responsive Design**: Optimized for both desktop and mobile devices using Chakra UI.
- **Featured Posts**: Highlighted blog posts for better visibility.
- **Categories**: Organized posts under different categories like Tech, News, Gaming, etc.
- **Authentication**: Login and registration modals with user-friendly validation.
- **Under Development Pages**: Informative placeholder for pages under construction.
- **Newsletter Subscription**: Easy subscription to stay updated with the latest posts.
- **Social Media Integration**: Links to Twitter, LinkedIn, and GitHub.
- **Interactive UI**: Smooth animations powered by Framer Motion.
- **Customizable Theme**: Light mode with system configuration support.

---

## 🛠️ Technologies Used

### Frontend

- **[Next.js](https://nextjs.org/)**: For server-side rendering and a performant web app.
- **[Chakra UI](https://chakra-ui.com/)**: For creating a fully responsive and accessible user interface.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Icon integration for better visuals.

### Backend

- **[TypeORM](https://typeorm.io/)**: For managing database operations.
- **SQLite**: Lightweight database for development.

### Additional Libraries

- **Framer Motion**: For smooth animations and transitions.
- **bcryptjs**: For hashing passwords securely.
- **Better SQLite3**: Fast and simple SQLite3 bindings for Node.js.

---

## 📂 Project Structure

- `components/`: Contains reusable UI components like `Card`, `Header`, `Footer`, etc.
- `pages/`: Application pages such as Home, About Us, Categories, and others.
- `data/`: Contains JSON data files like `cardsData.json`, `cardsDataTwo.json`, and `stickyData.json`.
- `theme.js`: Chakra UI custom theme configuration.
- `public/`: Static assets like images and icons.
- `package.json`: Lists dependencies and project scripts.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tech-blog.git
   cd tech-blog
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🎨 Customize the Theme

You can modify the theme by editing the `theme.js` file in the root directory. Change colors, breakpoints, and more to suit your needs.

---

## 📸 Screenshots

### Home Page

> <img src="./public/techblog_ss.avif" alt="Screenshot of TechBlog" width="500"/>

### Featured Cards

> Include a screenshot of the cards section.

### Login/Registration Modal

> Include a screenshot of the login/register modal.

---

## 🗂️ JSON Data Files

- **`cardsData.json`**: Contains data for featured cards on the homepage.
- **`cardsDataTwo.json`**: Contains data for a secondary set of cards.
- **`stickyData.json`**: Stores sticky section data for navigation or quick links.

---

## 🔧 Deployment

Deploy this app using [Vercel](https://vercel.com/):

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Deploy the app:
   ```bash
   vercel
   ```

---

## 📜 License

This project is not licensed

---

## 🖤 Credits

- **Developed By**: Ersin
- **Icons**: React Icons
- **UI Framework**: Chakra UI

Feel free to contribute or suggest improvements by opening an issue or pull request.
