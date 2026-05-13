import Sidebar from "@/component/Sidebar";



export const metadata = {
  title: "Find-home - Seller",
  description: "property listing and management for sellers",
};

export default function SellerRootLayout({ children }) {
  return (
    <html
      lang="en"
     
    >
      <body className="min-h-full flex w-full bg-red-600 relative">
        <div className="w-64 flex-1">
          <Sidebar/>
        </div>

        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
