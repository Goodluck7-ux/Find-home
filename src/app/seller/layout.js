// import Sidebar from "@/component/sidebar";
import { AuthProvider } from "../context/AuthContext";



export const metadata = {
  title: "Find-home - Seller",
  description: "property listing and management for sellers",
};

export default function SellerRootLayout({ children }) {
  return (
    <html
      lang="en"

    >
      <body className="">
          <AuthProvider>


        {/* <div className="w-64 flex-1">
          <Sidebar />
        </div> */}

        <div className="flex-1">
          
         
          {children}


        </div>

          </AuthProvider>
        
      </body>
    </html>
  );
}
