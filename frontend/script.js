// OPEN WEBSITE FROM HOME

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// =================================
// CONTACT FORM
// =================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', async (e) => {

        e.preventDefault();

        const contactData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {

            const response = await fetch('https://my-portfolio-9m51.onrender.com/api/contact', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(contactData)
            });

            const result = await response.json();

            if (response.ok) {

                alert('Message sent successfully!');
                contactForm.reset();

            } else {

                alert(result.message);

            }

        } catch (error) {

            alert('Something went wrong!');
            console.log(error);

        }

    });

}


// =================================
// SCROLL ANIMATIONS
// =================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

});

const sections = document.querySelectorAll(
    '.about, .skills, .projects, .contact'
);

sections.forEach((section) => {

    observer.observe(section);

});


// =================================
// WELCOME POPUP
// =================================

const avatar = document.getElementById('avatar');

const welcomePopup = document.getElementById('welcomePopup');

const closePopup = document.getElementById('closePopup');

const welcomeBtn = document.getElementById('welcomeBtn');


if (avatar && welcomePopup && closePopup && welcomeBtn) {

    avatar.addEventListener('click', () => {

        welcomePopup.style.display = 'flex';

    });


    closePopup.addEventListener('click', () => {

        welcomePopup.style.display = 'none';

    });


    welcomeBtn.addEventListener('click', () => {

        welcomePopup.style.display = 'none';

    });


    welcomePopup.addEventListener('click', (e) => {

        if (e.target === welcomePopup) {

            welcomePopup.style.display = 'none';

        }

    });

}


// =================================
// PRELOADER
// =================================

window.addEventListener('load', () => {

    const preloader = document.getElementById('preloader');

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add('hide');

        }, 1500);

    }

});