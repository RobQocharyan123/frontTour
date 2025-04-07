import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import img1 from "./Assets/1.png";
import img2 from "./Assets/2.png";
import img3 from "./Assets/3.png";
import img4 from "./Assets/4.png";
import img5 from "./Assets/5.png";
import img6 from "./Assets/6.png";
import img7 from "./Assets/7.png";
import img8 from "./Assets/8.png";
import img9 from "./Assets/9.png";

const storedLanguage = localStorage.getItem("selectedLanguage") || "am";

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        header: {
          nav: [
            "Home",
            "Packages",
            "Shop",
            "About",
            "Pages",
            "News",
            "Contact"
          ],
          title: "Travel.",
          book: "BOOK NOW"
        },
        home: {
          smallTitle: "Our Packages",
          bigTitle: "Search your Holiday",
          destination: "Search your destination:",
          enterName: "Enter name here...",
          date: "Select your date",
          price: "Max price:",
          filters: "More Filterrs"
        },
        main: {
          arr: [
            {
              id: 1,
              imgSrc: img1,
              destTitle: "Eiffel Tower",
              location: "France",
              grade: "Architectural Marvel",
              fees: "$300",
              hotels: [
                {
                  id: "1",
                  name: "Hôtel Left Bank, Saint-Germain-des-Prés",
                  star: 5
                },
                {
                  id: "2",
                  name: "Le Basile, Opéra",
                  star: 4
                },
                {
                  id: "3",
                  name: "Les Rives de Notre-Dame, Latin Quarter",
                  star: 4
                },
                {
                  id: "4",
                  name: "Hôtel Novotel Paris Centre Tour Eiffel, Beaugrenelle",
                  star: 3
                },
                {
                  id: "5",
                  name: "Ascot, Opéra",
                  star: 3
                }
              ],
              book: "https://ticket.toureiffel.paris/en",
              description:
                "The Eiffel Tower, a global cultural icon of France, stands tall as a masterpiece of architectural engineering and a must-visit destination for travelers.",
              paragraph:
                "The Eiffel Tower's design is attributed to Maurice Koechlin and Émile Nouguier, senior engineers at the Compagnie des Établissements Eiffel. They conceived the idea as a centerpiece for the 1889 Exposition Universelle, a world’s fair celebrating the centennial of the French Revolution.              In May 1884, Koechlin sketched the initial concept: a tall pylon with four lattice girders, wide at the base and converging at the top, connected by metal trusses at intervals. Initially, Gustave Eiffel showed little interest but later approved further development. The engineers then involved Stephen Sauvestre, the company’s chief architect, who added decorative arches at the base, a glass pavilion on the first level, and other embellishments.Eiffel supported the new design and purchased the patent rights from Koechlin, Nouguier, and Sauvestre. The design was then exhibited at the Exhibition of Decorative Arts in autumn 1884 under the company’s name.On 30 March 1885, Eiffel presented his plans to the Société des Ingénieurs Civils. He addressed the technical challenges and highlighted the tower’s practical uses, concluding that it would symbolize:Not only the art of the modern engineer, but also the century of Industry and Science in which we are living, and for which the way was prepared by the great scientific movement of the eighteenth century and by the Revolution of 1789, to which this monument will be built as an expression of France's gratitude.Progress stalled until 1886, when Jules Grévy was re-elected as President of France and Édouard Lockroy became Minister for Trade. After the budget for the exposition was approved, Lockroy announced changes to the open competition for the centerpiece, requiring proposals to include a study for a 300-meter (980-foot) four-sided metal tower on the Champ de Mars. This effectively secured Eiffel’s selection, as such a structure was considered a monumental engineering challenge at the time.                On 12 May, a commission was formed to evaluate Eiffel’s design and competing proposals. A month later, they concluded that all other submissions were either impractical or lacked sufficient detail, making Eiffel’s design the clear choice."
            },
            {
              id: 2,
              imgSrc: img2,
              destTitle: "Great Wall of China",
              location: "China",
              grade: "Historical Wonder",
              fees: "$500",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Beijing Marriott Hotel Yanqing",
                  star: 5
                },
                {
                  id: "2",
                  name: "Element Beijing Yanqing",
                  star: 5
                },
                {
                  id: "3",
                  name: "Hyatt Place Beijing Shiyuan",
                  star: 3
                },
                {
                  id: "4",
                  name: "Doubletree By Hilton Beijing Badaling, hotel in Yanqing Doubletree By Hilton Beijing Badaling                  ",
                  star: 3
                },
                {
                  id: "5",
                  name: "Commune by the Great Wall, in the Unbound Collection by Hyatt, hotel in Yanqing Commune by the Great Wall, in the Unbound Collection by Hyatt",
                  star: 1
                }
              ],
              description:
                "The Great Wall of China, an ancient series of walls and fortifications, offers breathtaking views and a glimpse into China's rich history.",
              paragraph:
                "The history of the Great Wall of China began during the Spring and Autumn period (771–476 BC) and the Warring States period (475–221 BC), when different states built fortifications to protect themselves. These fortifications were later connected by Qin Shi Huang, the first emperor of China, to defend his newly established Qin dynasty (221–206 BC) from nomadic invaders. The walls were constructed using rammed earth and forced labor, stretching from Gansu to the southern coast of Manchuria by 212 BC.\n\nLater dynasties, such as the Han (202 BC–220 AD), Northern Qi (550–574), Jin (1115–1234), and particularly the Ming (1369–1644), rebuilt and expanded the Wall, though their routes often differed from the Qin's. The Han extended the Wall to the west, while the Qi built around 1,600 kilometers (990 miles) of new walls. The Sui dynasty even mobilized over a million people for their wall-building efforts. In contrast, the Tang (618–907), Song (960–1279), Yuan (1271–1368), and Qing (1644–1912) dynasties generally did not build frontier walls, opting for military campaigns and diplomacy instead.\n\nDespite its usefulness in deterring raids, the Wall did not always prevent invasions. For instance, in 1644, the Qing forces entered through the Shanhai Pass, replacing the Ming dynasty as the rulers of China.\n\nThe Great Wall visible today mostly dates back to the Ming dynasty, when it was rebuilt in stone and brick, often through difficult terrain. Some sections are well-preserved, while others have been damaged, destroyed, or lost over time. Today, the Great Wall is a symbol of national pride and a popular tourist destination.\n\nThe need for the Great Wall arose due to geographical differences between the fertile lands of China and the semi-arid grasslands of Inner Asia. The distinct climates and landscapes led to different societal developments. The Chinese were able to develop irrigated agriculture early on, which required organized labor and led to the rise of bureaucracy. Walled cities were built for defense and administration, eventually forming feudal states that would unite to become the Chinese empire. Over time, walls expanded beyond cities to protect the entire empire from raids by northern nomads."
            },
            {
              id: 3,
              imgSrc: img3,
              destTitle: "Machu Picchu",
              location: "Peru",
              grade: "Inca Heritage",
              fees: "$450",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Inkas Land",
                  star: 5
                },
                {
                  id: "2",
                  name: "Samananchis Machupicchu",
                  star: 5
                },
                {
                  id: "3",
                  name: "Inti Pacha Palace Machupicchu",
                  star: 3
                },
                {
                  id: "4",
                  name: "Casa del Sol Machupicchu",
                  star: 3
                },
                {
                  id: "5",
                  name: "RUMIQOLQA Machupicchu Hotel",
                  star: 1
                }
              ],
              description:
                "Machu Picchu, an Inca citadel set high in the Andes Mountains, is renowned for its sophisticated dry-stone construction and panoramic views.",
              paragraph:
                "Machu Picchu is an ancient Inca citadel located in the Andes mountains in Peru. It was built in the 15th century during the reign of Inca emperor Pachacuti as a royal estate and religious site. The site is situated at an altitude of approximately 2,430 meters (7,970 feet) above sea level, offering breathtaking views of the surrounding mountain ranges and the Urubamba River below.\n\nMachu Picchu is known for its remarkable stone architecture, including temples, plazas, terraces, and a complex network of narrow roads. The most famous structures at the site are the Intihuatana stone (a ritual stone associated with astronomy), the Temple of the Sun, and the Room of the Three Windows. The purpose of the site remains unclear, though it is believed to have been a spiritual and ceremonial center, as well as a royal retreat.\n\nThe site was abandoned in the 16th century during the Spanish conquest and remained largely forgotten by the outside world until its rediscovery by American explorer Hiram Bingham in 1911. Since then, Machu Picchu has become one of the most important and visited archaeological sites in the world, attracting millions of tourists annually. It was designated a UNESCO World Heritage Site in 1983 and is considered one of the New Seven Wonders of the World.\n\nMachu Picchu is also significant for its engineering feats, including the construction of agricultural terraces that demonstrate advanced Inca farming techniques. The Incas used sophisticated methods of building without mortar, relying on precise stone-cutting and fitting techniques that have allowed many of the structures to remain intact for centuries.\n\nThe site is accessible by train or on foot via various hiking routes, such as the Inca Trail. It is a popular destination for tourists seeking to experience both the rich cultural history and natural beauty of the region."
            },
            {
              id: 4,
              imgSrc: img4,
              destTitle: "Taj Mahal",
              location: "India",
              grade: "Symbol of Love",
              fees: "$200",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "The Taj Mahal, a stunning ivory-white marble mausoleum, represents the epitome of Mughal architecture and eternal love.",
              paragraph:
                "The Taj Mahal, an ivory-white marble mausoleum located on the Yamuna River's right bank in Agra, India, is a testament to Mughal architectural grandeur. Commissioned in 1631 by Emperor Shah Jahan to honor his beloved wife Mumtaz Mahal, it also serves as his final resting place. This iconic structure is the centerpiece of a 17-hectare complex, encompassing a mosque, a guest house, and meticulously landscaped gardens enclosed by a crenellated wall.             Construction commenced in 1631 and culminated in 1648, though subsequent work continued for five years. The Taj Mahal, a masterpiece of Indo-Islamic and Mughal architecture, showcases symmetrical construction, intricate designs, and a harmonious blend of white marble and red sandstone. Over 20,000 artisans and workers, under the guidance of Ustad Ahmad Lahori, contributed to its creation.               Recognized as a UNESCO World Heritage Site in 1983, the Taj Mahal is a symbol of India's rich history and a global icon of architectural excellence. Its allure continues to captivate millions of visitors annually, solidifying its position as one of the New 7 Wonders of the World."
            },
            {
              id: 5,
              imgSrc: img5,
              destTitle: "Grand Canyon",
              location: "USA",
              grade: "Natural Wonder",
              fees: "$100",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "The Grand Canyon, carved by the Colorado River, is a natural masterpiece showcasing layers of red rock and awe-inspiring vistas.",
              paragraph:
                "Machu Picchu is an ancient Inca citadel located in the Andes mountains in Peru. It was built in the 15th century during the reign of Inca emperor Pachacuti as a royal estate and religious site. The site is situated at an altitude of approximately 2,430 meters (7,970 feet) above sea level, offering breathtaking views of the surrounding mountain ranges and the Urubamba River below.\n\nMachu Picchu is known for its remarkable stone architecture, including temples, plazas, terraces, and a complex network of narrow roads. The most famous structures at the site are the Intihuatana stone (a ritual stone associated with astronomy), the Temple of the Sun, and the Room of the Three Windows. The purpose of the site remains unclear, though it is believed to have been a spiritual and ceremonial center, as well as a royal retreat.\n\nThe site was abandoned in the 16th century during the Spanish conquest and remained largely forgotten by the outside world until its rediscovery by American explorer Hiram Bingham in 1911. Since then, Machu Picchu has become one of the most important and visited archaeological sites in the world, attracting millions of tourists annually. It was designated a UNESCO World Heritage Site in 1983 and is considered one of the New Seven Wonders of the World.\n\nMachu Picchu is also significant for its engineering feats, including the construction of agricultural terraces that demonstrate advanced Inca farming techniques. The Incas used sophisticated methods of building without mortar, relying on precise stone-cutting and fitting techniques that have allowed many of the structures to remain intact for centuries.\n\nThe site is accessible by train or on foot via various hiking routes, such as the Inca Trail. It is a popular destination for tourists seeking to experience both the rich cultural history and natural beauty of the region."
            },
            {
              id: 6,
              imgSrc: img6,
              destTitle: "Santorini",
              location: "Greece",
              grade: "Island Paradise",
              fees: "$400",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Santorini, a beautiful island in the Aegean Sea, is famous for its white-washed buildings, blue-domed churches, and stunning sunsets.",
              paragraph:
                "Machu Picchu is an ancient Inca citadel located in the Andes mountains in Peru. It was built in the 15th century during the reign of Inca emperor Pachacuti as a royal estate and religious site. The site is situated at an altitude of approximately 2,430 meters (7,970 feet) above sea level, offering breathtaking views of the surrounding mountain ranges and the Urubamba River below.\n\nMachu Picchu is known for its remarkable stone architecture, including temples, plazas, terraces, and a complex network of narrow roads. The most famous structures at the site are the Intihuatana stone (a ritual stone associated with astronomy), the Temple of the Sun, and the Room of the Three Windows. The purpose of the site remains unclear, though it is believed to have been a spiritual and ceremonial center, as well as a royal retreat.\n\nThe site was abandoned in the 16th century during the Spanish conquest and remained largely forgotten by the outside world until its rediscovery by American explorer Hiram Bingham in 1911. Since then, Machu Picchu has become one of the most important and visited archaeological sites in the world, attracting millions of tourists annually. It was designated a UNESCO World Heritage Site in 1983 and is considered one of the New Seven Wonders of the World.\n\nMachu Picchu is also significant for its engineering feats, including the construction of agricultural terraces that demonstrate advanced Inca farming techniques. The Incas used sophisticated methods of building without mortar, relying on precise stone-cutting and fitting techniques that have allowed many of the structures to remain intact for centuries.\n\nThe site is accessible by train or on foot via various hiking routes, such as the Inca Trail. It is a popular destination for tourists seeking to experience both the rich cultural history and natural beauty of the region."
            },
            {
              id: 7,
              imgSrc: img7,
              destTitle: "Mount Fuji",
              location: "Japan",
              grade: "Sacred Peak",
              fees: "$250",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Mount Fuji, Japan's tallest peak, is an active volcano and a spiritual symbol, attracting hikers and nature enthusiasts alike.",
              paragraph:
                "Machu Picchu is an ancient Inca citadel located in the Andes mountains in Peru. It was built in the 15th century during the reign of Inca emperor Pachacuti as a royal estate and religious site. The site is situated at an altitude of approximately 2,430 meters (7,970 feet) above sea level, offering breathtaking views of the surrounding mountain ranges and the Urubamba River below.\n\nMachu Picchu is known for its remarkable stone architecture, including temples, plazas, terraces, and a complex network of narrow roads. The most famous structures at the site are the Intihuatana stone (a ritual stone associated with astronomy), the Temple of the Sun, and the Room of the Three Windows. The purpose of the site remains unclear, though it is believed to have been a spiritual and ceremonial center, as well as a royal retreat.\n\nThe site was abandoned in the 16th century during the Spanish conquest and remained largely forgotten by the outside world until its rediscovery by American explorer Hiram Bingham in 1911. Since then, Machu Picchu has become one of the most important and visited archaeological sites in the world, attracting millions of tourists annually. It was designated a UNESCO World Heritage Site in 1983 and is considered one of the New Seven Wonders of the World.\n\nMachu Picchu is also significant for its engineering feats, including the construction of agricultural terraces that demonstrate advanced Inca farming techniques. The Incas used sophisticated methods of building without mortar, relying on precise stone-cutting and fitting techniques that have allowed many of the structures to remain intact for centuries.\n\nThe site is accessible by train or on foot via various hiking routes, such as the Inca Trail. It is a popular destination for tourists seeking to experience both the rich cultural history and natural beauty of the region."
            },
            {
              id: 8,
              imgSrc: img8,
              destTitle: "Colosseum",
              location: "Italy",
              grade: "Ancient Arena",
              fees: "$350",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 2
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 2
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 2
                }
              ],
              description:
                "The Colosseum, an iconic Roman amphitheater, stands as a testament to the grandeur of ancient Rome, hosting gladiator battles and grand spectacles.",
              paragraph:
                "Machu Picchu is an ancient Inca citadel located in the Andes mountains in Peru. It was built in the 15th century during the reign of Inca emperor Pachacuti as a royal estate and religious site. The site is situated at an altitude of approximately 2,430 meters (7,970 feet) above sea level, offering breathtaking views of the surrounding mountain ranges and the Urubamba River below.\n\nMachu Picchu is known for its remarkable stone architecture, including temples, plazas, terraces, and a complex network of narrow roads. The most famous structures at the site are the Intihuatana stone (a ritual stone associated with astronomy), the Temple of the Sun, and the Room of the Three Windows. The purpose of the site remains unclear, though it is believed to have been a spiritual and ceremonial center, as well as a royal retreat.\n\nThe site was abandoned in the 16th century during the Spanish conquest and remained largely forgotten by the outside world until its rediscovery by American explorer Hiram Bingham in 1911. Since then, Machu Picchu has become one of the most important and visited archaeological sites in the world, attracting millions of tourists annually. It was designated a UNESCO World Heritage Site in 1983 and is considered one of the New Seven Wonders of the World.\n\nMachu Picchu is also significant for its engineering feats, including the construction of agricultural terraces that demonstrate advanced Inca farming techniques. The Incas used sophisticated methods of building without mortar, relying on precise stone-cutting and fitting techniques that have allowed many of the structures to remain intact for centuries.\n\nThe site is accessible by train or on foot via various hiking routes, such as the Inca Trail. It is a popular destination for tourists seeking to experience both the rich cultural history and natural beauty of the region."
            },
            {
              id: 9,
              imgSrc: img9,
              destTitle: "Statue of Liberty",
              location: "USA",
              grade: "Symbol of Freedom",
              fees: "$150",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "The Statue of Liberty, a symbol of democracy and freedom, welcomes visitors to New York Harbor with its majestic presence and rich history.",
              paragraph:
                "Machu Picchu is an ancient Inca citadel located in the Andes mountains in Peru. It was built in the 15th century during the reign of Inca emperor Pachacuti as a royal estate and religious site. The site is situated at an altitude of approximately 2,430 meters (7,970 feet) above sea level, offering breathtaking views of the surrounding mountain ranges and the Urubamba River below.\n\nMachu Picchu is known for its remarkable stone architecture, including temples, plazas, terraces, and a complex network of narrow roads. The most famous structures at the site are the Intihuatana stone (a ritual stone associated with astronomy), the Temple of the Sun, and the Room of the Three Windows. The purpose of the site remains unclear, though it is believed to have been a spiritual and ceremonial center, as well as a royal retreat.\n\nThe site was abandoned in the 16th century during the Spanish conquest and remained largely forgotten by the outside world until its rediscovery by American explorer Hiram Bingham in 1911. Since then, Machu Picchu has become one of the most important and visited archaeological sites in the world, attracting millions of tourists annually. It was designated a UNESCO World Heritage Site in 1983 and is considered one of the New Seven Wonders of the World.\n\nMachu Picchu is also significant for its engineering feats, including the construction of agricultural terraces that demonstrate advanced Inca farming techniques. The Incas used sophisticated methods of building without mortar, relying on precise stone-cutting and fitting techniques that have allowed many of the structures to remain intact for centuries.\n\nThe site is accessible by train or on foot via various hiking routes, such as the Inca Trail. It is a popular destination for tourists seeking to experience both the rich cultural history and natural beauty of the region."
            }
          ],
          title: "Most Visited Destinations",
          details: "Details",
          hotels: "Hotels",
          less: "Less",
          more: "More"
        },

        contact: {},

        footer: {
          smallTitle: "KEEP IN TOUCH",
          bigTitle: "Travel with us",
          enterEmail: "Enter Email Address",
          send: "SEND",
          title: "Travel",
          description:
            "Travel is the act of moving from one place to another, typically for leisure, business, or exploration. It allows people to experience new cultures, landscapes, and traditions while broadening their perspectives. Travel can take various forms, including domestic or international trips, solo adventures, family vacations, or business journeys",
          agancy: "OUR AGENCY",
          agancyArr: ["Services", "Insurance", "Agency", "Tourism", "Payment"],
          partners: "PARTNERS",
          partnersArr: [
            "Bookings",
            "Rentcars",
            "HostelWorlds",
            "Trivago",
            "TripAdvisor"
          ],
          last: "LAST MINUT",
          lastArr: ["London", "California", "Indonesia", "Europe", "Armenia"],
          subOne: "BEST TRAVEL WEBSITE THEME",
          subTwo: "COPY RIGHT RESERVED - ISRATECH 2025"
        },

        login: {
          name: "Username",
          password: "Password",
          rememberMe: "Remember me",
          forgotPassword: "Forgot Password",
          login: "Login",
          haveNotAccaunt: "Dont have an account?",
          register: "Register",
          phoneNumber: "Phone number",
          email: "Email",
          confirmPassword: "Confirm password",
          pleaseEnterPassword: "Please enter password",
          passwordNotMuch: "Password not mutch",
          submit: "Submit",
          verification: "Verification",
          verificationCode: "Verification code",
          resetPassword: "Reset password",
          repeatPassword: "Repeat password",
          passwordError1: "Password must be at least 5 characters",
          passwordError2:
            "Password must be  contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          passwordError3: "Password is required",
          confirmPasswordError1: "Please confirm your password",
          confirmPasswordError2: "Passwords do not match"
        }
      }
    },
    ru: {
      translation: {
        header: {
          nav: [
            "Главная",
            "Пакеты",
            "Магазин",
            "О нас",
            "Страницы",
            "Новости",
            "Контакты"
          ],
          title: "Путешествия.",
          book: "ЗАБРОНИРОВАТЬ СЕЙЧАС"
        },
        home: {
          smallTitle: "Наши пакеты",
          bigTitle: "Найдите свой отпуск",
          destination: "Найдите свой пункт назначения:",
          enterName: "Введите имя здесь...",
          date: "Выберите дату",
          price: "Макс. цена:",
          filters: "Больше фильтров"
        },
        main: {
          arr: [
            {
              id: 1,
              imgSrc: img1,
              destTitle: "Эйфелева башня",
              location: "Франция",
              grade: "Архитектурное чудо",
              charges: "$300",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Hôtel Left Bank, Saint-Germain-des-Prés",
                  star: 5
                },
                {
                  id: "2",
                  name: "Le Basile, Opéra",
                  star: 4
                },
                {
                  id: "3",
                  name: "Les Rives de Notre-Dame, Latin Quarter",
                  star: 4
                },
                {
                  id: "4",
                  name: "Hôtel Novotel Paris Centre Tour Eiffel, Beaugrenelle",
                  star: 3
                },
                {
                  id: "5",
                  name: "Ascot, Opéra",
                  star: 3
                }
              ],
              description:
                "Эйфелева башня, всемирный культурный символ Франции, возвышается как шедевр архитектурного проектирования и обязательное место для посещения путешественниками.",
              paragraph:
                "«Проект Эйфелевой башни приписывается Морису Кёхлену и Эмилю Нугье, старшим инженерам Compagnie des Établissements Eiffel. Они задумали эту идею как центральный элемент Всемирной выставки 1889 года, всемирной выставки, посвященной столетию Французской революции. В мае 1884 года Кёхлен набросал первоначальную концепцию: высокий пилон с четырьмя решетчатыми балками, широкими у основания и сходящимися наверху, соединенными металлическими фермами с интервалами. Поначалу Гюстав Эйфель не проявил особого интереса, но позже одобрил дальнейшее развитие. Затем инженеры привлекли Стефана Совестра, главного архитектора компании, который добавил декоративные арки у основания, стеклянный павильон на первом уровне и другие украшения. Эйфель поддержал новый проект и приобрел патентные права у Кёхлена, Нугье и Совестра. Затем проект был выставлен на Выставке декоративного искусства в осенью 1884 года под названием компании. 30 марта 1885 года Эйфель представил свои планы Обществу инженеров-строителей. Он рассмотрел технические проблемы и подчеркнул практическое применение башни, заключив, что она будет символизировать: не только искусство современного инженера, но и век промышленности и науки, в котором мы живем, и которому был проложен путь великим научным движением восемнадцатого века и революцией 1789 года, которой этот памятник будет возведен как выражение благодарности Франции. Прогресс застопорился до 1886 года, когда Жюль Греви был переизбран на пост президента Франции, а Эдуард Локрой стал министром торговли. После утверждения бюджета экспозиции Локрой объявил об изменениях в открытом конкурсе на центральную часть, потребовав в предложения включить исследование для 300-метровой (980-футовой) четырехгранной металлической башни на Марсовом поле. Это фактически обеспечило выбор Эйфеля, поскольку в то время такая конструкция считалась монументальной инженерной задачей. 12 мая была сформирована комиссия для оценки проекта Эйфеля и конкурирующих предложений. Месяц спустя они пришли к выводу, что все остальные предложения были либо непрактичными, либо не имели достаточной детализации, что сделало проект Эйфеля очевидным выбором."
            },
            {
              id: 2,
              imgSrc: img2,
              destTitle: "Великая Китайская стена",
              location: "Китай",
              grade: "Историческое чудо",
              charges: "$500",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Beijing Marriott Hotel Yanqing",
                  star: 5
                },
                {
                  id: "2",
                  name: "Element Beijing Yanqing",
                  star: 5
                },
                {
                  id: "3",
                  name: "Hyatt Place Beijing Shiyuan",
                  star: 3
                },
                {
                  id: "4",
                  name: "Doubletree By Hilton Beijing Badaling, hotel in Yanqing Doubletree By Hilton Beijing Badaling                  ",
                  star: 3
                },
                {
                  id: "5",
                  name: "Commune by the Great Wall, in the Unbound Collection by Hyatt, hotel in Yanqing Commune by the Great Wall, in the Unbound Collection by Hyatt",
                  star: 1
                }
              ],
              description:
                "Великая Китайская стена, древняя серия стен и укреплений, предлагает захватывающие виды и возможность заглянуть в богатую историю Китая.",
              paragraph:
                "История Великой Китайской стены началась в период Весны и Осени (771–476 гг. до н. э.) и период Воюющих царств (475–221 гг. до н. э.), когда разные государства строили укрепления, чтобы защитить себя. Эти укрепления позже были объединены Цинь Шихуанди, первым императором Китая, для защиты своей недавно созданной династии Цинь (221–206 гг. до н. э.) от кочевых захватчиков. Стены были построены с использованием утрамбованной земли и принудительного труда, протянувшись от Ганьсу до южного побережья Маньчжурии к 212 г. до н. э.\n\nБолее поздние династии, такие как Хань (202 г. до н. э.–220 г. н. э.), Северная Ци (550–574 гг.), Цзинь (1115–1234 гг.) и особенно Мин (1369–1644 гг.), перестроили и расширили Стену, хотя их маршруты часто отличались от маршрутов Цинь. Хань продлила Стену на запад, в то время как Ци построил около 1600 километров (990 миль) новых стен. Династия Суй даже мобилизовала более миллиона человек для своих усилий по строительству стен. Напротив, династии Тан (618–907), Сун (960–1279), Юань (1271–1368) и Цин (1644–1912) обычно не строили пограничные стены, выбирая вместо этого военные кампании и дипломатию.\n\nНесмотря на свою полезность в сдерживании набегов, Стена не всегда предотвращала вторжения. Например, в 1644 году войска Цин вошли через Шанхайский проход, сменив династию Мин в качестве правителей Китая.\n\nВеликая стена, которую мы видим сегодня, в основном восходит к династии Мин, когда она была перестроена из камня и кирпича, часто в труднопроходимой местности. Некоторые участки хорошо сохранились, в то время как другие были повреждены, разрушены или утеряны с течением времени. Сегодня Великая стена является символом национальной гордости и популярным туристическим направлением.\n\nНеобходимость в Великой стене возникла из-за географических различий между плодородными землями Китая и полузасушливыми лугами Внутренней Азии. Различный климат и ландшафт привели к разному общественному развитию. Китайцы смогли развить орошаемое земледелие на ранних этапах, что потребовало организованного труда и привело к росту бюрократии. Города, окруженные стенами, строились для обороны и управления, в конечном итоге образуя феодальные государства, которые объединились в Китайскую империю. Со временем стены расширились за пределы городов, чтобы защитить всю империю от набегов северных кочевников"
            },
            {
              id: 3,
              imgSrc: img3,
              destTitle: "Мачу-Пикчу",
              location: "Peru",
              grade: "Inca Heritage",
              charges: "$450",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Inkas Land",
                  star: 5
                },
                {
                  id: "2",
                  name: "Samananchis Machupicchu",
                  star: 5
                },
                {
                  id: "3",
                  name: "Inti Pacha Palace Machupicchu",
                  star: 3
                },
                {
                  id: "4",
                  name: "Casa del Sol Machupicchu",
                  star: 3
                },
                {
                  id: "5",
                  name: "RUMIQOLQA Machupicchu Hotel",
                  star: 1
                }
              ],
              description:
                "Machu Picchu, цитадель инков, расположенная высоко в Андах, славится своей сложной сухой каменной кладкой и панорамными видами.",
              paragraph:
                "Мачу-Пикчу — древняя цитадель инков, расположенная в Андах в Перу. Она была построена в 15 веке во время правления императора инков Пачакути как королевское поместье и религиозное место. Место расположено на высоте около 2430 метров (7970 футов) над уровнем моря, откуда открывается захватывающий вид на окружающие горные хребты и реку Урубамба внизу.\n\nМачу-Пикчу известен своей замечательной каменной архитектурой, включая храмы, площади, террасы и сложную сеть узких дорог. Наиболее известными сооружениями на этом месте являются камень Интихуатана (ритуальный камень, связанный с астрономией), Храм Солнца и Комната трех окон. Назначение этого места остается неясным, хотя считается, что оно было духовным и церемониальным центром, а также королевской резиденцией.\n\nМесто было заброшено в 16 веке во время испанского завоевания и оставалось в значительной степени забытым внешним миром до его повторного открытия американским исследователем Хирам Бингем в 1911 году. С тех пор Мачу-Пикчу стал одним из самых важных и посещаемых археологических памятников в мире, ежегодно привлекая миллионы туристов. Он был включен в список Всемирного наследия ЮНЕСКО в 1983 году и считается одним из Новых семи чудес света.\n\nМачу-Пикчу также важен своими инженерными подвигами, включая строительство сельскохозяйственных террас, которые демонстрируют передовые методы ведения сельского хозяйства инков. Инки использовали сложные методы строительства без раствора, полагаясь на точные методы резки и подгонки камня, которые позволили многим сооружениям оставаться нетронутыми на протяжении столетий.\n\nДо этого места можно добраться на поезде или пешком по различным пешеходным маршрутам, таким как Тропа инков. Это популярное место для туристов, желающих познакомиться как с богатой культурной историей, так и с природной красотой региона"
            },
            {
              id: 4,
              imgSrc: img4,
              destTitle: "Taj Mahal",
              location: "India",
              grade: "Symbol of Love",
              charges: "$200",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Taj Mahal, потрясающий мавзолей из мрамора цвета слоновой кости, представляет собой воплощение архитектуры Моголов и вечной любви.",
              paragraph:
                "«Тадж-Махал, мавзолей из мрамора цвета слоновой кости, расположенный на правом берегу реки Ямуны в Агре, Индия, является свидетельством архитектурного величия Моголов. Построенный в 1631 году по заказу императора Шах-Джахана в честь его любимой жены Мумтаз-Махал, он также служит местом его последнего упокоения. Это знаковое сооружение является центральным элементом комплекса площадью 17 гектаров, включающего мечеть, гостевой дом и тщательно ухоженные сады, окруженные зубчатой ​​стеной. Строительство началось в 1631 году и завершилось в 1648 году, хотя последующие работы продолжались в течение пяти лет. Тадж-Махал, шедевр индо-исламской и могольской архитектуры, демонстрирует симметричную конструкцию, замысловатые узоры и гармоничное сочетание белого мрамора и красного песчаника. В его создании приняли участие более 20 000 мастеров и рабочих под руководством Устада Ахмада Лахори. Признан ЮНЕСКО Объект Всемирного наследия в 1983 году, Тадж-Махал является символом богатой истории Индии и всемирной иконой архитектурного совершенства. Его очарование продолжает ежегодно очаровывать миллионы посетителей, укрепляя его позицию как одного из Новых 7 чудес света."
            },
            {
              id: 5,
              imgSrc: img5,
              destTitle: "Grand Canyon",
              location: "USA",
              grade: "Natural Wonder",
              charges: "$100",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Grand Canyon, вырезанный рекой Колорадо, природный шедевр, демонстрирующий слои красной скалы и впечатляющие виды.",
              paragraph:
                "Мачу-Пикчу — древняя цитадель инков, расположенная в Андах в Перу. Она была построена в 15 веке во время правления императора инков Пачакути как королевское поместье и религиозное место. Место расположено на высоте около 2430 метров (7970 футов) над уровнем моря, откуда открывается захватывающий вид на окружающие горные хребты и реку Урубамба внизу.\n\nМачу-Пикчу известен своей замечательной каменной архитектурой, включая храмы, площади, террасы и сложную сеть узких дорог. Наиболее известными сооружениями на этом месте являются камень Интихуатана (ритуальный камень, связанный с астрономией), Храм Солнца и Комната трех окон. Назначение этого места остается неясным, хотя считается, что оно было духовным и церемониальным центром, а также королевской резиденцией.\n\nМесто было заброшено в 16 веке во время испанского завоевания и оставалось в значительной степени забытым внешним миром до его повторного открытия американским исследователем Хирам Бингем в 1911 году. С тех пор Мачу-Пикчу стал одним из самых важных и посещаемых археологических памятников в мире, ежегодно привлекая миллионы туристов. Он был включен в список Всемирного наследия ЮНЕСКО в 1983 году и считается одним из Новых семи чудес света.\n\nМачу-Пикчу также важен своими инженерными подвигами, включая строительство сельскохозяйственных террас, которые демонстрируют передовые методы ведения сельского хозяйства инков. Инки использовали сложные методы строительства без раствора, полагаясь на точные методы резки и подгонки камня, которые позволили многим сооружениям оставаться нетронутыми на протяжении столетий.\n\nДо этого места можно добраться на поезде или пешком по различным пешеходным маршрутам, таким как Тропа инков. Это популярное место для туристов, желающих познакомиться как с богатой культурной историей, так и с природной красотой региона."
            },
            {
              id: 6,
              imgSrc: img6,
              destTitle: "Санторини",
              location: "Греция",
              grade: "Райский остров",
              charges: "$400",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Санторини, прекрасный остров в Эгейском море, славится своими белоснежными зданиями, церквями с голубыми куполами и потрясающими закатами.",
              paragraph:
                "Мачу-Пикчу — древняя цитадель инков, расположенная в Андах в Перу. Она была построена в 15 веке во время правления императора инков Пачакути как королевское поместье и религиозное место. Место расположено на высоте около 2430 метров (7970 футов) над уровнем моря, откуда открывается захватывающий вид на окружающие горные хребты и реку Урубамба внизу.\n\nМачу-Пикчу известен своей замечательной каменной архитектурой, включая храмы, площади, террасы и сложную сеть узких дорог. Наиболее известными сооружениями на этом месте являются камень Интихуатана (ритуальный камень, связанный с астрономией), Храм Солнца и Комната трех окон. Назначение этого места остается неясным, хотя считается, что оно было духовным и церемониальным центром, а также королевской резиденцией.\n\nМесто было заброшено в 16 веке во время испанского завоевания и оставалось в значительной степени забытым внешним миром до его повторного открытия американским исследователем Хирам Бингем в 1911 году. С тех пор Мачу-Пикчу стал одним из самых важных и посещаемых археологических памятников в мире, ежегодно привлекая миллионы туристов. Он был включен в список Всемирного наследия ЮНЕСКО в 1983 году и считается одним из Новых семи чудес света.\n\nМачу-Пикчу также важен своими инженерными подвигами, включая строительство сельскохозяйственных террас, которые демонстрируют передовые методы ведения сельского хозяйства инков. Инки использовали сложные методы строительства без раствора, полагаясь на точные методы резки и подгонки камня, которые позволили многим сооружениям оставаться нетронутыми на протяжении столетий.\n\nДо этого места можно добраться на поезде или пешком по различным пешеходным маршрутам, таким как Тропа инков. Это популярное место для туристов, желающих познакомиться как с богатой культурной историей, так и с природной красотой региона."
            },
            {
              id: 7,
              imgSrc: img7,
              destTitle: "Гора Фудзи",
              location: "Япония",
              grade: "Священная вершина",
              charges: "$250",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Гора Фудзи, самая высокая вершина Японии, является действующим вулканом и духовным символом, привлекающим как туристов, так и любителей природы.",
              paragraph:
                "Мачу-Пикчу — древняя цитадель инков, расположенная в Андах в Перу. Она была построена в 15 веке во время правления императора инков Пачакути как королевское поместье и религиозное место. Место расположено на высоте около 2430 метров (7970 футов) над уровнем моря, откуда открывается захватывающий вид на окружающие горные хребты и реку Урубамба внизу.\n\nМачу-Пикчу известен своей замечательной каменной архитектурой, включая храмы, площади, террасы и сложную сеть узких дорог. Наиболее известными сооружениями на этом месте являются камень Интихуатана (ритуальный камень, связанный с астрономией), Храм Солнца и Комната трех окон. Назначение этого места остается неясным, хотя считается, что оно было духовным и церемониальным центром, а также королевской резиденцией.\n\nМесто было заброшено в 16 веке во время испанского завоевания и оставалось в значительной степени забытым внешним миром до его повторного открытия американским исследователем Хирам Бингем в 1911 году. С тех пор Мачу-Пикчу стал одним из самых важных и посещаемых археологических памятников в мире, ежегодно привлекая миллионы туристов. Он был включен в список Всемирного наследия ЮНЕСКО в 1983 году и считается одним из Новых семи чудес света.\n\nМачу-Пикчу также важен своими инженерными подвигами, включая строительство сельскохозяйственных террас, которые демонстрируют передовые методы ведения сельского хозяйства инков. Инки использовали сложные методы строительства без раствора, полагаясь на точные методы резки и подгонки камня, которые позволили многим сооружениям оставаться нетронутыми на протяжении столетий.\n\nДо этого места можно добраться на поезде или пешком по различным пешеходным маршрутам, таким как Тропа инков. Это популярное место для туристов, желающих познакомиться как с богатой культурной историей, так и с природной красотой региона."
            },
            {
              id: 8,
              imgSrc: img8,
              destTitle: "Колизей",
              location: "Италия",
              grade: "Древняя арена",
              charges: "$350",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Колизей, культовый римский амфитеатр, является свидетельством величия Древнего Рима, где проходили гладиаторские бои и грандиозные зрелища.",
              paragraph:
                "Мачу-Пикчу — древняя цитадель инков, расположенная в Андах в Перу. Она была построена в 15 веке во время правления императора инков Пачакути как королевское поместье и религиозное место. Место расположено на высоте около 2430 метров (7970 футов) над уровнем моря, откуда открывается захватывающий вид на окружающие горные хребты и реку Урубамба внизу.\n\nМачу-Пикчу известен своей замечательной каменной архитектурой, включая храмы, площади, террасы и сложную сеть узких дорог. Наиболее известными сооружениями на этом месте являются камень Интихуатана (ритуальный камень, связанный с астрономией), Храм Солнца и Комната трех окон. Назначение этого места остается неясным, хотя считается, что оно было духовным и церемониальным центром, а также королевской резиденцией.\n\nМесто было заброшено в 16 веке во время испанского завоевания и оставалось в значительной степени забытым внешним миром до его повторного открытия американским исследователем Хирам Бингем в 1911 году. С тех пор Мачу-Пикчу стал одним из самых важных и посещаемых археологических памятников в мире, ежегодно привлекая миллионы туристов. Он был включен в список Всемирного наследия ЮНЕСКО в 1983 году и считается одним из Новых семи чудес света.\n\nМачу-Пикчу также важен своими инженерными подвигами, включая строительство сельскохозяйственных террас, которые демонстрируют передовые методы ведения сельского хозяйства инков. Инки использовали сложные методы строительства без раствора, полагаясь на точные методы резки и подгонки камня, которые позволили многим сооружениям оставаться нетронутыми на протяжении столетий.\n\nДо этого места можно добраться на поезде или пешком по различным пешеходным маршрутам, таким как Тропа инков. Это популярное место для туристов, желающих познакомиться как с богатой культурной историей, так и с природной красотой региона."
            },
            {
              id: 9,
              imgSrc: img9,
              destTitle: "Статуя Свободы",
              location: "США",
              grade: "Символ Свободы",
              charges: "$150",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Статуя Свободы, символ демократии и свободы, приветствует посетителей гавани Нью-Йорка своим величественным присутствием и богатой историей.",
              paragraph:
                "Мачу-Пикчу — древняя цитадель инков, расположенная в Андах в Перу. Она была построена в 15 веке во время правления императора инков Пачакути как королевское поместье и религиозное место. Место расположено на высоте около 2430 метров (7970 футов) над уровнем моря, откуда открывается захватывающий вид на окружающие горные хребты и реку Урубамба внизу.\n\nМачу-Пикчу известен своей замечательной каменной архитектурой, включая храмы, площади, террасы и сложную сеть узких дорог. Наиболее известными сооружениями на этом месте являются камень Интихуатана (ритуальный камень, связанный с астрономией), Храм Солнца и Комната трех окон. Назначение этого места остается неясным, хотя считается, что оно было духовным и церемониальным центром, а также королевской резиденцией.\n\nМесто было заброшено в 16 веке во время испанского завоевания и оставалось в значительной степени забытым внешним миром до его повторного открытия американским исследователем Хирам Бингем в 1911 году. С тех пор Мачу-Пикчу стал одним из самых важных и посещаемых археологических памятников в мире, ежегодно привлекая миллионы туристов. Он был включен в список Всемирного наследия ЮНЕСКО в 1983 году и считается одним из Новых семи чудес света.\n\nМачу-Пикчу также важен своими инженерными подвигами, включая строительство сельскохозяйственных террас, которые демонстрируют передовые методы ведения сельского хозяйства инков. Инки использовали сложные методы строительства без раствора, полагаясь на точные методы резки и подгонки камня, которые позволили многим сооружениям оставаться нетронутыми на протяжении столетий.\n\nДо этого места можно добраться на поезде или пешком по различным пешеходным маршрутам, таким как Тропа инков. Это популярное место для туристов, желающих познакомиться как с богатой культурной историей, так и с природной красотой региона."
            }
          ],
          title: "Самые посещаемые Направления",
          details: "Подробности",
          hotels: "Отели",
          less: "Меньше",
          more: "Больше"
        },
        footer: {
          smallTitle: "ОСТАВЛЯЙТЕСЬ НА СВЯЗИ",
          bigTitle: "Путешествуйте с нами",
          enterEmail: "Введите адрес электронной почты",
          send: "ОТПРАВИТЬ",
          title: "Путешествие",
          description:
            "Путешествие — это процесс перемещения из одного места в другое, как правило, для отдыха, бизнеса или исследования. Оно позволяет людям знакомиться с новыми культурами, ландшафтами и традициями, расширяя свои горизонты. Путешествия могут принимать различные формы, включая внутренние или международные поездки, одиночные приключения, семейные отпуска или деловые поездки",
          agancy: "НАШЕ АГЕНТСТВО",
          agancyArr: ["Услуги", "Страхование", "Агентство", "Туризм", "Оплата"],
          partners: "ПАРТНЕРЫ",
          partnersArr: [
            "Бронирования",
            "Rentcars",
            "HostelWorlds",
            "Trivago",
            "TripAdvisor"
          ],
          last: "ПОСЛЕДНЕЕ ПРЕДЛОЖЕНИЕ",
          lastArr: ["Лондон", "Калифорния", "Индонезия", "Европа", "Армения"],
          subOne: "ЛУЧШАЯ ТЕМА ТУРИСТИЧЕСКОГО САЙТА",
          subTwo: "АВТОРСКИЕ ПРАВА ЗАЩИЩЕНЫ - ISRATECH 2025"
        }
      }
    },
    am: {
      translation: {
        header: {
          nav: [
            "Տուն",
            "Փաթեթներ",
            "Խանութ",
            "Մեր մասին",
            "Էջեր",
            "Նորություններ",
            "Կոնտակտներ"
          ],
          title: "Ճամփորդություն",
          book: "ԱՄՐԱԳՐԻՐ ՀԻՄԱ"
        },
        home: {
          smallTitle: "Մեր փաթեթները",
          bigTitle: "Փնտրիր քո հանգիստը",
          destination: "Որոնել ձեր նպատակակետը",
          enterName: "Մուտքագրեք անունը այստեղ...",
          date: "Ընտրեք ձեր ամսաթիվը",
          price: "Առավելագույն գին:",
          filters: "Ավելի մանրամասն"
        },
        main: {
          arr: [
            {
              id: 1,
              imgSrc: img1,
              destTitle: "Էյֆելյան աշտարակ",
              location: "Ֆրանսիա",
              grade: "Ճարտարապետական ​​հրաշք",
              charges: "$300",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Hôtel Left Bank, Saint-Germain-des-Prés",
                  star: 5
                },
                {
                  id: "2",
                  name: "Le Basile, Opéra",
                  star: 4
                },
                {
                  id: "3",
                  name: "Les Rives de Notre-Dame, Latin Quarter",
                  star: 4
                },
                {
                  id: "4",
                  name: "Hôtel Novotel Paris Centre Tour Eiffel, Beaugrenelle",
                  star: 3
                },
                {
                  id: "5",
                  name: "Ascot, Opéra",
                  star: 3
                }
              ],
              description:
                "Էյֆելյան աշտարակը, Ֆրանսիայի գլոբալ մշակութային պատկերակը, կանգնած է որպես ճարտարապետական ​​ճարտարագիտության գլուխգործոց և ճանապարհորդների համար պարտադիր այցելության վայր",
              paragraph:
                "«Էյֆելյան աշտարակի նախագիծը վերագրվում է Մորիս Կոշլինին և Էմիլ Նուգիեին՝ Էյֆելի Compagnie des Établissements Eiffel-ի ավագ ինժեներներին: Նրանք գաղափարը մտահղացել են որպես 1889 թվականի «Exposition Universelle»-ի՝ համաշխարհային տոնավաճառի համար, որը նշում է Ֆրանսիական հեղափոխության հարյուրամյակը մայիսի 18-ին: , Քեչլինը ուրվագծել է սկզբնականը Հայեցակարգ. չորս վանդակավոր գլանափաթեթներ՝ լայն, վերևում, միացված մետաղական ֆերմերներով Սկզբում Գուստավ Էյֆելը քիչ հետաքրքրություն ցուցաբերեց, բայց հետագայում հաստատեցին ընկերության ղեկավար Սթիվեն Սավեստրին ճարտարապետ, ով հիմքում ավելացրել է դեկորատիվ կամարներ, առաջին մակարդակի ապակե տաղավար և այլ զարդանախշեր: Էյֆելի հենարանը նոր դիզայնը և արտոնագրային իրավունքները գնեց Koechlin-ից, Nouguier-ից և Sauvestre-ից: Դիզայնն այնուհետև ցուցադրվեց 1884 թվականի աշնանը դեկորատիվ արվեստի ցուցահանդեսում ընկերության անվան տակ: 1885 թվականի մարտի 30-ին Էյֆելը ներկայացրեց իր ծրագրերը Սոցիալական Ինգին: . Նա անդրադարձավ տեխնիկական մարտահրավերներին և ընդգծեց աշտարակի գործնական օգտագործումը՝ եզրակացնելով, որ այն խորհրդանշելու է. տասնութերորդ դարի գիտական ​​մեծ շարժումը և 1789 թվականի հեղափոխությունը, որին այս հուշարձանը կկառուցվի որպես Ֆրանսիայի երախտագիտության արտահայտություն: Առաջընթացը կանգ առավ մինչև 1886 թ. երբ Ժյուլ Գրևին վերընտրվեց Ֆրանսիայի նախագահ, իսկ Էդուարդ Լոկրոյը դարձավ Առևտրի նախարար։ Ցուցահանդեսի բյուջեն հաստատվելուց հետո Լոքրոյը հայտարարեց կենտրոնական մասի բաց մրցույթում փոփոխություններ կատարելու մասին՝ պահանջելով առաջարկներ ներառել Շամպ դե Մարսի վրա 300 մետր (980 ֆուտ) քառակողմ մետաղական աշտարակի ուսումնասիրություն: Սա արդյունավետորեն ապահովեց Էյֆելի ընտրությունը, քանի որ նման կառույցն այն ժամանակ համարվում էր մոնումենտալ ինժեներական մարտահրավեր: Մայիսի 12-ին ստեղծվեց հանձնաժողով՝ գնահատելու Էյֆելի դիզայնը և մրցակցող առաջարկները։ Մեկ ամիս անց նրանք եկան այն եզրակացության, որ բոլոր մյուս ներկայացումները կամ անիրագործելի էին, կամ չունեն բավարար մանրամասներ, ինչը Էյֆելի դիզայնը դարձրեց հստակ ընտրություն»:"
            },
            {
              id: 2,
              imgSrc: img2,
              destTitle: "Չինական մեծ պատ",
              location: "Չինաստան",
              grade: "Պատմական հրաշք",
              charges: "$500",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Beijing Marriott Hotel Yanqing",
                  star: 5
                },
                {
                  id: "2",
                  name: "Element Beijing Yanqing",
                  star: 5
                },
                {
                  id: "3",
                  name: "Hyatt Place Beijing Shiyuan",
                  star: 3
                },
                {
                  id: "4",
                  name: "Doubletree By Hilton Beijing Badaling, hotel in Yanqing Doubletree By Hilton Beijing Badaling                  ",
                  star: 3
                },
                {
                  id: "5",
                  name: "Commune by the Great Wall, in the Unbound Collection by Hyatt, hotel in Yanqing Commune by the Great Wall, in the Unbound Collection by Hyatt",
                  star: 1
                }
              ],
              description:
                "Չինական մեծ պարիսպը, պարիսպների և ամրությունների հնագույն շարքը, առաջարկում է շունչ կտրող տեսարաններ և հայացք դեպի Չինաստանի հարուստ պատմություն",
              paragraph:
                "«Չինական մեծ պարսպի պատմությունը սկսվել է գարնան և աշնան (մ.թ.ա. 771–476) և պատերազմող պետությունների ժամանակաշրջանում (մ.թ.ա. 475–221), երբ տարբեր պետություններ իրենց պաշտպանելու համար ամրություններ կառուցեցին։ Շի Հուանգը՝ Չինաստանի առաջին կայսրը, ով պաշտպանել է իր նորաստեղծ Ցին դինաստիան (մ.թ.ա. 221–206 թթ.) Քոչվոր զավթիչներից կառուցված հողի և հարկադիր աշխատանքի միջոցով, որը ձգվում է Գանսուից մինչև Մանջուրիայի հարավային ափը մ.թ.ա. 212 թվականին:\n\nՀետագա դինաստիաներ, ինչպիսիք են Հան (մ.թ.ա. 202–220 մ.թ.), Հյուսիսային Ցի (550–574), Ջին (1115): –1234), և հատկապես Մինգը (1369–1644), վերակառուցեցին և ընդարձակեցին պատը, չնայած նրանց Ճանապարհները հաճախ տարբերվում էին Քինի պատից դեպի արևմուտք, մինչդեռ Սուի դինաստիան մոբիլիզացրեց ավելի քան մեկ միլիոն մարդ: Տանգը (618–907), Սոնգը (960–1279), Յուանը (1271–1368) և Քինգը (1644–1912) դինաստիաները հիմնականում սահմանային պատեր չէին կառուցում, փոխարենը նախընտրում էին ռազմական արշավներն ու դիվանագիտությունը։\n\nՉնայած արշավանքները զսպելու իր օգտակարությանը, Պատը միշտ չէ, որ կանխում է արշավանքները։ Օրինակ՝ 1644թ.-ին Քինգի զորքերը մտան Շանհայի լեռնանցքով՝ փոխարինելով Մինգ դինաստային որպես Չինաստանի կառավարիչներ:\n\nԱյսօր տեսանելի Մեծ պատը հիմնականում թվագրվում է Մինգ դինաստիայի ժամանակ, երբ այն վերակառուցվել է քարով և աղյուսով, հաճախ դժվար տեղանքով: Որոշ հատվածներ լավ պահպանված են, իսկ մյուսները ժամանակի ընթացքում վնասվել, ավերվել կամ կորել են: Այսօր Մեծ պարիսպը ազգային հպարտության խորհրդանիշն է և զբոսաշրջության հայտնի վայր:\n\nThe Great Wall-ի անհրաժեշտությունը ծագել է Չինաստանի պարարտ հողերի և Ներքին Ասիայի կիսաչոր խոտածածկ տարածքների աշխարհագրական տարբերությունների պատճառով: Հստակ կլիմայական պայմաններն ու լանդշաֆտները հանգեցրին հասարակության տարբեր զարգացումների: Չինացիները կարողացան վաղաժամ զարգացնել ոռոգվող գյուղատնտեսությունը, որը պահանջում էր կազմակերպված աշխատուժ և հանգեցրեց բյուրոկրատիայի վերելքին: Պարսպապատ քաղաքները կառուցվել են պաշտպանության և կառավարման համար՝ ի վերջո ձևավորելով ֆեոդալական պետություններ, որոնք միավորվելու են՝ դառնալու չինական կայսրություն։ Ժամանակի ընթացքում պարիսպներն ընդարձակվեցին քաղաքներից այն կողմ՝ պաշտպանելու ամբողջ կայսրությունը հյուսիսային քոչվորների արշավանքներից»։"
            },
            {
              id: 3,
              imgSrc: img3,
              destTitle: "Մաչու Պիկչու",
              location: "Պերու",
              grade: "Ինկերի ժառանգություն",
              charges: "$450",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Inkas Land",
                  star: 5
                },
                {
                  id: "2",
                  name: "Samananchis Machupicchu",
                  star: 5
                },
                {
                  id: "3",
                  name: "Inti Pacha Palace Machupicchu",
                  star: 3
                },
                {
                  id: "4",
                  name: "Casa del Sol Machupicchu",
                  star: 3
                },
                {
                  id: "5",
                  name: "RUMIQOLQA Machupicchu Hotel",
                  star: 1
                }
              ],
              description:
                "Մաչու Պիկչուն՝ ինկերի միջնաբերդը, որը գտնվում է Անդերի լեռներում, հայտնի է իր բարդ չոր քարե շինարարությամբ և համայնապատկերային տեսարաններով",
              paragraph:
                "Մաչու Պիկչուն հին ինկերի միջնաբերդ է, որը գտնվում է Պերուի Անդերի լեռներում: Այն կառուցվել է 15-րդ դարում Ինկերի կայսր Պաչակուտիի օրոք որպես թագավորական կալվածք և կրոնական վայր: Տեղանքը գտնվում է մոտավորապես 2430 մետր բարձրության վրա ( 7970 ոտնաչափ) ծովի մակարդակից՝ բացելով շրջակա լեռնաշղթաների և Ուռուբամբա գետի հիասքանչ տեսարանները։ ներքևում։\n\nՄաչու Պիկչուն հայտնի է իր ուշագրավ քարե ճարտարապետությամբ, ներառյալ տաճարները, հրապարակները, տեռասները և նեղ ճանապարհների բարդ ցանցը։ Արևի տաճարը և երեք պատուհանների սենյակը մնում է անորոշ, թեև ենթադրվում է, որ այն եղել է հոգևոր և ծիսական կենտրոն ինչպես նաև թագավորական նահանջը։\n\nՏեղը լքվել է 16-րդ դարում՝ իսպանացիների գրավման ժամանակ և հիմնականում մոռացվել է արտաքին աշխարհի կողմից մինչև այն վերագտնվել է ամերիկացի հետախույզ Հիրամ Բինգհեմի կողմից 1911 թվականին։ Այդ ժամանակից ի վեր Մաչու Պիկչուն դարձել է այն վայրերից մեկը։ աշխարհի ամենակարևոր և այցելվող հնագիտական ​​վայրերը, որոնք տարեկան գրավում են միլիոնավոր զբոսաշրջիկների: Այն 1983 թվականին ճանաչվել է ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության օբյեկտ և համարվում է աշխարհի նոր յոթ հրաշալիքներից մեկը։\n\nՄաչու Պիկչուն նաև կարևոր է իր ինժեներական սխրանքներով, ներառյալ գյուղատնտեսական տեռասների կառուցումը, որոնք ցուցադրում են Ինկերի գյուղատնտեսության առաջադեմ տեխնիկան։ Ինկերն օգտագործում էին առանց շաղախի շինարարության բարդ մեթոդներ՝ հենվելով քարահատման և տեղադրման ճշգրիտ տեխնիկայի վրա, որը թույլ է տվել բազմաթիվ կառույցներին անձեռնմխելի մնալ դարեր շարունակ:\n\nԿայքը հասանելի է գնացքով կամ ոտքով տարբեր արշավային ուղիներով, օրինակ. որպես Ինկերի արահետ: Այն հայտնի վայր է զբոսաշրջիկների համար, ովքեր ցանկանում են զգալ ինչպես հարուստ մշակութային պատմությունը, այնպես էլ տարածաշրջանի բնական գեղեցկությունը»:"
            },
            {
              id: 4,
              imgSrc: img4,
              destTitle: "Թաջ Մահալ",
              location: "Հնդկաստան",
              grade: "Սիրո խորհրդանիշ",
              charges: "$200",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Թաջ Մահալը՝ ապշեցուցիչ փղոսկրի գույնի սպիտակ մարմարե դամբարանը, ներկայացնում է մուղալական ճարտարապետության և հավերժական սիրո մարմնավորումը",
              paragraph:
                "«Թաջ Մահալը՝ փղոսկրի գույնի սպիտակ մարմարե դամբարան, որը գտնվում է Յամունա գետի աջ ափին, Ագրա, Հնդկաստան, մուղալների ճարտարապետական ​​վեհության վկայությունն է: 1631 թվականին Շահ Ջահան կայսեր կողմից հանձնարարվել է հարգել իր սիրելի կնոջը՝ Մումթազ Մահալին, այն նաև ծառայում է որպես Նրա վերջին հանգստավայրը 17 հեկտար տարածքի կենտրոնն է Համալիրը, որն ընդգրկում է մզկիթ, հյուրատուն և մանրակրկիտ ձևավորված այգիներ՝ պարսպապատված պարիսպով , ցուցադրում է սիմետրիկ շինարարություն, բարդ ձևավորում և ներդաշնակ Սպիտակ մարմարի և կարմիր ավազաքարի խառնուրդ Ավելի քան 20,000 արհեստավորներ և բանվորներ, Ուստադ Ահմադ Լահորիի ղեկավարությամբ, նպաստել են դրա ստեղծմանը: ճարտարապետական ​​գերազանցության պատկերակ: Նրա գրավչությունը շարունակում է տարեկան գրավել միլիոնավոր այցելուների՝ ամրապնդելով իր դիրքը՝ որպես աշխարհի նոր 7 հրաշալիքներից մեկը»։"
            },
            {
              id: 5,
              imgSrc: img5,
              destTitle: "Գրանդ կիրճ",
              location: "ԱՄՆ",
              grade: "Բնության հրաշք",
              charges: "$100",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Գրանդ կիրճը, որը փորագրված է Կոլորադո գետի մոտ, բնական գլուխգործոց է, որը ցույց է տալիս կարմիր ժայռերի շերտերը և ակնածանք ներշնչող տեսարանները",
              paragraph:
                "Մաչու Պիկչուն հին ինկերի միջնաբերդ է, որը գտնվում է Պերուի Անդերի լեռներում: Այն կառուցվել է 15-րդ դարում Ինկերի կայսր Պաչակուտիի օրոք որպես թագավորական կալվածք և կրոնական վայր: Տեղանքը գտնվում է մոտավորապես 2430 մետր բարձրության վրա ( 7970 ոտնաչափ) ծովի մակարդակից՝ բացելով շրջակա լեռնաշղթաների և Ուռուբամբա գետի հիասքանչ տեսարանները։ ներքևում։\n\nՄաչու Պիկչուն հայտնի է իր ուշագրավ քարե ճարտարապետությամբ, ներառյալ տաճարները, հրապարակները, տեռասները և նեղ ճանապարհների բարդ ցանցը։ Արևի տաճարը և երեք պատուհանների սենյակը մնում է անորոշ, թեև ենթադրվում է, որ այն եղել է հոգևոր և ծիսական կենտրոն ինչպես նաև թագավորական նահանջը։\n\nՏեղը լքվել է 16-րդ դարում՝ իսպանացիների գրավման ժամանակ և հիմնականում մոռացվել է արտաքին աշխարհի կողմից մինչև այն վերագտնվել է ամերիկացի հետախույզ Հիրամ Բինգհեմի կողմից 1911 թվականին։ Այդ ժամանակից ի վեր Մաչու Պիկչուն դարձել է այն վայրերից մեկը։ աշխարհի ամենակարևոր և այցելվող հնագիտական ​​վայրերը, որոնք տարեկան գրավում են միլիոնավոր զբոսաշրջիկների: Այն 1983 թվականին ճանաչվել է ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության օբյեկտ և համարվում է աշխարհի նոր յոթ հրաշալիքներից մեկը։\n\nՄաչու Պիկչուն նաև կարևոր է իր ինժեներական սխրանքներով, ներառյալ գյուղատնտեսական տեռասների կառուցումը, որոնք ցուցադրում են Ինկերի գյուղատնտեսության առաջադեմ տեխնիկան։ Ինկերն օգտագործում էին առանց շաղախի շինարարության բարդ մեթոդներ՝ հենվելով քարահատման և տեղադրման ճշգրիտ տեխնիկայի վրա, որը թույլ է տվել բազմաթիվ կառույցներին անձեռնմխելի մնալ դարեր շարունակ:\n\nԿայքը հասանելի է գնացքով կամ ոտքով տարբեր արշավային ուղիներով, օրինակ. որպես Ինկերի արահետ: Այն հայտնի վայր է զբոսաշրջիկների համար, ովքեր ցանկանում են զգալ ինչպես հարուստ մշակութային պատմությունը, այնպես էլ տարածաշրջանի բնական գեղեցկությունը»:"
            },
            {
              id: 6,
              imgSrc: img6,
              destTitle: "Սանտորինի",
              location: "Հունաստան",
              grade: "Կղզու դրախտ",
              charges: "$400",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Սանտորինին՝ Էգեյան ծովի գեղատեսիլ կղզին, հայտնի է իր սպիտակ շինություններով, կապույտ գմբեթավոր եկեղեցիներով և ապշեցուցիչ մայրամուտներով",
              paragraph:
                "Մաչու Պիկչուն հին ինկերի միջնաբերդ է, որը գտնվում է Պերուի Անդերի լեռներում: Այն կառուցվել է 15-րդ դարում Ինկերի կայսր Պաչակուտիի օրոք որպես թագավորական կալվածք և կրոնական վայր: Տեղանքը գտնվում է մոտավորապես 2430 մետր բարձրության վրա ( 7970 ոտնաչափ) ծովի մակարդակից՝ բացելով շրջակա լեռնաշղթաների և Ուռուբամբա գետի հիասքանչ տեսարանները։ ներքևում։\n\nՄաչու Պիկչուն հայտնի է իր ուշագրավ քարե ճարտարապետությամբ, ներառյալ տաճարները, հրապարակները, տեռասները և նեղ ճանապարհների բարդ ցանցը։ Արևի տաճարը և երեք պատուհանների սենյակը մնում է անորոշ, թեև ենթադրվում է, որ այն եղել է հոգևոր և ծիսական կենտրոն ինչպես նաև թագավորական նահանջը։\n\nՏեղը լքվել է 16-րդ դարում՝ իսպանացիների գրավման ժամանակ և հիմնականում մոռացվել է արտաքին աշխարհի կողմից մինչև այն վերագտնվել է ամերիկացի հետախույզ Հիրամ Բինգհեմի կողմից 1911 թվականին։ Այդ ժամանակից ի վեր Մաչու Պիկչուն դարձել է այն վայրերից մեկը։ աշխարհի ամենակարևոր և այցելվող հնագիտական ​​վայրերը, որոնք տարեկան գրավում են միլիոնավոր զբոսաշրջիկների: Այն 1983 թվականին ճանաչվել է ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության օբյեկտ և համարվում է աշխարհի նոր յոթ հրաշալիքներից մեկը։\n\nՄաչու Պիկչուն նաև կարևոր է իր ինժեներական սխրանքներով, ներառյալ գյուղատնտեսական տեռասների կառուցումը, որոնք ցուցադրում են Ինկերի գյուղատնտեսության առաջադեմ տեխնիկան։ Ինկերն օգտագործում էին առանց շաղախի շինարարության բարդ մեթոդներ՝ հենվելով քարահատման և տեղադրման ճշգրիտ տեխնիկայի վրա, որը թույլ է տվել բազմաթիվ կառույցներին անձեռնմխելի մնալ դարեր շարունակ:\n\nԿայքը հասանելի է գնացքով կամ ոտքով տարբեր արշավային ուղիներով, օրինակ. որպես Ինկերի արահետ: Այն հայտնի վայր է զբոսաշրջիկների համար, ովքեր ցանկանում են զգալ ինչպես հարուստ մշակութային պատմությունը, այնպես էլ տարածաշրջանի բնական գեղեցկությունը»:"
            },
            {
              id: 7,
              imgSrc: img7,
              destTitle: "Ֆուջի լեռ",
              location: "Ճապոնիա",
              grade: "Սրբազան գագաթ",
              charges: "$250",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Ֆուջի լեռը՝ Ճապոնիայի ամենաբարձր գագաթը, ակտիվ հրաբուխ է և հոգևոր խորհրդանիշ, որը գրավում է ինչպես զբոսաշրջիկներին, այնպես էլ բնության սիրահարներին",
              paragraph:
                "Մաչու Պիկչուն հին ինկերի միջնաբերդ է, որը գտնվում է Պերուի Անդերի լեռներում: Այն կառուցվել է 15-րդ դարում Ինկերի կայսր Պաչակուտիի օրոք որպես թագավորական կալվածք և կրոնական վայր: Տեղանքը գտնվում է մոտավորապես 2430 մետր բարձրության վրա ( 7970 ոտնաչափ) ծովի մակարդակից՝ բացելով շրջակա լեռնաշղթաների և Ուռուբամբա գետի հիասքանչ տեսարանները։ ներքևում։\n\nՄաչու Պիկչուն հայտնի է իր ուշագրավ քարե ճարտարապետությամբ, ներառյալ տաճարները, հրապարակները, տեռասները և նեղ ճանապարհների բարդ ցանցը։ Արևի տաճարը և երեք պատուհանների սենյակը մնում է անորոշ, թեև ենթադրվում է, որ այն եղել է հոգևոր և ծիսական կենտրոն ինչպես նաև թագավորական նահանջը։\n\nՏեղը լքվել է 16-րդ դարում՝ իսպանացիների գրավման ժամանակ և հիմնականում մոռացվել է արտաքին աշխարհի կողմից մինչև այն վերագտնվել է ամերիկացի հետախույզ Հիրամ Բինգհեմի կողմից 1911 թվականին։ Այդ ժամանակից ի վեր Մաչու Պիկչուն դարձել է այն վայրերից մեկը։ աշխարհի ամենակարևոր և այցելվող հնագիտական ​​վայրերը, որոնք տարեկան գրավում են միլիոնավոր զբոսաշրջիկների: Այն 1983 թվականին ճանաչվել է ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության օբյեկտ և համարվում է աշխարհի նոր յոթ հրաշալիքներից մեկը։\n\nՄաչու Պիկչուն նաև կարևոր է իր ինժեներական սխրանքներով, ներառյալ գյուղատնտեսական տեռասների կառուցումը, որոնք ցուցադրում են Ինկերի գյուղատնտեսության առաջադեմ տեխնիկան։ Ինկերն օգտագործում էին առանց շաղախի շինարարության բարդ մեթոդներ՝ հենվելով քարահատման և տեղադրման ճշգրիտ տեխնիկայի վրա, որը թույլ է տվել բազմաթիվ կառույցներին անձեռնմխելի մնալ դարեր շարունակ:\n\nԿայքը հասանելի է գնացքով կամ ոտքով տարբեր արշավային ուղիներով, օրինակ. որպես Ինկերի արահետ: Այն հայտնի վայր է զբոսաշրջիկների համար, ովքեր ցանկանում են զգալ ինչպես հարուստ մշակութային պատմությունը, այնպես էլ տարածաշրջանի բնական գեղեցկությունը»:"
            },
            {
              id: 8,
              imgSrc: img8,
              destTitle: "Կոլիզեյ",
              location: "Իտալիա",
              grade: "Հնագույն ասպարեզ",
              charges: "$350",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Կոլիզեյը, հռոմեական խորհրդանշական ամֆիթատրոնը, վկայում է Հին Հռոմի վեհության մասին՝ հյուրընկալելով գլադիատորների մարտեր և մեծ դիտումներ",
              paragraph:
                "Մաչու Պիկչուն հին ինկերի միջնաբերդ է, որը գտնվում է Պերուի Անդերի լեռներում: Այն կառուցվել է 15-րդ դարում Ինկերի կայսր Պաչակուտիի օրոք որպես թագավորական կալվածք և կրոնական վայր: Տեղանքը գտնվում է մոտավորապես 2430 մետր բարձրության վրա ( 7970 ոտնաչափ) ծովի մակարդակից՝ բացելով շրջակա լեռնաշղթաների և Ուռուբամբա գետի հիասքանչ տեսարանները։ ներքևում։\n\nՄաչու Պիկչուն հայտնի է իր ուշագրավ քարե ճարտարապետությամբ, ներառյալ տաճարները, հրապարակները, տեռասները և նեղ ճանապարհների բարդ ցանցը։ Արևի տաճարը և երեք պատուհանների սենյակը մնում է անորոշ, թեև ենթադրվում է, որ այն եղել է հոգևոր և ծիսական կենտրոն ինչպես նաև թագավորական նահանջը։\n\nՏեղը լքվել է 16-րդ դարում՝ իսպանացիների գրավման ժամանակ և հիմնականում մոռացվել է արտաքին աշխարհի կողմից մինչև այն վերագտնվել է ամերիկացի հետախույզ Հիրամ Բինգհեմի կողմից 1911 թվականին։ Այդ ժամանակից ի վեր Մաչու Պիկչուն դարձել է այն վայրերից մեկը։ աշխարհի ամենակարևոր և այցելվող հնագիտական ​​վայրերը, որոնք տարեկան գրավում են միլիոնավոր զբոսաշրջիկների: Այն 1983 թվականին ճանաչվել է ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության օբյեկտ և համարվում է աշխարհի նոր յոթ հրաշալիքներից մեկը։\n\nՄաչու Պիկչուն նաև կարևոր է իր ինժեներական սխրանքներով, ներառյալ գյուղատնտեսական տեռասների կառուցումը, որոնք ցուցադրում են Ինկերի գյուղատնտեսության առաջադեմ տեխնիկան։ Ինկերն օգտագործում էին առանց շաղախի շինարարության բարդ մեթոդներ՝ հենվելով քարահատման և տեղադրման ճշգրիտ տեխնիկայի վրա, որը թույլ է տվել բազմաթիվ կառույցներին անձեռնմխելի մնալ դարեր շարունակ:\n\nԿայքը հասանելի է գնացքով կամ ոտքով տարբեր արշավային ուղիներով, օրինակ. որպես Ինկերի արահետ: Այն հայտնի վայր է զբոսաշրջիկների համար, ովքեր ցանկանում են զգալ ինչպես հարուստ մշակութային պատմությունը, այնպես էլ տարածաշրջանի բնական գեղեցկությունը»:"
            },
            {
              id: 9,
              imgSrc: img9,
              destTitle: "Ազատության արձան",
              location: "ԱՄՆ",
              grade: "Ազատության խորհրդանիշ",
              charges: "$150",
              book: "https://ticket.toureiffel.paris/en",
              hotels: [
                {
                  id: "1",
                  name: "Trident Nariman Point",
                  star: 5
                },
                {
                  id: "2",
                  name: "The Taj Mahal Tower, Mumbai",
                  star: 5
                },
                {
                  id: "3",
                  name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
                  star: 3
                },
                {
                  id: "4",
                  name: "JW Marriott Mumbai Sahar Airport",
                  star: 3
                },
                {
                  id: "5",
                  name: "The Leela Mumbai",
                  star: 1
                }
              ],
              description:
                "Ազատության արձանը, որը ժողովրդավարության և ազատության խորհրդանիշն է, ողջունում է Նյու Յորքի նավահանգիստ այցելուներին իր հոյակապ ներկայությամբ և հարուստ պատմությամբ",
              paragraph:
                "Մաչու Պիկչուն հին ինկերի միջնաբերդ է, որը գտնվում է Պերուի Անդերի լեռներում: Այն կառուցվել է 15-րդ դարում Ինկերի կայսր Պաչակուտիի օրոք որպես թագավորական կալվածք և կրոնական վայր: Տեղանքը գտնվում է մոտավորապես 2430 մետր բարձրության վրա ( 7970 ոտնաչափ) ծովի մակարդակից՝ բացելով շրջակա լեռնաշղթաների և Ուռուբամբա գետի հիասքանչ տեսարանները։ ներքևում։\n\nՄաչու Պիկչուն հայտնի է իր ուշագրավ քարե ճարտարապետությամբ, ներառյալ տաճարները, հրապարակները, տեռասները և նեղ ճանապարհների բարդ ցանցը։ Արևի տաճարը և երեք պատուհանների սենյակը մնում է անորոշ, թեև ենթադրվում է, որ այն եղել է հոգևոր և ծիսական կենտրոն ինչպես նաև թագավորական նահանջը։\n\nՏեղը լքվել է 16-րդ դարում՝ իսպանացիների գրավման ժամանակ և հիմնականում մոռացվել է արտաքին աշխարհի կողմից մինչև այն վերագտնվել է ամերիկացի հետախույզ Հիրամ Բինգհեմի կողմից 1911 թվականին։ Այդ ժամանակից ի վեր Մաչու Պիկչուն դարձել է այն վայրերից մեկը։ աշխարհի ամենակարևոր և այցելվող հնագիտական ​​վայրերը, որոնք տարեկան գրավում են միլիոնավոր զբոսաշրջիկների: Այն 1983 թվականին ճանաչվել է ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության օբյեկտ և համարվում է աշխարհի նոր յոթ հրաշալիքներից մեկը։\n\nՄաչու Պիկչուն նաև կարևոր է իր ինժեներական սխրանքներով, ներառյալ գյուղատնտեսական տեռասների կառուցումը, որոնք ցուցադրում են Ինկերի գյուղատնտեսության առաջադեմ տեխնիկան։ Ինկերն օգտագործում էին առանց շաղախի շինարարության բարդ մեթոդներ՝ հենվելով քարահատման և տեղադրման ճշգրիտ տեխնիկայի վրա, որը թույլ է տվել բազմաթիվ կառույցներին անձեռնմխելի մնալ դարեր շարունակ:\n\nԿայքը հասանելի է գնացքով կամ ոտքով տարբեր արշավային ուղիներով, օրինակ. որպես Ինկերի արահետ: Այն հայտնի վայր է զբոսաշրջիկների համար, ովքեր ցանկանում են զգալ ինչպես հարուստ մշակութային պատմությունը, այնպես էլ տարածաշրջանի բնական գեղեցկությունը»:"
            }
          ],
          title: "Ամենաայցելվող ուղղություններ",
          details: "Մանրամասներ",
          hotels: "Հյուրանոցներ",
          less: "Ավելի քիչ",
          more: "Ավելին"
        },
        footer: {
          smallTitle: "ԿԱՊ",
          bigTitle: "Ճամփորդիր մեզ հետ",
          enterEmail: "Մուտքագրեք էլփոստի հասցեն",
          send: "ՈՒՂԱՐԿԵԼ",
          title: "Ճամփորդություն",
          description:
            "Ճամփորդությունը մի վայրից մյուսը տեղափոխվելու ակտ է, սովորաբար հանգստի, բիզնեսի կամ հետախուզման նպատակով: Այն թույլ է տալիս մարդկանց զգալ նոր մշակույթներ, լանդշաֆտներ և ավանդույթներ՝ միաժամանակ ընդլայնելով իրենց հեռանկարները: Ճամփորդությունը կարող է լինել տարբեր ձևերով, ներառյալ ներքին կամ միջազգային ճանապարհորդությունները: , միայնակ արկածներ, ընտանեկան արձակուրդներ կամ գործնական ճանապարհորդություններ",
          agancy: "ՄԵՐ ԳՈՐԾԱԿԱԼՈՒԹՅՈՒՆ",
          agancyArr: [
            "Ծառայություններ",
            "Ապահովագրություն",
            "Գործակալություն",
            "Զբոսաշրջություն",
            "Վճարում"
          ],
          partners: "ԳՈՐԾԸՆԿԵՐՆԵՐ",
          partnersArr: [
            "Ամրագրումներ",
            "Վարձով մեքենաներ",
            "Հոսթել աշխարհ",
            "Տրիվագո",
            "Ճամփորդական խորհրդատու"
          ],
          last: "ՎԵՐՋԻՆ ԱՌԱՋԱՐԿ",
          lastArr: ["Լոնդոն", "Կալիֆորնիա", "Ինդոնեզիա", "Եվրոպա", "Հայաստան"],
          subOne: "ԼԱՎԱԳՈՒՅՆ ՃԱՆԱՊԱՐՀԱՅԻՆ ԿԱՅՔԻ ԹԵՄԱ",
          subTwo: "ՀԵՂԻՆԱԿԱՅԻՆ ԻՐԱՎՈՒՆՔԸ ՊԱՀՊԱՆՎԱԾ Է - ISRATECH 2025"
        }
      }
    }
  },
  lng: storedLanguage
});

export default i18n;
