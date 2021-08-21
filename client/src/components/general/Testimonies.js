import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

function Testimonies({ styleProp }) {
  return (
    <section className={styleProp}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <div className="sec-heading">
              <h2>
                What People <span className="theme-cl-2">Saying</span>
              </h2>
              <p>
                Here is the testimonies of our clients and workers frm different
                part of the world.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <OwlCarousel
              className="owl-theme middle-arrow-hover "
              loop
              margin={10}
              autoPlay
              responsiveClass
              responsive={{
                0: {
                  items: 1,
                },
                400: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="/assets/person-2.jpg"
                        className="img-fluid"
                        alt="team-3"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Shaurya Williams</h4>
                      <span className="st-author-subtitle theme-cl">
                        Manager Of Doodle
                      </span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    I got my work done with ease and at giving time without
                    stress or struggle. It was so nice working with donyfund and
                    so happy.
                  </p>
                </div>
              </div>

              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="https://themezhub.net/workoo-demo/workoo/assets/img/team-4.jpg"
                        className="img-fluid"
                        alt="team-4"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Shrithi Setthi</h4>
                      <span className="st-author-subtitle theme-cl">
                        CEO Of Applio
                      </span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    Join this platform they are all you need to start up as a
                    freelencer.They have changed my life, i have been working
                    and getting my payments.
                  </p>
                </div>
              </div>

              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="https://themezhub.net/workoo-demo/workoo/assets/img/team-1.jpg"
                        className="img-fluid"
                        alt="team-1"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Adam Williams</h4>
                      <span className="st-author-subtitle theme-cl">Sales</span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    I have been working in this platform with ease and no stress
                    in withdrawals.Donyfund has changed my life for better.
                  </p>
                </div>
              </div>

              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="https://themezhub.net/workoo-demo/workoo/assets/img/team-2.jpg"
                        className="img-fluid"
                        alt="team-2"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Lilly Wikdoner</h4>
                      <span className="st-author-subtitle theme-cl">
                        Content Writer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    Working and seeing the result of your effort is a great
                    ladder to your success. Donyfund gave me a great success
                    story.
                  </p>
                </div>
              </div>

              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="https://bestwebcreator.com/cryptocash/demo/assets/images/testmonial_client3.jpg"
                        className="img-fluid"
                        alt="team-3"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Loise Kings</h4>
                      <span className="st-author-subtitle theme-cl">
                        Stylist
                      </span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    I started with no knowledge of in online works. Today
                    donyfund as thought me what i need to know to acquire a
                    great job.
                  </p>
                </div>
              </div>
              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="https://themezhub.net/workoo-demo/workoo/assets/img/team-3.jpg"
                        className="img-fluid"
                        alt="team-3"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Donald Matthew</h4>
                      <span className="st-author-subtitle theme-cl">
                        Photographer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    I started without a pro knowledge of styling. Today donyfund
                    as thought me what i need to know to acquire a great job.
                  </p>
                </div>
              </div>

              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="/assets/person-1.jpg"
                        className="img-fluid"
                        alt="team-4"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Kink Anthony</h4>
                      <span className="st-author-subtitle theme-cl">
                        Marketing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    Working with no or little experience was so hard but now
                    donyfund has given such a great opportunity to earn.
                  </p>
                </div>
              </div>

              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="https://themezhub.net/workoo-demo/workoo/assets/img/team-1.jpg"
                        className="img-fluid"
                        alt="team-1"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Elvis James</h4>
                      <span className="st-author-subtitle theme-cl">
                        Designer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    I have earned so much designing in this platform from so
                    many companies, payment and a success story are assured .
                  </p>
                </div>
              </div>

              <div className="item testimonial-center">
                <div className="smart-tes-author">
                  <div className="st-author-box">
                    <div className="st-author-thumb">
                      <img
                        src="/assets/person-3.jpg"
                        className="img-fluid"
                        alt="team-2"
                      />
                    </div>
                    <div className="st-author-info">
                      <h4 className="st-author-title">Clara Wikdoner</h4>
                      <span className="st-author-subtitle theme-cl">
                        Writer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="smart-tes-content">
                  <p>
                    Having a good job has not been easy but donyfund has brought
                    an easy and stable means of working and making wealth.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonies
