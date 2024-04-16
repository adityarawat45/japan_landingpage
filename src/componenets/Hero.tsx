const Hero = () => {
  return (
    <div className="flex items-center">
        {/* hero content */}
        <div className="flex flex-col gap-px-36">
            <h1 className="text-black font-bold text-6xl pb-5">
                WORKING OPPURTUNITIES IN JAPAN
            </h1>
            <p className="pb-5">Japan offers a diverse range of working opportunities for both domestic and international professionals. With its strong economy, technological advancements, and globally recognized brands, Japan remains an attractive destination for job seekers.</p>
            <div>
                <button className="rounded-md text-white bg-red-600 text-sm font-normal px-4 py-1 w-auto">Explore</button>
            </div>
        </div>

        {/* //hero image */}
        <img src="src/assets/bonzai.jpg"></img>
        <div>

        </div>
    </div>
  )
}

export default Hero