# Skåne IT Support

**Frontend Individual Project 2 · Business Website**

## Project Overview

Skåne IT Support is a responsive demonstration website for a fictional IT support service with a local Skåne identity. It presents IT support services, a photo gallery featuring places in Skåne, and an interactive contact form in demo mode.

The website was developed as part of frontend training at Lexicon.

> **School project:** This is not a confirmed commercial service. The contact form does not send or store personal information.

## Project Goals

- Create a modern and responsive business website.
- Practise reusable React components and JSX.
- Use CSS Grid and Flexbox to build responsive layouts.
- Make navigation and website information easy to understand.
- Implement an interactive contact form in demo mode.

## Required Features

- **Home:** Hero section with a background image, heading and navigation links.
- **About:** Information about the project with a local photograph.
- **Services / Products:** Three IT support service cards rendered from data.
- **Gallery / Featured Content:** Responsive photo gallery featuring Skåne.
- **Contact:** Demonstration contact form with a confirmation message.
- **Navigation & Footer:** Desktop and mobile menus, footer and back-to-top link.
- **Responsive Design:** Layouts adapted to desktop, tablet and mobile.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| React | Component-based user interface |
| Vite | Development server and production build |
| JavaScript / JSX | Components, data rendering and interactions |
| CSS3 | Styling, typography and colours |
| CSS Grid & Flexbox | Responsive page, gallery and card layouts |
| Lucide React | Icons |
| Git & GitHub | Version control and project sharing |

## Project Structure – Seven React Components

| File | Responsibility |
| --- | --- |
| `src/components/Header.jsx` | Logo, navigation and mobile menu |
| `src/components/Hero.jsx` | Background image, heading and buttons |
| `src/components/Services.jsx` | Three reusable service cards rendered from a list |
| `src/components/About.jsx` | Project description and photograph |
| `src/components/Gallery.jsx` | Responsive gallery of Skåne photographs |
| `src/components/Contact.jsx` | Expandable demo form using React state |
| `src/components/Footer.jsx` | Footer and back-to-top link |

`src/App.jsx` combines the page sections and manages whether the contact form is open. `src/App.css` contains the shared design rules, and `src/main.jsx` starts the React application.

## Run the Project Locally

1. Install Node.js if it is not already installed.
2. Open the project folder containing `package.json` in Visual Studio Code.
3. Run these commands in the terminal:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL displayed by Vite.

## Development Process

1. **Plan:** Defined the intended audience, purpose and main website sections.
2. **Design:** Chose the colour palette, typography, local photographs and layout.
3. **Develop:** Built the components with React and Vite, styled with CSS.
4. **Test:** Checked navigation, layout and the demo contact form in a browser.
5. **Deploy:** Uploaded the source code to GitHub. Public website deployment still needs to be configured and tested.
6. **Explain:** Documented the component structure and the development process.

## Challenges & Learning

- Understanding how React components fit together.
- Organising CSS and responsive layouts.
- Managing images and file paths.
- Learning how React state controls the demo contact form.
- Testing the layout at different screen sizes.

## AI Assistance

ChatGPT was used to support planning, parts of the coding, design improvements and troubleshooting. The development process also involved reviewing, testing and learning to explain the code and its behaviour.

## Project Status

The website works as a local frontend demonstration. Its source code is available in this GitHub repository. A public live website link can be added after deployment is configured and tested.
