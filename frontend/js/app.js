const menuIcon = document.getElementById('menu-toggle');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  openIcon.style.display = openIcon.style.display === 'none' ? 'inline' : 'none';
  closeIcon.style.display = closeIcon.style.display === 'inline' ? 'none' : 'inline';
});

  // Function to check if an element is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Apply the 'visible' class to make elements fade in
  function fadeInOnScroll() {
    const elements = document.querySelectorAll('*');  // Apply to all elements on the page

    elements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('visible');
      }
    });
  }

  // Trigger the function on scroll
  window.addEventListener('scroll', fadeInOnScroll);

  // Run it initially in case elements are already in view
  fadeInOnScroll();


  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('active');

      // Optional: close others
      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
    });
  });

/*    
    .hamburger {
      display: none;
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 99;
      font-size: 1.5rem;
      color: white;
      background-color: #292929;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    aside {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 200px;
      padding: 20px;
      background-color: #292929;
      overflow: hidden;
      transition: transform 0.3s ease-in-out;
      z-index: 9;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    aside nav ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0;
      margin: 0;
    }

    aside nav ul li {
      display: flex;
      align-items: center;
      gap: 10px;
      list-style: none;
      background-color: #7c7c7c;
      padding: 15px;
      width: 180px;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }

    aside nav ul li a,
    aside nav ul li {
      color: white;
      text-decoration: none;
    }

    aside nav ul li:hover {
      background-color: #5a5959;
    }

    .fab {
      color: #fff;
      font-size: 1.5rem;
      margin: 0 10px;
    }

    main.dashboard {
      min-height: 100vh;
      background-color: black;
    
    }

    .welcome {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: linear-gradient(to bottom right, #fffafc, #fce4ec);
      padding: 20px 14px;



    }

    .welcome-header {
      text-align: center;
    }

    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    .card {
      flex: 1 1 200px;
      background-color: #fff1f3;
      padding: 20px;
      border-radius: 10px;
      color: #b13b5f;
      font-weight: bold;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    section h2 {
      margin-top: 40px;
      color: #333;
    }

    .child-card {
      background-color: #ffe8e8;
      padding: 15px;
      border-radius: 10px;
      margin: 10px 0;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }

    .recent-activity ul,
    .notifications p {
      background: #fff;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      padding-left: 20px;
    }

    .recent-activity ul li {
      margin-bottom: 8px;
      color: #555;
    }

    .add-child {
      padding: 10px;
      background-color: #fcd7d7;
      border-radius: 10px;
      margin: 10px 0;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 200px;
      border: none;
      transition: all 0.3s ease;
    }

    .add-child:hover {
      background-color: #fff1f3;
      color: #b13b5f;
      cursor: pointer;
    }

    /* Responsive */
    /* @media (max-width: 768px) {
      .hamburger {
        display: block;
      }

      aside {
        transform: translateX(-100%);
        width: 200px;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
      }

      aside.show {
        transform: translateX(0);
      }

      main.dashboard {
        margin-left: 0;
        margin-top: 80px;
        padding: 20px;
      }

      .profile {
        display: none;
      }
    }  * */