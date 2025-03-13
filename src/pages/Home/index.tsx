import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

const HomePage = () => {
  const object = {
    name: "John",
    age: 37,
  }

  console.log("FullObject", Object.getOwnPropertyDescriptor(object, 'name'));
  console.log("Object", object);

  return (
    <div className="min-h-screen relative mx-auto w-[360px] h-[5418px]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;
