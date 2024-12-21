# Expat.cl

Expat.cl is a comprehensive web platform that provides essential support services for expatriates moving to Chile. This project aims to offer services such as temporary accommodation, quick response to queries, expat support, and tailor-made solutions to ease the transition for individuals and families relocating to Chile.

<p align="center">
  <img src="https://github.com/user-attachments/assets/2d16a28c-ed29-4829-9096-facf99bf5288" width="100" height="100">
</p>


## Features
- **Quick Responses**: Get responses to your queries within 24 hours.
- **Expat Support**: Comprehensive support services to help expatriates settle in Chile.
- **Tailor-Made Solutions**: Customized solutions to meet the unique needs of each expat.

## Screenshots

 <table align="center">
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/ef8d5d4d-42ab-46e6-a390-c5fcb2e4c20f" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/99e05fda-4ce6-42e3-8461-5a7fb6a8756c" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/04878613-fcb5-4da5-8645-54af2d0f5034" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/fd904143-04b0-4f1c-9b84-85984205d8ee" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/54687449-f1e4-4248-a542-41bffe9eb4b4" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/e36ff0f6-3fdd-47b5-a9bb-d7a66c0b66eb" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img width='320px' src="https://github.com/user-attachments/assets/e59edcce-5db9-423c-824e-abb9d878e7b2" alt="Image" /></td>
    <td><img width='320px' src="https://github.com/user-attachments/assets/192d25cb-4ee3-4748-b224-e1e8d6c654ae" alt="Image" /></td>
  </tr>
</table>


## Project Structure
The project structure is organized to separate concerns and ensure maintainability:

```
└── 📁EXPAT
    └── 📁assets                # Contains all static assets such as fonts, icons, and images
        └── 📁fonts            # Font files used in the project
            └── Montserrat-VariableFont_wght.ttf
            └── SFProDisplay-Bold.woff2
            └── SFProDisplay-Medium.woff2
            └── SFProDisplay-Regular.woff2
        └── 📁icons            # Icon files used in various sections of the project
            └── 📁forHeader    # Icons specifically used in the header
                └── response.svg
                └── support.svg
                └── tailor.svg
                └── temporary.svg
            └── 📁forHeroSection # Icons used in the Hero Section
                └── arrow.svg
                └── bigStar.svg
                └── check.svg
                └── lock.svg
                └── stars.svg
                └── verified.svg
            └── 📁forHowWorks  # Icons used in the "How It Works" section
                └── quiz.svg
                └── walkThrough.svg
                └── whichVisa.svg
            └── 📁forReviews   # Icons used in the Reviews section
                └── location.svg
                └── virified.svg
        └── 📁images           # Image files used throughout the project
            └── FooterLogo.png # Logo used in the footer
            └── 📁for_landing  # Images specifically used in the landing page
                └── footer.png
                └── hero.png
                └── 📁slider   # Images used in the slider component
                    └── slide1.png
                    └── slide2.png
                    └── slide3.png
                    └── slide4.png
                └── town.png
            └── 📁handbook     # Images used in the handbook section
                └── book.png
            └── Logo.png       # Main logo of the project
            └── 📁ourClients   # Logos of client companies
                └── airbus.svg
                └── cegelec.svg
                └── fao.svg
                └── korea.svg
                └── novo.svg
                └── quantum.svg
                └── vinci.svg
            └── 📁patterns     # Pattern images used for background or design elements
                └── pattern.png
                └── pattern2.png
                └── pattern3.png
            └── symbol.png     # A symbol image for Website Bar logo
    └── 📁scripts               # JavaScript files for handling various functionalities
        └── header-handler.js  # Script to handle header interactions
        └── questions-handler.js # Script to handle questions interactions
        └── quiz-handler.js    # Script to handle quiz functionalities
        └── swiper-handler.js  # Script to handle swiper/slider functionalities
    └── 📁styles                # CSS files for styling the project
        └── custom.css         # Custom CSS styles ( Custom Placeholder, Select, check,.. )
        └── fonts.css          # Font-related CSS styles
        └── global.css         # Global CSS styles
        └── output.css         # CSS output from a preprocessor (Tailwind CSS)
    └── .gitignore             # Git ignore file specifying which files to ignore in version control
    └── index.html             # Main HTML file for the project ( landing page )
    └── package-lock.json      # Automatically generated file for locking dependencies versions
    └── package.json           # Contains project metadata and dependencies
    └── postcss.config.js      # Configuration file for PostCSS
    └── quiz.html              # HTML file for the quiz pages
    └── tailwind.config.js     # Configuration file for Tailwind CSS
```

## Performance Scores

- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

![Score](https://github.com/user-attachments/assets/3b9ac3b5-cec3-4eaa-943e-951f4e61681b)

These scores are based on Lighthouse audits, ensuring the site is optimized for speed and usability.


## Technologies Used
This project leverages the following technologies:
- **HTML**
- **Tailwind CSS**
- **JavaScript**

## Getting Started
To get a local copy of this project up and running, follow these simple steps.

### Prerequisites
Ensure you have the following installed on your local machine:
- Node.js
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/3mohamed-abdelfattah/Expat.cl.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Expat.cl
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. run tailwind:
   ```bash
   npm run build
   ```

## Contributing
This project is private and does not permit contributions, modifications, or usage by others. Thank you for respecting these terms.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
- Mohamed Mohamed - [mohamed.devmaster@gmail.com](mailto:mohamed.devmaster@gmail.com)
- via [WhatsApp](https://wa.me/201101201745).
