import { UnauthenticatedError, UnauthorizedError } from "../errors/customError.js"
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req,res,next)=>{
    const { token } = req.cookies
    if(!token) throw new UnauthenticatedError('Authentication Invalid');
 
    try {
        const {userId, users} = verifyJWT(token)
        req.user = {userId, users};
        next();

    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid');
 
    }

   
}

export const authorizePermissions = (...users)=>{
    
    return(req,res,next)=>{
        console.log(users);
        if(!users.includes(req.user.users)){
            throw new UnauthorizedError('Unauthorized to access this role')
        }
        next();
    }
  
}