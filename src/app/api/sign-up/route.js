import User from "@/app/models/userModel";
import connectToDb from "@/lib/connection";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
    // destructure the request body to get the user data
    const { fullname, email, password } = await req.json();

    if(!fullname || !email || !password) {
        return  Response.json({ error: 'Missing required fields- fullname or email or password' }, { status: 400 });
    }
    // store in the data
    try{
        // estbalish database connection
        await connectToDb();

        // check if user exists with the email
        const existingUser = await User.findOne({ email });
        // when the field in the db does no match the body from the request,
        //  we can use the field name in the db as the key and the value from the body as the value in the findOne method
        // const existingUser = await User.findOne({ userEmail:email });
        if(existingUser) {

            return Response.json({ message: 'User already exists' }, { status: 400 });  
        }

        if(!existingUser){
            // hash the password before storing in the database
            const salt= bcrypt.genSaltSync(16)
            const hashedPassword = await bcrypt.hash(password, salt);
            // create a new user
            const newUser=await User.create({
                firstName:fullname,
                email,
                password:hashedPassword 
            })

            return Response.json({ message: 'User registered successfully'}, { status: 201 });      
        }
    }

    catch(error){
        console.error('Error during user registration:', error);
        return Response.json({ error: 'Server Error' }, 
            { status: 500 });
    }
}