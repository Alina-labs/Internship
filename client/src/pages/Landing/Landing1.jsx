import { DollarSign, Filter,  Moon, Star, Zap } from 'lucide-react'

const LandingPage=()=> {
    //   const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    
    //   const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen)
    //   }
    
      return (
        <div className="w-full">
          {/* Hero Section */}
          <div className="relative w-full bg-white">
            <div className="mx-auto max-w-xxl lg:px-8">
              <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
                <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
                  <p className="text-xs font-medium md:text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                    <span className="ml-2 cursor-pointer font-bold">Read More &rarr;</span>
                  </p>
                </div>
                <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                  People who really cares about your business
                </h1>
                <p className="mt-8 max-w-3xl text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam nulla aperiam
                  quo possimus, nihil molestiae modi tenetur esse qui repudiandae cum fuga aspernatur
                  ea?
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-gray-200 p-4">
                <img
                  className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Features Section */}
          <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
               
              </div>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                DevUI helps you build beautiful website
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <DollarSign className="h-9 w-9 text-gray-700" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                <p className="mt-4 text-sm text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <Zap className="h-9 w-9 text-gray-700" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
                <p className="mt-4 text-sm text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <Moon className="h-9 w-9 text-gray-700" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
                <p className="mt-4 text-sm text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <Filter className="h-9 w-9 text-gray-700" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
                <p className="mt-4 text-sm text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
      
          {/* Pricing Section */}
         
          {/* NewsLetter */}
          <div className="mx-auto my-12 max-w-7xl px-2 py-2 md:my-24 lg:my-32 lg:px-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <h2 className="text-3xl font-bold text-black">Sign up for our weekly newsletter</h2>
                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                  commodo posuere et sit amet ligula.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-800">
                    Trusted by over 100,000+ businesses and individuals
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 inline-block">
                      {/* <span className="text-sm font-semibold text-gray-800">4.8/5 . 3420 Reviews</span> */}
                    </span>
                  </div>
                </div>
                <form className="mt-6">
                  <div className="flex w-full max-w-md flex-col space-y-4">
                    <input
                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    ></input>
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-2">
                  <span className="text-sm text-gray-600">
                    By signing up, you agree to our terms of service and privacy policy.
                  </span>
                </p>
              </div>
              <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
                <img
                  className="h-full w-full rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Newsletter"
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
    export default LandingPage;