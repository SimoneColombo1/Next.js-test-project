import Image from "next/image";
import styleJumbo from "./style/home/jumbo.scss";
import styleAboutUs from "./style/home/aboutUs.scss"
export default function Home() {
  return (
      <section class="home-container">
        <section class="jumbotron">
           <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates minus delectus illum natus repellat suscipit. Minima deserunt minus sint, rem beatae quisquam nisi nostrum natus quidem illum similique provident saepe!</div>
           <div>
            <Image src="/eren.jpg" width={700} height={500} alt="Eren"  />
            </div>


        </section>
          
      </section>
  );
}
