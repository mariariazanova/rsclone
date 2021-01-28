import './temp3.scss'
import image1 from '../images/Images/templates3/working-girl.png'
const template3 = ` <!-- MENU BAR -->
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="index.html">
          <i class="fa fa-line-chart"></i>
          Digital Trend
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="#about" class="nav-link smoothScroll">Studio</a>
                </li>
                <li class="nav-item">
                    <a href="#project" class="nav-link smoothScroll">Our Works</a>
                </li>
                <li class="nav-item">
                    <a href="blog.html" class="nav-link">Blog</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html" class="nav-link contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


 <!-- HERO -->
 <section class="hero hero-bg d-flex justify-content-center align-items-center">
           <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                          <div class="hero-text">

                               <h1 class="text-white" data-aos="fade-up">We are ready for your digital marketing</h1>

                               <a href="contact.html" class="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay="100">Let us discuss together!</a>

                               <strong class="d-block py-3 pl-5 text-white" data-aos="fade-up" data-aos-delay="200"><i class="fa fa-phone mr-2"></i> +99 080 070 4224</strong>
                          </div>
                    </div>

                    <div class="col-lg-6 col-12">
                      <div class="hero-image" data-aos="fade-up" data-aos-delay="300">

                        <img src=${image1} class="img-fluid" alt="working girl">
                      </div>
                    </div>

                </div>
           </div>
 </section>


 <!-- ABOUT -->
 <section class="about section-padding pb-0" id="about">
      <div class="container">
           <div class="row">

                <div class="col-lg-7 mx-auto col-md-10 col-12">
                     <div class="about-info">

                          <h2 class="mb-4" data-aos="fade-up">the best <strong>Digital Marketing agency</strong> in Rio de Janeiro</h2>

                          <p class="mb-0" data-aos="fade-up">Total 5 HTML pages are included in this template from TemplateMo website. Please check 2 <a href="blog.html">blog</a> pages, <a href="project-detail.html">project</a> page, and <a href="contact.html">contact</a> page. 
                          <br><br>You are <strong>allowed</strong> to use this template for commercial or non-commercial purpose. You are NOT allowed to redistribute the template ZIP file on template collection websites.</p>
                     </div>

                     <div class="about-image" data-aos="fade-up" data-aos-delay="200">

                      <img src="images/office.png" class="img-fluid" alt="office">
                    </div>
                </div>

           </div>
      </div>
 </section>


 <!-- PROJECT -->
 <section class="project section-padding" id="project">
      <div class="container-fluid">
           <div class="row">

                <div class="col-lg-12 col-12">

                    <h2 class="mb-5 text-center" data-aos="fade-up">
                        Please take a look through our
                        <strong>featured Digital Trends</strong>
                    </h2>

                     <div class="owl-carousel owl-theme" id="project-slide">
                          <div class="item project-wrapper" data-aos="fade-up" data-aos-delay="100">
                               <img src="images/project/project-image01.jpg" class="img-fluid" alt="project image">

                               <div class="project-info">
                                    <small>Marketing</small>

                                    <h3>
                                         <a href="project-detail.html">
                                              <span>Sweet Go Agency</span>
                                              <i class="fa fa-angle-right project-icon"></i>
                                         </a>
                                    </h3>
                               </div>
                          </div>

                          <div class="item project-wrapper" data-aos="fade-up">
                               <img src="images/project/project-image02.jpg" class="img-fluid" alt="project image">

                               <div class="project-info">
                                    <small>Website</small>

                                    <h3>
                                         <a href="project-detail.html">
                                              <span>Smart Ladies</span>
                                              <i class="fa fa-angle-right project-icon"></i>
                                         </a>
                                    </h3>
                               </div>
                          </div>

                          <div class="item project-wrapper" data-aos="fade-up">
                               <img src="images/project/project-image03.jpg" class="img-fluid" alt="project image">

                               <div class="project-info">
                                    <small>Branding</small>

                                    <h3>
                                         <a href="project-detail.html">
                                              <span>Shoes factory</span>
                                              <i class="fa fa-angle-right project-icon"></i>
                                         </a>
                                    </h3>
                               </div>
                          </div>

                          <div class="item project-wrapper" data-aos="fade-up">
                               <img src="images/project/project-image04.jpg" class="img-fluid" alt="project image">

                               <div class="project-info">
                                    <small>Social Media</small>

                                    <h3>
                                         <a href="project-detail.html">
                                              <span>Race Bicycle</span>
                                              <i class="fa fa-angle-right project-icon"></i>
                                         </a>
                                    </h3>
                               </div>
                          </div>

                          <div class="item project-wrapper" data-aos="fade-up">
                               <img src="images/project/project-image05.jpg" class="img-fluid" alt="project image">

                               <div class="project-info">
                                    <small>Video</small>

                                    <h3>
                                         <a href="project-detail.html">
                                              <span>Ultimate HealthCare</span>
                                              <i class="fa fa-angle-right project-icon"></i>
                                         </a>
                                    </h3>
                               </div>
                          </div>
                     </div>
                </div>

           </div>
      </div>
 </section>


 <!-- TESTIMONIAL -->
 <section class="testimonial section-padding">
      <div class="container">
           <div class="row">

                <div class="col-lg-6 col-md-5 col-12">
                    <div class="contact-image" data-aos="fade-up">

                      <img src="images/female-avatar.png" class="img-fluid" alt="website">
                    </div>
                </div>

                <div class="col-lg-6 col-md-7 col-12">
                  <h4 class="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">Client Testimonials</h4>

                  <div class="quote" data-aos="fade-up" data-aos-delay="200"></div>

                  <h2 class="mb-4" data-aos="fade-up" data-aos-delay="300">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo.</h2>

                  <p data-aos="fade-up" data-aos-delay="400">
                    <strong>Mary Zoe</strong>

                    <span class="mx-1">/</span>

                    <small>Digital Agency (CEO)</small>
                  </p>
                </div>

           </div>
      </div>
 </section>`




export default template3;
