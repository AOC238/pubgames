# Pub Games Quiz Website

Welcome to the **Pub Games Quiz Website**! This is a fun and interactive quiz game built using **React**. Follow the steps below to set up and run the project on your local machine.

## 🚀 Getting Started

### **1. Prerequisites**
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- Git (optional, but useful for cloning the repo)

### **2. Clone the Repository**
If you haven’t already cloned the repository, use the following command:

```sh
git clone https://github.com/yourusername/pubgames.git
```

Then, navigate to the project folder:

```sh
cd pubgames
```

### **3. Install Dependencies**
To install all necessary packages, run:

```sh
npm install --legacy-peer-deps
```

_(Use `--legacy-peer-deps` to avoid dependency conflicts.)_

### **4. Start the Development Server**
To run the project locally, execute:

```sh
npm start
```

This will open the project in your default web browser at:
```
http://localhost:3000
```
The app will reload automatically when you make changes.

### **5. Building for Production**
If you want to generate an optimized build for deployment, use:

```sh
npm run build
```

This will create a `build/` folder containing the optimized production files.

### **6. Common Issues & Fixes**
- **Missing `web-vitals` error?** Run:
  ```sh
  npm install web-vitals
  ```
- **Stuck on dependency conflicts?** Try:
  ```sh
  npm install --force
  ```
- **Port already in use?** Stop any process using port `3000` or run:
  ```sh
  npx kill-port 3000
  ```

## 🎉 Contributing
If you'd like to contribute to the project:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit and push (`git push origin feature-name`)
5. Open a pull request

## 📜 License
This project is licensed under the **MIT License**.

---

Feel free to modify this README to suit your needs! Happy coding! 🚀