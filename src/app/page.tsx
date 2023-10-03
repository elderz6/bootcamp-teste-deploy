import ButtonVoltar from "../../components/Buttons/ButtonVoltar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <ButtonVoltar />
      <Footer/>
    </div>
  )
}
