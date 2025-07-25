# Certificate Designer

A customizable certificate-generation feature integrated into the Teamie EdTech platform, enabling educators to design, preview, and issue digital certificates to students. This project was developed during my Software Engineer Internship at Teamie Pte. Ltd (Sep 2023 – Dec 2023).

## About The Project

During my internship, I:

* Developed and integrated a customizable certificate-generation feature into the Teamie edtech platform using Vue.js and React.js, allowing educators to create and issue digital certificates to students.
* Collaborated with cross-functional teams to ensure seamless UI/UX alignment and system compatibility across teacher-facing modules.
* Presented the final feature to the CEO of Teamie and the principal of a partner school during a product showcase, highlighting technical implementation and user benefits.

## Table of Contents

* [Features](#features)
* [Demo](#demo)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running Locally](#running-locally)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)

## Features

* **Dynamic Templates:** Select and customize certificate templates.
* **Rich Text Editing:** Add dynamic text fields (e.g. student name, date, course).
* **Image Upload:** Insert logos and signatures via the upload section.
* **Live Preview:** Preview certificate in real-time before issuing.
* **Export:** Export certificates as PDF or image formats.

## Demo

A live demo is available on CodeSandbox: [certificate-designer-teamie on CodeSandbox](https://codesandbox.io/s/certificate-designer-teamie).

## Tech Stack

* **React.js** for UI components.
* **Polotno Canvas** for drag-and-drop certificate design.
* **Blueprint.js** for UI controls.
* **Node.js** (via `react-scripts`) for development scripts.

## Getting Started

### Prerequisites

* Node.js >=14.x
* npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<username>/certificate-designer-teamie.git
   cd certificate-designer-teamie
   ```
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

```bash
npm start
# or
yarn start
```

The app will run at `http://localhost:3000`.

## Usage

1. Navigate to the side panel to select template sections (Text, Photos, Background, etc.).
2. Drag and drop elements onto the workspace.
3. Use the **Preview** button to see the final certificate.
4. Export via the toolbar when ready.

## Project Structure

```
📦certificate-designer-teamie
 ┣ 📂public
 ┃ ┗ index.html
 ┣ 📂src
 ┃ ┣ index.js           # App entry point
 ┃ ┣ sample.js          # Sample certificate data
 ┃ ┣ preview-button.js  # Custom Preview button component
 ┃ ┗ ...
 ┣ .gitignore
 ┗ package.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. Feel free to use and modify.
