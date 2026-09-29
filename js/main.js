/**
 * ROYAL TECH — Main Vanilla JavaScript
 * Clean, Modular, Dependency-free Logic
 * Features:
 *   - Mobile Menu Navigation & ARIA handling
 *   - Fixed Navbar Scrolled State
 *   - Smooth Scroll & Active Nav Spy
 *   - Portfolio Category Filtering
 *   - Case Study Modal Manager & Pre-fill
 *   - Contact Form Validation & Dual Submission (Web + WhatsApp)
 *   - Back-to-Top Button
 *   - Scroll Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // =========================================================================
    // 01. Case Studies Data Store
    // =========================================================================
    const projectData = {
        p1: {
            title: "Arabian Mandi & Grill House",
            subtitle: "Restaurant & Takeout Ordering System",
            category: "Restaurant E-Commerce",
            projectType: "Client Project",
            typeClass: "badge-client",
            image: "assets/projects/mandi-house.png",
            challenge: "The restaurant was experiencing customer friction during peak dinner hours due to heavy PDF menus and busy phone lines, leading to lost takeout orders and delivery confusion.",
            solution: "We engineered a mobile-first online menu and ordering platform featuring interactive dish variations, portion sizing, table reservation requests, and direct 1-tap WhatsApp checkout.",
            features: [
                "Interactive visual food menu with portion & spice level selectors",
                "Table reservation module with date, time, and guest count verification",
                "Automated WhatsApp order formulation with itemized pricing",
                "Frictionless mobile layout with zero app download required"
            ],
            technologies: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JavaScript"],
            outcome: "Streamlined peak-hour takeout orders, eliminated phone call bottlenecks, and created a direct repeat-customer channel via WhatsApp."
        },
        p2: {
            title: "Bunavat Luxury Pret Store",
            subtitle: "Eastern Festive Fashion E-Commerce",
            category: "Fashion E-Commerce",
            projectType: "Client Project",
            typeClass: "badge-client",
            image: "assets/projects/bunavat.png",
            challenge: "An eastern pret fashion boutique needed a digital storefront that reflected garment quality, provided clear size guides, and allowed customers to order quickly without drop-offs at complex payment gateways.",
            solution: "Designed and built an elegant dark-gold accented e-commerce store with high-resolution lookbooks, fabric attribute filtering, interactive cart drawer, and hybrid WhatsApp order completion.",
            features: [
                "Garment detail zoom and lookbook photo preview",
                "Filter by fabric, collection, and size attributes",
                "Interactive dynamic shopping cart with persistent storage",
                "Direct WhatsApp sales desk connection for customer inquiries and orders"
            ],
            technologies: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JavaScript"],
            outcome: "Elevated the boutique's digital brand presence and significantly boosted order inquiries through instant WhatsApp checkout."
        },
        p3: {
            title: "RYK City Housing Scheme Portal",
            subtitle: "Residential Community & Property Showcase",
            category: "Real Estate Portal",
            projectType: "Client Project",
            typeClass: "badge-client",
            image: "assets/projects/ryk-city.jpg",
            challenge: "Prospective home buyers and overseas investors struggled to view complex installment payment schedules, sector masterplans, and on-ground development progress transparently.",
            solution: "Developed a modern real estate web platform featuring sector-by-sector breakdowns, interactive plot installment calculators, photo galleries, and instant WhatsApp inquiry routing to sales representatives.",
            features: [
                "Interactive residential and commercial plot specification cards",
                "Installment schedule estimator with payment milestones",
                "High-resolution infrastructure gallery and aerial photo showcase",
                "Direct buyer lead capture form routed directly to property consultants"
            ],
            technologies: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JavaScript"],
            outcome: "Established investor credibility, enhanced brand transparency, and streamlined daily sales inquiries for the housing scheme."
        },
        p4: {
            title: "Aura Operations & Admin Dashboard",
            subtitle: "Business ERP & Management System",
            category: "Admin Dashboard",
            projectType: "Personal / Concept Project",
            typeClass: "badge-personal",
            image: "assets/projects/admin-panel.jpg",
            challenge: "Small and medium business operators often struggle with fragmented spreadsheets, delayed operational insights, and lack of central visibility over incoming orders and stock.",
            solution: "Architected a modular administrative dashboard with responsive sidebar navigation, real-time KPI stat cards, interactive sales charts, and clean tabular data management.",
            features: [
                "Real-time operational KPI stat cards (Revenue, Orders, Active Customers)",
                "Tabular order management with status filters (Pending, Shipped, Completed)",
                "Customer database records with search and quick actions",
                "Responsive drawer navigation optimized for desktop and mobile tablets"
            ],
            technologies: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JavaScript"],
            outcome: "Demonstrates scalable architecture and clean user experience for companies requiring tailored internal business software."
        },
        p5: {
            title: "QuickOrder WhatsApp Commerce Engine",
            subtitle: "Frictionless Mobile Ordering Web App",
            category: "WhatsApp Commerce",
            projectType: "Personal / Concept Project",
            typeClass: "badge-personal",
            image: "assets/projects/whatsapp-ordering.jpg",
            challenge: "Traditional e-commerce checkout flows require account creation, billing addresses, and payment gateways that cause high abandonment on mobile devices.",
            solution: "Engineered an ultra-lean product catalog that compiles ordered items, customer delivery details, and order totals into a structured, pre-formatted WhatsApp chat message.",
            features: [
                "Dynamic cart calculation with quantity increment controls",
                "Automated WhatsApp message generator with itemized line items",
                "Zero password, registration, or login friction for buyers",
                "Fast loading speed on 3G, 4G, and 5G mobile connections"
            ],
            technologies: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JavaScript"],
            outcome: "Showcases an optimized ordering mechanism specifically designed for regions where WhatsApp is the dominant communication and commerce channel."
        },
        p6: {
            title: "Lumina Timepiece Boutique",
            subtitle: "Luxury Swiss Precision Timepieces",
            category: "Luxury E-Commerce",
            projectType: "Personal / Concept Project",
            typeClass: "badge-personal",
            image: "assets/projects/watch-store.jpg",
            challenge: "High-ticket luxury watches require meticulous attention to technical specifications: sapphire crystal ratings, movement precision, and a trustworthy shopping atmosphere.",
            solution: "Designed and implemented a bespoke dark aesthetic with royal navy backgrounds, subtle gold typography accents, filterable watch catalogs, and dedicated concierge consultation channels.",
            features: [
                "Chronograph technical specification sheet (movement, caliber, crystal)",
                "Attribute filtering by collection, movement, and case materials",
                "VIP concierge inquiry booking for private viewings",
                "Premium dark-navy and gold visual styling with smooth micro-interactions"
            ],
            technologies: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JavaScript"],
            outcome: "Demonstrates high-fidelity luxury UI/UX craftsmanship and conversion design for high-value retail brands."
        }
    };

    // =========================================================================
    // 02. Mobile Navigation Toggle & Accessible Controls
    // =========================================================================
    const mobileToggle = document.getElementById('mobile-toggle-btn');
    const navLinks = document.getElementById('nav-links-menu');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (isOpen) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // =========================================================================
    // 03. Smooth Scrolling for Anchor Links & Auto-close Mobile Menu
    // =========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if currently open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileToggle) {
                        mobileToggle.setAttribute('aria-expanded', 'false');
                        const icon = mobileToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-xmark');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            }
        });
    });

    // =========================================================================
    // 04. Sticky Navbar Scrolled State & ScrollSpy
    // =========================================================================
    const navbar = document.getElementById('main-nav');
    const navItems = document.querySelectorAll('.nav-links .nav-item-link');
    const sections = document.querySelectorAll('section[id], header[id]');

    function handleScroll() {
        const scrollPosition = window.scrollY;

        // Navbar background blur/shrink
        if (navbar) {
            if (scrollPosition > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Active link highlight (ScrollSpy)
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }

        // Back to top button visibility
        const backToTopBtn = document.getElementById('back-to-top-btn');
        if (backToTopBtn) {
            if (scrollPosition > 350) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // =========================================================================
    // 05. Back to Top Button
    // =========================================================================
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =========================================================================
    // 06. Projects Category Filtering
    // =========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category') || '';
                const categoryList = categories.split(' ');

                if (filterValue === 'all' || categoryList.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 20);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    // =========================================================================
    // 07. Case Study Modal Manager
    // =========================================================================
    const caseStudyModalElement = document.getElementById('caseStudyModal');
    let caseStudyModal = null;

    if (caseStudyModalElement && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        caseStudyModal = new bootstrap.Modal(caseStudyModalElement);
    }

    const openModalButtons = document.querySelectorAll('.open-case-study');
    openModalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = button.getAttribute('data-project');
            const data = projectData[projectId];

            if (data && caseStudyModal) {
                // Populate modal content
                const modalTitle = document.getElementById('modalTitle');
                const modalSubtitle = document.getElementById('modalSubtitle');
                const modalImage = document.getElementById('modalImage');
                const modalTypeBadge = document.getElementById('modalTypeBadge');
                const modalCategoryBadge = document.getElementById('modalCategoryBadge');
                const modalChallenge = document.getElementById('modalChallenge');
                const modalSolution = document.getElementById('modalSolution');
                const modalFeatures = document.getElementById('modalFeatures');
                const modalTechTags = document.getElementById('modalTechTags');
                const modalOutcome = document.getElementById('modalOutcome');

                if (modalTitle) modalTitle.textContent = data.title;
                if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
                if (modalImage) {
                    modalImage.src = data.image;
                    modalImage.alt = `${data.title} screenshot`;
                }

                if (modalTypeBadge) {
                    modalTypeBadge.textContent = data.projectType;
                    modalTypeBadge.className = `badge ${data.typeClass}`;
                }

                if (modalCategoryBadge) {
                    modalCategoryBadge.textContent = data.category;
                }

                if (modalChallenge) modalChallenge.textContent = data.challenge;
                if (modalSolution) modalSolution.textContent = data.solution;
                if (modalOutcome) modalOutcome.textContent = data.outcome;

                // Features list
                if (modalFeatures) {
                    modalFeatures.innerHTML = '';
                    data.features.forEach(feature => {
                        const li = document.createElement('li');
                        li.innerHTML = `<i class="fa-solid fa-circle-check" aria-hidden="true"></i> ${feature}`;
                        modalFeatures.appendChild(li);
                    });
                }

                // Tech tags
                if (modalTechTags) {
                    modalTechTags.innerHTML = '';
                    data.technologies.forEach(tech => {
                        const span = document.createElement('span');
                        span.className = 'tech-tag';
                        span.textContent = tech;
                        modalTechTags.appendChild(span);
                    });
                }

                // Setup "Start Similar Project" CTA inside modal
                const modalCtaBtn = document.getElementById('modalCtaBtn');
                if (modalCtaBtn) {
                    modalCtaBtn.onclick = function (evt) {
                        evt.preventDefault();
                        caseStudyModal.hide();
                        const contactSection = document.getElementById('contact');
                        const projectTypeSelect = document.getElementById('client-project-type');

                        if (projectTypeSelect) {
                            if (data.category.includes('E-Commerce')) {
                                projectTypeSelect.value = 'E-Commerce Solutions';
                            } else if (data.category.includes('Admin')) {
                                projectTypeSelect.value = 'Custom Admin Panel';
                            } else if (data.category.includes('WhatsApp')) {
                                projectTypeSelect.value = 'WhatsApp Business Solution';
                            } else {
                                projectTypeSelect.value = 'Web Development';
                            }
                        }

                        if (contactSection) {
                            setTimeout(() => {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }, 300);
                        }
                    };
                }

                caseStudyModal.show();
            }
        });
    });

    // =========================================================================
    // 08. Contact Form Validation & Dual Submission (Web + WhatsApp)
    // =========================================================================
    const contactForm = document.getElementById('project-contact-form');
    const whatsappSubmitBtn = document.getElementById('whatsapp-submit-btn');
    const formStatusAlert = document.getElementById('form-status-alert');

    const royalWhatsAppPhone = "923030937957"; // Royal Tech official WhatsApp

    function validateField(field, errorElementId) {
        const errorElement = document.getElementById(errorElementId);
        const formGroup = field.closest('.form-group');

        if (!field.value.trim()) {
            if (formGroup) formGroup.classList.add('has-error');
            return false;
        }

        // Email regex check
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value.trim())) {
                if (formGroup) formGroup.classList.add('has-error');
                return false;
            }
        }

        if (formGroup) formGroup.classList.remove('has-error');
        return true;
    }

    function validateForm() {
        const nameField = document.getElementById('client-name');
        const emailField = document.getElementById('client-email');
        const projectTypeField = document.getElementById('client-project-type');
        const messageField = document.getElementById('client-message');

        const isNameValid = validateField(nameField, 'name-error');
        const isEmailValid = validateField(emailField, 'email-error');
        const isTypeValid = validateField(projectTypeField, 'project-type-error');
        const isMessageValid = validateField(messageField, 'message-error');

        return isNameValid && isEmailValid && isTypeValid && isMessageValid;
    }

    // Real-time input clearing of error states
    ['client-name', 'client-email', 'client-project-type', 'client-message'].forEach(id => {
        const field = document.getElementById(id);
        if (field) {
            field.addEventListener('input', () => {
                const formGroup = field.closest('.form-group');
                if (formGroup && field.value.trim()) {
                    formGroup.classList.remove('has-error');
                }
            });
            field.addEventListener('change', () => {
                const formGroup = field.closest('.form-group');
                if (formGroup && field.value.trim()) {
                    formGroup.classList.remove('has-error');
                }
            });
        }
    });

    // Form Submission: Web Form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!validateForm()) {
                if (formStatusAlert) {
                    formStatusAlert.className = 'form-status-alert error';
                    formStatusAlert.textContent = 'Please fill out all required fields marked with an asterisk (*).';
                    formStatusAlert.style.display = 'block';
                }
                return;
            }

            const name = document.getElementById('client-name').value.trim();
            const projectType = document.getElementById('client-project-type').value;

            // Display confirmed receipt message
            if (formStatusAlert) {
                formStatusAlert.className = 'form-status-alert success';
                formStatusAlert.innerHTML = `
                    <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                    <strong>Thank you, ${name}!</strong> Your inquiry for <em>${projectType}</em> has been prepared. For fastest response, you can also send this directly via WhatsApp using the button below.
                `;
                formStatusAlert.style.display = 'block';
            }

            contactForm.reset();
        });
    }

    // Form Submission: Direct WhatsApp Message Generator
    if (whatsappSubmitBtn) {
        whatsappSubmitBtn.addEventListener('click', () => {
            const nameField = document.getElementById('client-name');
            const emailField = document.getElementById('client-email');
            const phoneField = document.getElementById('client-phone');
            const businessField = document.getElementById('client-business');
            const projectTypeField = document.getElementById('client-project-type');
            const messageField = document.getElementById('client-message');

            const name = nameField ? nameField.value.trim() : '';
            const email = emailField ? emailField.value.trim() : '';
            const phone = phoneField ? phoneField.value.trim() : 'Not specified';
            const business = businessField && businessField.value.trim() ? businessField.value.trim() : 'Not specified';
            const projectType = projectTypeField && projectTypeField.value ? projectTypeField.value : 'General Inquiry';
            const message = messageField ? messageField.value.trim() : '';

            if (!name || !message) {
                if (formStatusAlert) {
                    formStatusAlert.className = 'form-status-alert error';
                    formStatusAlert.textContent = 'Please provide at least your Name and brief Project Details to start the WhatsApp chat.';
                    formStatusAlert.style.display = 'block';
                }
                if (!name && nameField) nameField.focus();
                else if (!message && messageField) messageField.focus();
                return;
            }

            // Construct structured pre-filled message
            const whatsappText =
                `*New Project Inquiry — Royal Tech*\n\n` +
                `*Name:* ${name}\n` +
                `*Email:* ${email || 'Not specified'}\n` +
                `*Phone / WhatsApp:* ${phone}\n` +
                `*Business Name:* ${business}\n` +
                `*Project Type:* ${projectType}\n\n` +
                `*Project Requirements:*\n${message}\n\n` +
                `Looking forward to discussing this project with Royal Tech.`;

            const encodedText = encodeURIComponent(whatsappText);
            const whatsappUrl = `https://wa.me/${royalWhatsAppPhone}?text=${encodedText}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

            if (formStatusAlert) {
                formStatusAlert.className = 'form-status-alert success';
                formStatusAlert.textContent = 'Opening WhatsApp with your pre-filled inquiry...';
                formStatusAlert.style.display = 'block';
            }
        });
    }

    // =========================================================================
    // 09. Scroll Reveal Animations (IntersectionObserver)
    // =========================================================================
    const revealTargets = document.querySelectorAll(
        '.section-header, .about-content, .service-card, .project-card, .tech-card, .feature-item, .trust-box, .cta-inner-card, .contact-content'
    );

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealTargets.forEach(target => {
            target.classList.add('reveal-hidden');
            revealObserver.observe(target);
        });
    } else {
        // Fallback for older browsers
        revealTargets.forEach(target => target.classList.add('revealed'));
    }
});
