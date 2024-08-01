
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.querySelector('.hamburger-icon').classList.toggle('hide');
        hamburger.querySelector('.cross-icon').classList.toggle('show');
    });

    // Form Validation for Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
            const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
            const phone = contactForm.querySelector('input[placeholder="Your Phone"]').value;
            const message = contactForm.querySelector('textarea').value;

            let isValid = true;
            let errorMessage = '';

            if (!name || !email || !phone || !message) {
                isValid = false;
                errorMessage += 'Please fill out all fields.\n';
            }

            if (!isValid) {
                alert(errorMessage);
                return;
            }

            // You can send the form data to your server here
            alert('Thank you for your message!');

            // Reset form
            contactForm.reset();
        });
    }
    
    // Form Validation for Feedback Form (if you have a feedback form)
    const feedbackForm = document.querySelector('.feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const feedbackName = feedbackForm.querySelector('input[placeholder="Your Name"]').value;
            const feedbackEmail = feedbackForm.querySelector('input[placeholder="Your Email"]').value;
            const feedbackMessage = feedbackForm.querySelector('textarea').value;

            let isValid = true;
            let errorMessage = '';

            if (!feedbackName || !feedbackEmail || !feedbackMessage) {
                isValid = false;
                errorMessage += 'Please fill out all fields.\n';
            }

            if (!isValid) {
                alert(errorMessage);
                return;
            }

            // You can send the feedback data to your server here
            alert('Thank you for your feedback!');

            // Reset form
            feedbackForm.reset();
        });
    }

    // Update Footer Social Links
    document.querySelector('.footer .footer-menu-list .footer-list-items a[href="#github"]').setAttribute('href', 'https://github.com/priyanshu123yd');
    document.querySelector('.footer .footer-menu-list .footer-list-items a[href="#twitter"]').setAttribute('href', 'https://twitter.com/your-profile');
    document.querySelector('.footer .footer-menu-list .footer-list-items a[href="#instagram"]').setAttribute('href', 'https://www.instagram.com/your-profile');
    document.querySelector('.footer .footer-menu-list .footer-list-items a[href="#linkedin"]').setAttribute('href', 'https://www.linkedin.com/in/your-profile');
});
document.addEventListener('DOMContentLoaded', () => {
    const hireMeBtn = document.getElementById('hireMeBtn');
    const getResumeBtn = document.getElementById('getResumeBtn');

    hireMeBtn.addEventListener('click', () => {
        // Open a new tab with the "Hire Me" interface
        window.open('https://example.com/hire-me', '_blank');
    });

    getResumeBtn.addEventListener('click', () => {
        // Open a new tab with the resume
        window.open('resume.jpg','_blank');
    });
});
// JavaScript to make social media links functional
document.addEventListener("DOMContentLoaded", function() {
    // Social media URLs
    const socialMediaLinks = {
        Github: 'https://github.com/priyanshu123yd',  
        twitter: 'https://x.com/priyanshuy41628?t=0xFpSzZlLVLA-ewFBuhohg&s=09',       
        instagram: 'https://www.instagram.com/priyanshu_yadav.28?igsh=MWxhaXFpeXU3ZjJmdA==', 
        linkedin: 'https://www.linkedin.com/in/priyanshu-yadav-126760232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    };

    // Select social media link elements
    const GithubLink = document.querySelector('a[aria-label="Github"]');
    const twitterLink = document.querySelector('a[aria-label="Twitter"]');
    const instagramLink = document.querySelector('a[aria-label="Instagram"]');
    const linkedinLink = document.querySelector('a[aria-label="LinkedIn"]');

    // Set href attributes to the actual URLs
    if (GithubLink) GithubLink.href = socialMediaLinks.Github;
    if (twitterLink) twitterLink.href = socialMediaLinks.twitter;
    if (instagramLink) instagramLink.href = socialMediaLinks.instagram;
    if (linkedinLink) linkedinLink.href = socialMediaLinks.linkedin;
});
