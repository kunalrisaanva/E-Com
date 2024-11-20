import { asyncHandler } from "../utils/AsynchHandler.js"


const homeScreeProduct = asyncHandler(async (request,reply) => {




    return { message: 'Product created successfully',};
    
})



export { homeScreeProduct }