# SUSHRUTA – NEET Preparation Companion

SUSHRUTA is a modern, responsive web application designed for students preparing for the National Eligibility cum Entrance Test (NEET). This project implements the **Practice Questions** feature, providing an intuitive chapter-wise problem-solving interface with interactive feedback, custom filters, and practice configuration.

![SUSHRUTA Practice Questions](https://img.shields.gradient.is/badge/SUSHRUTA-NEET_Prep-059669)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-6.4-646cff)

---

## 🌟 Key Features

### 1. Medical & Educational Aesthetics
- **Color Theme**: Deep medical teal/green (`#059669`), mint tint background (`#f4fbf7`), dark navy text (`#0f172a`), and clean white cards.
- **Modern Typography**: Powered by `Plus Jakarta Sans` for headers and `Inter` for body copy.
- **Custom Visual Assets**: Vector graphics featuring Biology, Chemistry, Physics, and NCERT books alongside a medical stethoscope illustration.

### 2. Practice Questions Workspace
- **Question-Type Tabs**: Switch seamlessly between `MCQs`, `Previous Year`, `Subjective`, and `Mixed` categories.
- **Interactive Filters**: 2-tier dropdown filter controls for `Subject` (Biology, Chemistry, Physics), `Chapter` (Cell: The Unit of Life, etc.), `Topic`, and `Difficulty`.
- **Practice Configuration & Timer**: 30-minute interactive countdown timer with Start, Pause, and Reset controls.
- **Interactive Question Cards**:
  - Circular number indicators and topic/difficulty badges.
  - Interactive Modal: Click any question card to view options, test choices with immediate correctness feedback, and read explanations.

### 3. Responsive 3-Section Layout
- **Desktop**: 3-column layout (`Left Feature Cards` | `Center Practice Questions` | `Right Promotional & Visual Illustration`).
- **Mobile & Tablet**: Stacks into single-column layout prioritizing the Practice Questions section.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- `npm` or `yarn`

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Krishnagollapelli/hsr-77-practice-questions.git
   cd hsr-77-practice-questions
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx                # Header with SUSHRUTA branding
│   │   ├── FeatureSection.jsx        # Left feature cards & quote footer
│   │   ├── FeatureCard.jsx           # Reusable feature card component
│   │   ├── PracticeQuestions.jsx     # Main practice questions container
│   │   ├── QuestionTabs.jsx          # MCQ / PYQ / Subjective / Mixed tabs
│   │   ├── FilterBar.jsx             # Subject, Chapter, Topic & Difficulty dropdowns
│   │   ├── QuestionConfig.jsx        # Question counter & 30-min timer
│   │   ├── QuestionList.jsx          # List of question cards with empty state handling
│   │   ├── QuestionCard.jsx          # Reusable question item card
│   │   ├── QuestionDetailModal.jsx   # Interactive modal for testing options & reading explanations
│   │   ├── PromoCard.jsx             # Right section promotional banner
│   │   └── IllustrationSection.jsx   # SVG book stack & stethoscope illustration
│   ├── data/
│   │   ├── questionsData.js          # Mock question repository & filter options
│   │   └── featuresData.js           # Left sidebar feature items data
│   ├── styles/
│   │   └── index.css                 # Custom CSS design system, variables & responsive rules
│   ├── App.jsx                       # Main application component layout
│   ├── main.jsx                      # React entry point
│   └── index.css                     # Global design system & theme
├── index.html                        # HTML template with Google Fonts & Meta tags
├── package.json                      # Dependencies & scripts
└── vite.config.js                    # Vite configuration
```

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom Design System with CSS Variables)
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+ / JSX)
