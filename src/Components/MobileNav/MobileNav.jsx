import { useEffect } from 'react';
import './Mobilenav.scss'
import $ from 'jquery';
import { Link } from 'react-router-dom';


const MobileNav = () => {
    useEffect(() => {
        if ($('.menu-trigger').length) {
          $(".menu-trigger").on('click', function() {
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
          });
        }
    
        $('.scroll-to-section a[href*="#"]:not([href="#"])').on('click', function() {
          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              var width = $(window).width();
              if (width < 767) {
                $('.menu-trigger').removeClass('active');
                $('.header-area .nav').slideUp(200);
              }
              $('html,body').animate({
                scrollTop: (target.offset().top) - 80
              }, 700);
              return false;
            }
          }
        });
    
        const onScroll = (event) => {
          var scrollPos = $(document).scrollTop();
          $('.nav a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
            } else {
              currLink.removeClass("active");
            }
          });
        };
    
        $(document).ready(function() {
          $(document).on("scroll", onScroll);
    
          $('.scroll-to-section a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            $(document).off("scroll");
    
            $('.scroll-to-section a').each(function() {
              $(this).removeClass('active');
            });
            $(this).addClass('active');
    
            var target = this.hash,
              menu = target;
            target = $(this.hash);
            $('html, body').stop().animate({
              scrollTop: (target.offset().top) - 79
            }, 500, 'swing', function() {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
            });
          });
        });
    
        return () => {
          $(".menu-trigger").off('click');
          $('.scroll-to-section a[href*="#"]:not([href="#"])').off('click');
          $(document).off("scroll", onScroll);
        };
      }, []); 
  return (
    <div className='MobileNavMainWrapper'>
     {/* <!-- ***** Header Area Start ***** --> */}
  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="index.html" className="logo">
                        <img src="/Images/skillsbee-logo-name.png" alt="" />
                    </a>
                    {/* <!-- ***** Logo End ***** --> */}
    
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li className="scroll-to-section"><Link to='/' className="link active">Home</Link></li>
                      <li className="scroll-to-section"><Link to='/courses' className="link">Courses</Link></li>
                      <li className="scroll-to-section"><Link to='/about' className="link">About</Link></li>
                      <li className="scroll-to-section"><Link to='/blog' className="link">Blog</Link></li>
                      <li className="scroll-to-section"><Link to='/session' className="link">Session</Link></li>
                      <li className="scroll-to-section"><Link to='/contactus' className="link">Contact Us</Link></li>
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}
    </div>
  )
}

export default MobileNav
