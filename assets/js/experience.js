AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Developer Intern",
    cardImage: "assets/images/experience-page/Univeris.jpg",
    place: "Univeris Corporation",
    time: "(Aug, 2022 - Aug, 2023)",
    desp: "<li>Migrated 23+ maven projects from JBOSS SEAM Framework, Spring 2 and Java 8/Java EE to Java Server Faces, Spring 3 and Java 17/Jakarta EE</li><li>Created & maintained a Software Bill of Materials for updated projects </li><li>Fixed various VueJS and Java 8 bugs within a Know your Client micro front-end Application </li><li>Tested with Junit, Mockito, and POSTMAN to verify and validate changes </li><li>Held role of Security Champion within Platform Maintenance Team, upholding code quality standard</li>",
  },
  {
    title: "Logistics and Volunteers Director",
    cardImage: "assets/images/experience-page/PSV.svg",
    place: "Physical Security Village",
    time: "(Jul, 2022 - Present)",
    desp: "<li>Lead and manage a physical security non-profit with a core team of 10, overseeing key departments including marketing, tech, compliance, and operations.</li><li>Coordinate and organize participation for the RSA, DEF CON, Cyphercon and Ekoparty conferences (300 - 10,000 participants per conference), and overseeing volunteer teams with up to 30+ people</li><li>Led and organized a cross-functional team with a budget of $10,000 using Kanban methodologies, utilizing Trello boards to develop a sponsorship package, find and cold-email potential sponsors, and maintain operations of a shop that generates $40,000 in annual revenue</li>",
  },
  {
    title: "Web Developer/Systems Admin",
    cardImage: "assets/images/experience-page/CMC.png",
    place: "Canadian Musicians Co-operative",
    time: "(Jul, 2021 - Sep, 2022)",
    desp: "<li>Collaborated with a cross-functional team comprising UI designers, stakeholders, and copywriters to overhaul the website (www.canadianmusicians.coop), refining it over three iterations using EditorX</li><li>Employed HTML/CSS/JS to create custom newsletter, calendar, and sign-up widgets to enhance website functionality</li><li>Seamlessly integrated the Shopify API, enabling customers to place orders for food products through the website</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ul>
              ${desp}
            </ul>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//     (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>

//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "UofT CTF",
    subtitle: "Participant",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "UofT CTF is a Capture the Flag Jeopardy style competition held yearly by the UofT CTF team. I entered as a participant, and along with 3 other people won the category prize for the Steganography category",
    href: "https://ctf.uoftctf.org/",
  },
  // {
  //   title: "QHacks",
  //   subtitle: "Participant",
  //   image: "assets/images/experience-page/",
  //   desp: "",
  //   href: "https://qctf.ca/",
  // },
  {
    title: "NewHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://newhacks.ca/",
  },
  {
    title: "QCTF",
    subtitle: "Participant",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "MakeUofT",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Hack The Student Life",
    subtitle: "Organizer",
    image: "assets/images/experience-page/HackTheStudentLife.svg",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://hackstudentlife.ca/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
    (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
