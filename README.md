Skåne IT Support
Frontend Individual Project 2  Business Website
Project Overview
Skåne IT Support is a responsive demonstration website for a fictional IT support service with a local Skåne identity. It combines a clear presentation of IT services, a gallery featuring places in Skåne, and an interactive contact form in demo mode. The project was built as part of frontend development training at Lexicon.
Note: This is a school project, not a confirmed commercial service. The contact form does not send or store personal information.
Project Goals
- Create a modern and responsive business website.
- Practise reusable React components and JSX.
- Use CSS Grid and Flexbox for responsive layouts.
- Make navigation and website information easy to understand.
- Implement an interactive contact form in demo mode.
Required Features
- Home: Introductory hero section with background image, heading and navigation links.
- About: Information about the project with a local photograph.
- Services / Products: Three IT support service cards generated from data.
- Gallery / Featured Content: A responsive gallery with photographs from Skåne.
- Contact: Interactive demonstration form with a confirmation message.
- Navigation & Footer: Navigation menu, mobile menu, footer and back-to-top link.
- Responsive Design: Layouts adapted to desktop, tablet and mobile.
Technologies Used
Technology	Purpose
React	Component-based user interface
Vite	Development server and production build
JavaScript / JSX	Components, data rendering and interactions
CSS3	Styling, typography and colours
CSS Grid & Flexbox	Responsive page, gallery and card layouts
Lucide React	Icons
Git & GitHub	Version control and project sharing


Project Structure – Seven React Components
- src/components/Header.jsx – Logo, navigation and mobile menu.
- src/components/Hero.jsx – Home-page background, heading and buttons.
- src/components/Services.jsx – Three reusable service cards rendered from a list.
- src/components/About.jsx – Project description with photograph.
- src/components/Gallery.jsx – Images from Skåne displayed using responsive CSS Grid.
- src/components/Contact.jsx – Expandable form using React state and a demo confirmation.
- src/components/Footer.jsx – Footer and back-to-top link.
src/App.jsx combines the sections and controls whether the contact form is open. src/App.css contains the shared design rules. src/main.jsx starts the React application.
Run the Project Locally
1. Install Node.js if it is not already installed.
2. Open the project folder containing package.json in Visual Studio Code.
3. Run:
   npm install
   npm run dev
4. Open the local address displayed by Vite.
Development Process
1. Plan: Defined the website's audience, purpose and main sections.
2. Design: Chose a colour palette, typography, local photographs and page layout.
3. Develop: Built the components with React and Vite and styled them with CSS.
4. Test: Checked navigation, layout and contact form in a browser.
5. Deploy: Uploaded the source code to GitHub; public website deployment requires a separate build and hosting configuration.
6. Explain: Documented the component structure and development process.
Challenges & Learning
- Understanding how React components fit together.
- Organising CSS and responsive layouts.
- Managing images and file paths.
- Learning how React state controls the contact form.
- Testing across different screen sizes and reviewing the result.
AI Assistance
ChatGPT was used to support planning, parts of the coding, design improvements and troubleshooting. The development process also involved reviewing, testing and learning to explain the code and its behaviour.
Project Status
The website works as a local frontend demonstration. The public GitHub repository contains the source code. A publicly accessible live website link can be added after deployment is configured and tested.
