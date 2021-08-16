import React, { createContext, useState, useContext } from "react";

const PageContext = createContext();

export default function PageProvider({ children }) {
  var pageUrl = window.location.href
  var PageUrlSplit = pageUrl.split('/')
  var PageUrlNumber = PageUrlSplit[PageUrlSplit.length-1]
  var PageNumber = parseInt(PageUrlNumber,10)
  if(PageNumber > 15){PageNumber=15}
  if(PageNumber < 0){PageNumber=1}
  if(isNaN(PageNumber)){PageNumber=1}
  
  const [page, setPage] = useState(PageNumber);

  return (
    <PageContext.Provider
      value={{
        page,
        setPage
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (!context) throw new Error("usePage must be used within a PageProvider");
  const { page, setPage } = context;
  return { page, setPage };
}