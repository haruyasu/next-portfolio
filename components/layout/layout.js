import Navigation from "./navigation";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex flex-1 justify-center container mx-auto max-w-screen-xl px-5">
        {props.children}
      </main>
      <footer className="w-full h-20 flex justify-center items-center bg-gray-700 text-sm text-white">
        © 2021 Haruyasu Kaitori
      </footer>
    </div>
  );
}

export default Layout;
