import "./globals.scss";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../components/error";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/Logo";
import { mainApi } from "@/Utils/api";

export default async function RootLayout({ children }) {

  const categories = await mainApi.getCategories();

  return (

    <html lang="ru">
      <body className='app'>
        <ErrorBoundary fallback={<Error />} >
            <Logo />
            <Header categories={categories} />
              {children}
            <Footer categories={categories} />
        </ErrorBoundary>
      </body>
    </html>
  );
}
