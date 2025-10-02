// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "ABOUT",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "BLOG",
          description: "Welcome to our blog hub! Discover insights, tips, and stories! 📰📝",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-cv",
              title: "CV",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/cv/";
              },
            },{id: "dropdown-resume",
              title: "RESUME",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/resume/";
              },
            },{id: "nav-projects",
          title: "PROJECTS",
          description: "Welcome to my vibrant projects hub! 🗂️ Explore, create, inspire! 🚀👀",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-certificates",
              title: "CERTIFICATES",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/certificates/";
              },
            },{id: "dropdown-certifications",
              title: "CERTIFICATIONS",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/certifications/";
              },
            },{id: "post-boost-your-online-skills",
        
          title: "Boost Your Online Skills",
        
        description: "Enhance essential online skills: effectively surf, code, secure, and conquer various digital challenges.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post6/";
          
        },
      },{id: "post-directory-tree-printer",
        
          title: "Directory Tree Printer",
        
        description: "Prints directory tree structure, excluding hidden entries, with clear and formatted visualization output.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post5/";
          
        },
      },{id: "post-github-setup-and-encryption-guide",
        
          title: "GitHub Setup and Encryption Guide",
        
        description: "Step-by-step Markdown guide for GitHub setup and encryption using git-crypt in Linux, with emojis and clear structure. 🎉",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/post4/";
          
        },
      },{id: "post-steps-to-creating-a-readme",
        
          title: "Steps to Creating a README",
        
        description: "Guideline for creating a profesional REAME.md",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post3/";
          
        },
      },{id: "post-iris-flower-classifier-and-visualization-app",
        
          title: "Iris Flower Classifier and Visualization App",
        
        description: "This Streamlit app helps you predict the species of an Iris flower 💐 based on its measurements! 📏",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post2/";
          
        },
      },{id: "post-hello-world-in-python",
        
          title: "Hello World in Python",
        
        description: "How to write &quot;Hello World&quot; in Python",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post1/";
          
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
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-gradio-test",
          title: 'Gradio Test',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-anime-super-resolution-️",
          title: 'Anime Super Resolution 🖼️',
          description: "With background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-anime-super-resolution-️",
          title: 'Anime Super Resolution 🖼️',
          description: "With background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Anime-Super-Resolution/";
            },},{id: "projects-controlnet-image-generator-️",
          title: 'ControlNet Image Generator 🖌️',
          description: "ControlNet generates high-quality images based on human pose input.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ControlNet-Image-Generator/";
            },},{id: "projects-english-vietnamese-translation-model-built-with-tensorflow",
          title: 'English-Vietnamese Translation Model Built with TensorFlow 🔠',
          description: "Transformer-based English-to-Vietnamese translation model with interactive Gradio demo.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/En-Vi-Translatetion-Transformer-TensorFlow/";
            },},{id: "projects-ghibli-stable-diffusion-synthesis",
          title: 'Ghibli Stable Diffusion Synthesis 🎨',
          description: "Ghibli Fine-Tuned Stable Diffusion generates enchanting Studio Ghibli-style images.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Ghibli-Stable-Diffusion-Synthesis/";
            },},{id: "projects-license-plate-detector-ocr-️",
          title: 'License Plate Detector OCR🎟️',
          description: "Detect license plates and read text using computer vision and OCR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/License-Plate-Detector-OCR/";
            },},{id: "projects-slimface-efficient-face-recognition",
          title: 'SlimFace: Efficient Face Recognition 👦',
          description: "SlimFace: Efficient face recognition framework using transfer learning and customization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SlimFace/";
            },},{id: "projects-text2music-composer",
          title: 'Text2Music Composer 🎶',
          description: "Viet Glow-TTS transforms text into natural, high-quality Vietnamese speech.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Text2Music-Composer/";
            },},{id: "projects-text-to-video-ghibli-style-️",
          title: 'Text to Video Ghibli style 🎞️',
          description: "Ghibli‑style videos from text using fine‑tuned zeroscope model.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Text2Video-Ghibli-style/";
            },},{id: "projects-vietnamese-f5-tts-️-vi-f5-tts",
          title: 'Vietnamese F5-TTS🗣️ (Vi-F5-TTS)',
          description: "Vietnamese F5-TTS generates natural audio for voice applications using PyTorch.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Vi-F5-TTS/";
            },},{id: "projects-vietnamese-whisper-tiny-finetuning-️",
          title: 'Vietnamese Whisper Tiny finetuning 🎙️',
          description: "Fine-tuned Whisper Tiny for accurate, real-time Vietnamese speech recognition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Vi-Whisper-Tiny-finetuning/";
            },},{id: "projects-viet-glow-tts-finetuning",
          title: 'Viet Glow-TTS Finetuning 📢',
          description: "Viet Glow-TTS transforms text into natural, high-quality Vietnamese speech.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Viet-Glow-TTS-finetuning/";
            },},{id: "projects-viet-speecht5-tts-finetuning",
          title: 'Viet SpeechT5-TTS finetuning 🔈',
          description: "Vietnamese TTS model fine‑tuned, male/female voices, Gradio demo.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Viet-SpeechT5-TTS-finetuning/";
            },},{id: "projects-vietnamese-health-chat-lora-️",
          title: 'Vietnamese Health Chat LoRA ⚕️',
          description: "Vietnamese Health Chat LoRA provides accurate healthcare responses using AI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Vietnamese-Health-Chat-LoRA/";
            },},{id: "projects-vietnamese-news-classification-️",
          title: 'Vietnamese News Classification 🗞️',
          description: "Lightweight neural network classifies Vietnamese news into nine specific categories.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Vietnamese-News-Classification/";
            },},{id: "projects-bus-gps-real-time-visualization-️",
          title: '🚌 Bus GPS Real-time Visualization 🗺️',
          description: "Real-time bus tracking in Rio de Janeiro using Kafka and Flask.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bus-gps-real-time-visualization/";
            },},{id: "projects-grayscale2color-landscape-from-scratch",
          title: 'Grayscale2Color Landscape from scratch🌄',
          description: "AutoEncoder/U‑Net/Transformer colorizes grayscale landscapes via Lab* prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/grayscale2color-landscape-from-scratch/";
            },},{id: "projects-vietnamese-medical-mt5-finetune-question-and-answer-️",
          title: 'Vietnamese Medical mT5 Finetune Question and Answer 👨🏻‍⚕️',
          description: "Vietnamese medical QA system fine‑tuned mT5, low loss, strong performance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vi-medical-mt5-finetune-qa/";
            },},{id: "projects-vietnamese-nutrition-gpt2-finetune",
          title: 'Vietnamese Nutrition GPT2 Finetune 🍲',
          description: "Vietnamese Nutrition GPT-2: Fine-tuned, accurate, interactive nutrition guidance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vi-nutrition-gpt2-finetune/";
            },},{id: "projects-viet-news-summary-mt5-small-finetune",
          title: 'Viet News Summary mT5 Small Finetune 📰',
          description: "Fine‑tuned mt5‑small Vietnamese news summarizer, low loss, high BLEU.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/viet-news-sum-mt5-small-finetune/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6E%68%74%72%61%6E%32%6D%69%6E%64@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/danhtran2mind", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/danhtran2mind", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/danhtran2mind", "_blank");
        },
      },{
        id: 'social-huggingface_username',
        title: 'Huggingface_username',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/danhtran2mind", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/danhtran2mind", "_blank");
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
