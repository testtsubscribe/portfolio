// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const lightMode = document.getElementById('light-mode');
    const darkMode = document.getElementById('dark-mode');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set the correct radio button
    if (savedTheme === 'dark') {
        darkMode.checked = true;
    } else {
        lightMode.checked = true;
    }
    
    // Theme change event listeners
    lightMode.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
    
    darkMode.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'var(--header-bg)';
            header.style.boxShadow = '0 5px 20px var(--shadow)';
        } else {
            header.style.background = 'var(--header-bg)';
            header.style.boxShadow = '0 2px 15px var(--shadow)';
        }
        
        // Update scroll progress
        updateScrollProgress();
    });
    
    // Scroll progress indicator
    function updateScrollProgress() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const trackLength = docHeight - winHeight;
        const progress = (scrollTop / trackLength) * 100;
        
        document.querySelector('.scroll-progress').style.width = progress + '%';
    }
    
    // Create scroll progress element
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    // Intersection Observer for section animations
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate child elements with delays
                if (entry.target.id === 'skills') {
                    animateSkills();
                } else if (entry.target.id === 'projects') {
                    animateProjects();
                } else if (entry.target.id === 'contact') {
                    animateContactLinks();
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all sections except hero
    document.querySelectorAll('.section:not(#hero)').forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Animate skills with staggered delay
    function animateSkills() {
        const skills = document.querySelectorAll('.skill');
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.add('active');
            }, index * 150);
        });
    }
    
    // Animate projects with staggered delay
    function animateProjects() {
        const projects = document.querySelectorAll('.project');
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.add('active');
            }, index * 200);
        });
    }
    
    // Animate contact links with staggered delay
    function animateContactLinks() {
        const contactLinks = document.querySelectorAll('.contact-links a');
        contactLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('active');
            }, index * 150);
        });
    }
    
    // Initialize - make hero section visible immediately
    document.getElementById('hero').classList.add('active');
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});
