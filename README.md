# 📄 SELECTRA

<div align="center">

A smart web application that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-4F46E5?style=for-the-badge)](https://select-nine.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/📂_GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/aridepai17/SELECTRA)

---

</div>

## ✨ FEATURES

<div align="center">

| 🎯 **Smart Analysis** | 📄 **PDF Processing** | 🎨 **Visual Preview** | 💾 **Persistent Storage** |
|:---:|:---:|:---:|:---:|
| AI-powered resume feedback | Drag-and-drop PDF upload | Convert PDFs to PNG images | Store analysis results |
| ATS optimization tips | Multiple file formats | High-quality rendering | Key-value store integration |

</div>

- 🔍 **AI-Powered Analysis** - Get detailed feedback based on job title and description
- 📁 **Smart File Upload** - Drag-and-drop or click to upload PDF resumes  
- 🖼️ **Visual Resume Preview** - Convert PDFs to high-quality PNG images using `pdf.js`  
- ☁️ **Cloud Storage** - Upload resumes and images to secure storage system  
- 📊 **Detailed Reports** - Comprehensive analysis with actionable insights
- 💾 **Persistent Results** - Store feedback in key-value store for future access  
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
- ⚡ **Real-time Updates** - Live processing status with progress indicators  

---

## SCREENSHOTS

<div align="center">
  <img src="screenshots/home.png" alt="Main UI" width="400" style="margin: 10px;">
  <img src="screenshots/uploadresume.png" alt="Screenshot 2: Upload Flow" width="400" style="margin: 10px;">
  <img src="screenshots/analyzeresume.png" alt="Screenshot 3: Analyzing Resume" width="400" style="margin: 10px;">
  <img src="screenshots/resumereview.png" alt="Screenshot 4: Resume Review" width="400" style="margin: 10px;">
</div>

## 🛠️ TECH STACK
<div align="center">
  
### Frontend
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

### PDF & Storage
[![PDF.js](https://img.shields.io/badge/PDF.js-FF6B35?style=for-the-badge&logo=mozilla&logoColor=white)](https://mozilla.github.io/pdf.js/)
[![Zustand](https://img.shields.io/badge/Zustand-2D3748?style=for-the-badge&logo=react&logoColor=white)](https://zustand-demo.pmnd.rs/)

### AI & Routing  
[![OpenAI](https://img.shields.io/badge/AI_Integration-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

</div>

---

## 🚀 QUICK START

### Prerequisites
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) Node.js 16.x or higher
- ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white) npm or ![yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white) yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/resume-analyzer.git
   cd resume-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or  
   yarn dev
   ```

4. **Open your browser**
   ```
   🌐 http://localhost:5173
   ```

---

## 📖 HOW TO USE

<div align="center">

### 🎯 **Step-by-Step Guide**

</div>

| Step | Action | Description |
|:---:|:---|:---|
| **1️⃣** | **Fill Details** | Enter Company Name, Job Title, and Job Description |
| **2️⃣** | **Upload Resume** | Use drag-and-drop or file picker to upload PDF |
| **3️⃣** | **Analyze** | Click "Analyze Resume" and wait for processing |
| **4️⃣** | **View Results** | Get detailed AI feedback and optimization tips |

## 📁 PROJECT STRUCTURE

```
resume-analyzer/
├─  app/
│  ├─  components/
│  │  ├─  Accordion.tsx
│  │  ├─  ATS.tsx  
│  │  ├─  Details.tsx
│  │  ├─  FileUploader.tsx
│  │  ├─  Navbar.tsx
│  │  ├─  ResumeCard.tsx
│  │  ├─  ScoreBadge.tsx
│  │  ├─  ScoreCircle.tsx
│  │  ├─  ScoreGauge.tsx
│  │  └─  Summary.tsx
│  ├─  lib/
│  │  ├─  pdf2img.ts
│  │  ├─  puter.ts
│  │  └─  utils.ts
│  ├─  routes/
│  │  ├─  auth.tsx
│  │  ├─  home.tsx
│  │  ├─  resume.tsx
│  │  ├─  upload.tsx
│  │  └─  wipe.tsx
│  ├─  app.css
│  ├─  root.tsx
│  └─  routes.ts
├─  constants/
│  └─ index.ts
├─  public/
│  ├─  icons/
│  ├─  images/
│  ├─  favicon.ico
│  ├─  pdf.min.mjs
│  └─  pdf.worker.min.js
├─  types/
│  ├─ index.d.ts
│  └─ puter.d.ts
├─  Dockerfile
├─  LICENSE
├─  package.json
└─  vite.config.ts
```
---

## 🤝 CONTRIBUTING

<div align="center">

**We welcome contributions from the community!**

[![Contributors](https://img.shields.io/github/contributors/aridepai17/SELECTRAr?style=for-the-badge)](https://github.com/aridepai17/SELECTRA/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/aridepai17/SELECTRA?style=for-the-badge)](https://github.com/aridepai17/SELECTRA/network/members)
[![Stars](https://img.shields.io/github/stars/aridepai17/SELECTRA?style=for-the-badge)](https://github.com/aridepai17/SELECTRA/stargazers)

</div>

### 📋 HOW TO CONTRIBUTE

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **💻 Make** your changes and commit:
   ```bash
   git commit -m "✨ feat: add amazing feature"
   ```
4. **📤 Push** to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **🔄 Create** a Pull Request

### 📝 **Commit Convention**
- `feat:` - New features
- `fix:` - Bug fixes  
- `docs:` - Documentation updates
- `style:` - Code formatting
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests

---

## 📊 PERFORMANCE AND STATS

<div align="center">

| Metric | Score | Status |
|:---|:---:|:---:|
| **Lighthouse Performance** | 95/100 | 🟢 Excellent |
| **Accessibility** | 98/100 | 🟢 Excellent |  
| **Best Practices** | 92/100 | 🟢 Good |
| **SEO** | 100/100 | 🟢 Perfect |

[![Website Status](https://img.shields.io/website-up-down-green-red/http/selectra-nine.vercel.app.svg?style=for-the-badge)](https://selectra-nine.vercel.app)

</div>

---

## 📄 LICENSE

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**This project is licensed under the MIT License** - see the [LICENSE](LICENSE) file for details.

</div>
---

### ⭐ SHOW YOUR SUPPORT

**If this project helped you, please consider giving it a star!**

[![GitHub stars](https://img.shields.io/github/stars/aridepai17/SELECTRA?style=social)](https://github.com/your-username/resume-analyzer/stargazers)
</div>
