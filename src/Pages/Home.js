import React, { Suspense, useContext, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HomeLatestBlog from '../Components/HomeComponents/HomeLatestBlog'
import UseContext from './Context/UserContext'
const HomeInstaSlider= React.lazy(()=>import('../Components/HomeComponents/HomeInstaSlider'))
const TrendingNow= React.lazy(()=>import('../Components/HomeComponents/TrendingNow'))
const HomeBlog= React.lazy(()=>import('../Components/HomeComponents/HomeBlog'))
const Home = () => {
    const{fetchlatestimages,fetchlatestblogs,loading}=useContext(UseContext)
    useEffect(()=>localStorage.clear(),[])
    return (
        <div>
            <Header home="active"/>
{loading && <div className='preloaders'><div className='loaders'></div></div>}
<Suspense fallback={<div className='preloaders'><div className='loaders' ></div></div>}>           
            <TrendingNow/>
</Suspense>
<Suspense fallback={<div className='preloaders'><div className='loaders' ></div></div>}>
            <HomeBlog data={fetchlatestblogs}/>
</Suspense>
            <HomeLatestBlog/>
<Suspense fallback={<div className='preloaders'><div className='loaders' ></div></div>}>
            <HomeInstaSlider data={fetchlatestimages}/>
</Suspense>
            <Footer/>
             {/* <Newsletter/>  */}
        </div>
    )
}
export default Home