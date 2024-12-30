# Expat.cl

Expat.cl is a client project for issuing visas to Chile. The client requested converting a Figma design into HTML using Tailwind CSS, ensuring the final implementation matches the design perfectly. The project was completed in less than five days, maintaining clean, organized code and professional documentation.

**Note:** Based on the client's request, the pages are not linked to each other.

<p align="center">
  <img src="https://github.com/user-attachments/assets/2d16a28c-ed29-4829-9096-facf99bf5288" width="150">
</p>


---

## Screenshots

 <table align="center">
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/ec4470d2-2897-4743-8742-6ab1366e1319" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/dc014986-5d9f-439e-84cf-2e9bcbe4e8b1" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/765196f2-1edc-4eaf-9dfc-241a865a6d01" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/83be9d3a-a455-466c-8611-95c02150efa4" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/cf8ff2da-5f72-47dd-9b10-b0341cca4977" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/5edde94b-ddd2-4a2d-b99a-3eded1fbc39a" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/014816c4-43e3-4beb-aa7c-1fc33a671354" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/b02663af-05d7-4024-aea2-4f5bfe4af398" alt="Image" /></td>
  </tr>
     <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/36d3e337-0899-485d-8564-7851f5380156" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/6f54409b-41bc-4293-b61a-5653ae155bad" alt="Image" /></td>
  </tr>
     <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/17e4e486-68ab-426a-99f9-7b5bd35dceb2" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/767d3d0f-9cce-44df-88f3-98f5aabc3f12" alt="Image" /></td>
  </tr>
</table>

---


# Code Sections Numbering

## Home Page (`index.html`)
| Section Name                                  | Line Number |
|-----------------------------------------------|-------------|
| Top Bar                                       | 17          |
| Main Header & Navigation                      | 58          |
| Hero Section                                  | 90          |
| Counters Numbers Section                      | 187         |
| How It Works Section                          | 208         |
| How Expat.cl Can Help Section                 | 255         |
| Need Help Slider Section                      | 382         |
| Don't Just Slider Section                     | 531         |
| Still Have Questions Section                  | 651         |
| Move to Chile, Leave the Headache Section     | 804         |
| Get Residency Section                         | 879         |
| Who Qualifies Section                         | 1102        |
| Footer                                        | 1152        |

## About Us Page (Version 1)
| Section Name                                  | Line Number |
|-----------------------------------------------|-------------|
| Top Bar                                       | 18          |
| Main Header & Navigation                      | 59          |
| Hero Section                                  | 102         |
| Who Is Behind Website Section                 | 178         |
| Footer                                        | 421         |

## About Us Page (Version 2)
| Section Name                                  | Line Number |
|-----------------------------------------------|-------------|
| Top Bar                                       | 18          |
| Main Header & Navigation                      | 59          |
| Hero Section                                  | 102         |
| Who Is Behind Website Section                 | 181         |
| Footer                                        | 424         |

## Blog Category Page
| Section Name                                  | Line Number |
|-----------------------------------------------|-------------|
| Top Bar                                       | 18          |
| Main Header & Navigation                      | 59          |
| Hero Section                                  | 102         |
| Articles & Form Section                       | 109         |
| Footer                                        | 307         |

## Blog Page
| Section Name                                  | Line Number |
|-----------------------------------------------|-------------|
| Top Bar                                       | 18          |
| Main Header & Navigation                      | 59          |
| Blog & Form Section                           | 106         |
| Book Visa Consultation Side Form              | 252         |
| Footer                                        | 382         |

## Contact Us Page
| Section Name                                  | Line Number |
|-----------------------------------------------|-------------|
| Top Bar                                       | 18          |
| Main Header & Navigation                      | 59          |
| Contact Us Section                            | 102         |
| Footer                                        | 186         |

## Quiz Page
| Section Name                                  | Line Number |
|-----------------------------------------------|-------------|
| Top Bar                                       | 18          |
| Main Header & Navigation                      | 64          |
| Step Indicator                                | 100         |
| Step 1: Contact Details                       | 132         |
| Step 2: Visa Options                          | 170         |
| Step 3: Move Planning                         | 272         |
| Step 4: Visa Questions                        | 448         |
| Step 5: Final Question                        | 551         |
| Continue and Back Buttons                     | 618         |
| Thank You for Completing Quiz Section         | 635         |
| Handbook Section                              | 712         |
| Footer                                        | 775         |


## Project Structure
The project structure is organized to separate concerns and ensure maintainability:

```
└── 📁EXPAT
    └── 📁assets
        └── 📁fonts
            └── Montserrat-Bold.ttf
            └── Montserrat-Medium.ttf
            └── Montserrat-Regular.ttf
            └── Montserrat-VariableFont_wght.ttf
            └── SFProDisplay-Bold.woff2
            └── SFProDisplay-Medium.woff2
            └── SFProDisplay-Regular.woff2
        └── 📁icons
            └── 📁forAboutPage
                └── linkedin.svg
                └── quote.svg
                └── x.svg
            └── 📁forBlog
                └── home.svg
                └── lock.svg
                └── wallet.svg
                └── work.svg
            └── 📁forHeader
                └── response.svg
                └── support.svg
                └── tailor.svg
                └── temporary.svg
            └── 📁forHeroSection
                └── arrow.svg
                └── bigStar.svg
                └── check.svg
                └── lock.svg
                └── stars.svg
                └── verified.svg
            └── 📁forHowWorks
                └── quiz.svg
                └── walkThrough.svg
                └── whichVisa.svg
            └── 📁forReviews
                └── location.svg
                └── virified.svg
            └── 📁forWhoQualifies
                └── children.svg
                └── fiance.svg
                └── handicapped.svg
                └── parents.svg
                └── spouse.svg
        └── 📁images
            └── FooterLogo.png
            └── 📁for_about
                └── hero.png
            └── 📁for_blog
                └── blog1.png
                └── blog2.png
                └── blog3.png
                └── blog4.png
            └── 📁for_category
                └── category1.png
                └── category2.png
                └── category3.png
                └── category4.png
                └── category5.png
                └── category6.png
                └── category7.png
                └── category8.png
                └── hero.png
            └── 📁for_landing
                └── getResidency.png
                └── hero.png
                └── leaveHeadache.png
                └── 📁slider
                    └── slide1.png
                    └── slide2.png
                    └── slide3.png
                    └── slide4.png
                └── town.png
            └── 📁founders
                └── person1.png
                └── person2.png
                └── person3.png
            └── 📁handbook
                └── book.png
            └── Logo.png
            └── 📁ourClients
                └── airbus.svg
                └── cegelec.svg
                └── fao.svg
                └── korea.svg
                └── koreaDark.svg
                └── novo.svg
                └── quantum.svg
                └── vinci.svg
            └── 📁patterns
                └── pattern.png
                └── pattern2.png
                └── pattern3.png
            └── symbol.png
    └── 📁pages
        └── about-v2.html
        └── about.html
        └── blog-category.html
        └── blog.html
        └── contact-us.html
        └── quiz.html
    └── 📁scripts
        └── header-handler.js
        └── questions-handler.js
        └── quiz-handler.js
        └── swiper-handler.js
    └── 📁styles
        └── custom.css
        └── fonts.css
        └── global.css
        └── output.css
    └── .gitignore
    └── index.html
    └── LICENSE
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── README.md
    └── tailwind.config.js
```
---

## Performance Scores

- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

![Score](https://github.com/user-attachments/assets/3b9ac3b5-cec3-4eaa-943e-951f4e61681b)

These scores are based on Lighthouse audits, ensuring the site is optimized for speed and usability.

---

## Technologies Used
This project leverages the following technologies:

- **HTML**
- **Tailwind CSS**
- **JavaScript**

---

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
---

## Contributing
This project is private and does not permit contributions, modifications, or usage by others. Thank you for respecting these terms.

# Project Rights

This project is protected under the **Creative Commons Attribution-NonCommercial-NoDerivs 4.0** license. It is only permitted to view the project without any rights to modify, use, or download it.

## Terms:
1. The project is for demonstration purposes only and cannot be used commercially.
2. The code cannot be reused in other projects.
3. Distribution or modification of the project is not allowed.

[Read the full license text here](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode).
