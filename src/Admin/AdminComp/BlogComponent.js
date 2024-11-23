import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogComponent = (props) => {
  const navigate= useNavigate()

  const open=(key)=>{
localStorage.setItem("CurrentBlog",JSON.stringify(key))
navigate("/AdminBlogDetail")
  }
  return (
  <div className="sports-wrap ptb-100">
    <div className="container">
      <div className="row gx-55 gx-5">
        <div className="col-lg-8">
          <div className="row justify-content-center">
           { 
             props.data && Object.keys(props.data).map(function(key,index){
              if(props?.data[key]?.Date) {
                const date= new Date(props?.data[key]?.Date)
              return(
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="news-card-thirteen">
                  <div className="news-card-img">
                    <img onClick={()=>open(key)} loading='lazy' src={props?.data[key]?.Image?.url} style={{"height":"400px","width":"400px","border":"2px solid white"}} alt="Iamge" />
                    <a onClick={()=>open(key)} className="news-cat">{props?.data[key]?.Category}</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a onClick={()=>open(key)}>{props?.data[key]?.Title}</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a onClick={()=>open(key)}>{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</a></li>
                      <li><i className="fi fi-rr-user" />By:-{props?.data[key]?.Author}</li>
                    </ul>
                  </div>
                </div>
              </div>
             )
            }
            else{
              return( 
            <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="news-card-thirteen">
            <div className="news-card-img">
             <img onClick={()=>open(key)} loading='lazy' src={props?.data[key]?.HeadingImage?.url} alt="Iamge" />
             <a onClick={()=>open(key)} className="news-cat">{props?.data[key]?.Category}</a>
            </div>
            <div className="news-card-info">
             <h3><a onClick={()=>open(key)}>{props?.data[key]?.Title}</a></h3>
             <ul className="news-metainfo list-style">
               <li><i className="fi fi-rr-calendar-minus" /><a onClick={()=>open(key)}>----</a></li>
               <li><i className="fi fi-rr-user" />By:-{props?.data[key]?.Author}</li>
             </ul>
            </div>
            </div>
            </div>
            )
            }

          })
        }
            {/* <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="news-card-thirteen">
                <div className="news-card-img">
                  <img src="assets/img/news/politics/politics-8.webp" alt="Iamge" />
                  <a href="business.html" className="news-cat">Politics</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Navigating the Political Sphere: Insights and
                      Analysis</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27,
                        2024</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="news-card-thirteen">
                <div className="news-card-img">
                  <img src="assets/img/news/politics/politics-9.webp" alt="Iamge" />
                  <a href="business.html" className="news-cat">Politics</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Ex-fifa Officials latini Acquitted Of Fraud
                      Charges</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27,
                        2024</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="news-card-thirteen">
                <div className="news-card-img">
                  <img src="assets/img/news/politics/politics-10.webp" alt="Iamge" />
                  <a href="business.html" className="news-cat">Politics</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">How Is Technology Changing Treatment Of
                      Injuries?</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27,
                        2024</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="news-card-thirteen">
                <div className="news-card-img">
                  <img src="assets/img/news/politics/politics-11.webp" alt="Iamge" />
                  <a href="business.html" className="news-cat">Politics</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Meet The Final Three Teams To Qualify For The
                      2023 World Cup</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27,
                        2024</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="news-card-thirteen">
                <div className="news-card-img">
                  <img src="assets/img/news/politics/politics-12.webp" alt="Iamge" />
                  <a href="business.html" className="news-cat">Politics</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Cyclist Out Of Giro D'italia After Injuring Eye
                      With Prosecco Cork</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27,
                        2024</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="news-card-thirteen">
                <div className="news-card-img">
                  <img src="assets/img/news/politics/politics-13.webp" alt="Iamge" />
                  <a href="business.html" className="news-cat">Politics</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Qatar World Cup: Fans Must Show Negative
                      Covid-19 Result</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27,
                        2024</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="news-card-thirteen">
                <div className="news-card-img">
                  <img src="assets/img/news/politics/politics-14.webp" alt="Iamge" />
                  <a href="business.html" className="news-cat">Politics</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Joe Gibbs Discusses Ty Gibbs Incident At
                      Martinsville</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27,
                        2024</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar">
            <div className="sidebar-widget-two">
              <form action="#" className="search-box-widget">
                <input type="search" placeholder="Search" />
                <button type="submit">
                  <i className="fi fi-rr-search" />
                </button>
              </form>
            </div>
                    <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Recent Posts</h3>
              <div className="pp-post-wrap">
                <div className="news-card-one">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-thumb-4.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Bernie Nonummy Pelopai Iatis Eum Litora</a>
                    </h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                          22, 2024</a></li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-one">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-thumb-5.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">How Youth Viral Diseases May The Year
                        2023</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                          23, 2024</a></li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-one">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-thumb-6.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Man Wearing Black Pullover Hoodie To
                        Smoke</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                          14, 2024</a></li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-one">
                  <div className="news-card-img">
                    <img src="assets/img/news/news-thumb-7.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">First Prototype Flight Using Kinetic Launch
                        System</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr
                          07, 2024</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
           {
            props?.category?.map((obj,index)=>{
              return(
            
                <li key={index}><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />{obj.Category} <span>({obj.Times})</span></a></li>
         
              )
            })
           }
    <br/> <br/>
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Popular Tags</h3>
              <ul className="tag-list list-style">
                <li><a href="news-by-tags.html">BUSINESS</a></li>
                <li><a href="news-by-tags.html">FOOD</a></li>
                <li><a href="news-by-tags.html">SCIENCE</a></li>
                <li><a href="news-by-tags.html">LIFESTYLE</a></li>
                <li><a href="news-by-tags.html">SPORTS</a></li>
                <li><a href="news-by-tags.html">PHOTO</a></li>
                <li><a href="news-by-tags.html">TECHNOLOGY</a></li>
                <li><a href="news-by-tags.html">CONTENT</a></li>
                <li><a href="news-by-tags.html">FEATURED</a></li>
                <li><a href="news-by-tags.html">AUDIO</a></li>
                <li><a href="news-by-tags.html">FASHION</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogComponent
