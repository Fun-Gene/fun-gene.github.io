// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications categorized by year in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Team and alumni",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-code",
          title: "code",
          description: "We aim to open-source our research to foster transparency, collaboration, and reproducibility.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae of Professor Dr. Fan Liu. Click the PDF icon for more details.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Slides from some of my talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching materials",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-happy-new-year-sparkles-smile",
          title: 'Happy new year! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-md-masud-rana",
          title: 'Md. Masud Rana',
          description: "MSc student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ringku_msc/";
            },},{id: "projects-md-masud-rana",
          title: 'Md. Masud Rana',
          description: "MSc student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ringku_msc_alm/";
            },},{id: "projects-md-masud-rana",
          title: 'Md. Masud Rana',
          description: "PhD student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ringku_phd/";
            },},{id: "projects-md-masud-rana",
          title: 'Md. Masud Rana',
          description: "PhD student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ringku_phd_alm/";
            },},{id: "projects-tao-xiangming",
          title: 'Tao Xiangming',
          description: "PhD student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tao_phd_alm/";
            },},{id: "teaching-genetic-epidemiology",
          title: 'Genetic Epidemiology',
          description: "Genetic epidemiology is a multidisciplinary field that combines principles from Genetics, Epidemiology, Biostatistics and Molecular biology. Focus Areas:   Study the role of genetic factors and their interaction with environmental factors in the occurrence and distribution of diseases within populations.  Identify genetic variations that influence disease risk and progression.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/big_teaching/";
            },},{id: "teaching-population-genetics",
          title: 'Population Genetics',
          description: "Population genetics is the branch of genetics that studies the distribution and changes in the frequency of alleles (variants of a gene) within populations. It combines principles of genetics, evolution, and statistics to understand how genetic variation evolves and is maintained in populations over time.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/big_teaching2/";
            },},{id: "teaching-forensic-genetics",
          title: 'Forensic Genetics',
          description: "Forensic genetics is a branch of genetics that applies genetic principles and techniques to legal and criminal investigations. It focuses on analyzing DNA to identify individuals, establish biological relationships, and provide evidence in criminal cases. Forensic genetics plays a crucial role in modern legal systems by ensuring accurate and reliable identification based on genetic evidence.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/nassu_teaching/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%6C%69%75@%6E%61%75%73%73.%65%64%75.%73%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Fun-Gene", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9241-8161", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pLS4rI8AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=56342354400", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
