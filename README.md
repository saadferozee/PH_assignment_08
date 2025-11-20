# Hero.IO — App Store Directory Platform

**Hero.IO** is a modern, responsive, and feature-rich app directory platform where users can browse, search, install apps, and view analytics charts. Built with **React**, it offers a UI/UX experience similar to real App Store and Play Store interfaces.

The project includes live search, download-based sorting, installation management using **localStorage**, custom error pages, loading animations, and detailed rating charts.

---

## 🚀 Live Website

Click on  [Netlify Live Demo](https://assignment-08-by-saadferozee.netlify.app/) to visit Website

---

## 📌 Features

### 1. Full Responsive UI
- Fully responsive on all devices — mobile, tablet, and desktop.

### 2. Pages & Routing
- **Home Page**  
- **All Apps Page**  
- **App Details Page**  
- **My Installation Page**  
- Installation system using **localStorage**  
- Custom error page  
- Smooth loading animations on navigation  

### 3. Home Page
- Banner with buttons linking to App Store & Play Store  
- Three statistics section  
- Top 8 apps grid  
- "Show All" button linking to All Apps page  

### 4. All Apps Page
- Dynamic title and subtitle  
- Total app count  
- Case-insensitive live search  
- “No App Found” message for empty results  
- Sorting by download count (High → Low / Low → High)  

### 5. App Details Page
- App info card  
- Install button → changes to "Installed" after click  
- Store installations in **localStorage**  
- Success toast message  
- Recharts-based rating analytics  
- Full app description  

### 6. My Installation Page
- Shows installed apps from **localStorage**  
- Uninstall option with toast confirmation  
- Instant UI update  

### 7. Others
- Custom footer  
- Active route indicator  
- Reload-safe routes after deployment  
- Minimum 12–20 apps JSON data  
- Minimum 5 meaningful commits  

---

## 🧩 Technologies Used
- React  
- React Router  
- Tailwind CSS  
- DaisyUI  
- Recharts  
- React Toastify  
- Custom Hooks  
- localStorage  
- JSON-based mock data  

---

## 📂 Project Structure

```text
src/
│
├── assets/
├── components/
├── context/
├── data/
│ └── appsData.json
├── hooks/
├── layouts/
└── pages/
```


---

## ⚙️ Implemented Requirements
- Fully responsive layout  
- Meaningful app name: **Hero.IO**  
- JSON dataset (12–20 objects)  
- Search, filtering, and install system  
- Recharts analytics  
- Custom 404 page  
- Loading animation for search and navigation  
- Deployment on Netlify (reload-safe)  
- Installation & removal system using **localStorage**  
- Active navigation indicator  
- Detailed App Details page  
- Minimum 5+ commits  

---

## 📥 Installation & Setup
```bash
git clone https://github.com/saadferozee/PH_assignment_08
cd hero-io
npm install
npm run dev
```
---
## 🧑‍💻 Author

#### *Saad Ferozee*
GitHub: https://github.com/saadferozee

LinkedIn: https://www.linkedin.com/in/saadferozee/