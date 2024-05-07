import { useSelector, useDispatch } from "react-redux"; 
import { addToCart } from "../../redux/cartSlice";
import { NavLink } from "react-router-dom";
const Product=()=> {

    const items = useSelector((state) => state.allCart.items);
  
    const dispatch = useDispatch();

    return (

        
  <>
  
  <div className="w-full xl:w-1/2 lg:w-full xl:px-10 sm:px-5 px-8 m-auto text-center">
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Go local ,think global 
        </h1>
        <p className="mt-8 text-lg text-gray-700">
        Unlock Your Crops Potential: Find the Perfect Fertilizer for Your Fields!
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-xxl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        
      {items.map((item) => (
          <div key={item} className="rounded-md border">
            <img
              src={item.imageSrc}
              alt="Laptop"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">{item.name}</h1>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Sneakers
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Nike
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Airmax
                </span>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Colors : {item.color}</span>
                {/* <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span> */}
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Size : </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  {item.size}
                </span>
                {/* <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  9 UK
                </span>
                <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                  10 UK
                </span> */}
              </div>
              <NavLink to= "/cart">
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick ={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      </>
    )
  }
  export default Product;