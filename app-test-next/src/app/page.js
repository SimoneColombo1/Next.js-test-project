import Image from "next/image";
import styleJumbo from "./style/home/jumbo.scss";
import styleCards from "./style/home/cards.scss"
import MyButton from "./components/HomeButton";


 //> Array di oggetti per stampare delle cards di prova
const chefArray = [
  {
    immagine:"/eren.jpg",
    nome: "Alberto Mancini",
    specialita: "Cucina italiana moderna",
    ristorante: "Ristorante La Dolce Vita",
    anniEsperienza: 15,
    premi: ["Stella Michelin", "Chef dell'anno 2020"]
  },
  {
     immagine:"/eren.jpg",
    nome: "Franco Rossi",
    specialita: "Cucina tradizionale italiana",
    ristorante: "Ristorante Il Classico",
    anniEsperienza: 20,
    premi: ["Stella Michelin", "Premio Tradizione 2021"]
  },
  {
     immagine:"/eren.jpg",
    nome: "Maria Bianchi",
    specialita: "Cucina fusion asiatica",
    ristorante: "Sakura Fusion",
    anniEsperienza: 10,
    premi: ["Miglior Chef Fusion 2022"]
  },
  {
     immagine:"/eren.jpg",
    nome: "Giovanni Verdi",
    specialita: "Cucina mediterranea",
    ristorante: "Mediterraneo Gourmet",
    anniEsperienza: 18,
    premi: ["Stella Michelin", "Chef Innovatore 2019"]
  },
  {
     immagine:"/eren.jpg",
    nome: "Luca Neri",
    specialita: "Cucina molecolare",
    ristorante: "Molecole & Sapori",
    anniEsperienza: 12,
    premi: ["Premio Innovazione 2020"]
  },
  {
     immagine:"/eren.jpg",
    nome: "Chiara Rossi",
    specialita: "Pasticceria francese",
    ristorante: "Le Petit Sucre",
    anniEsperienza: 8,
    premi: ["Miglior Pasticcere 2021", "Stella Michelin"]
  },
  {
     immagine:"/eren.jpg",
    nome: "Enrico Russo",
    specialita: "Cucina gourmet italiana",
    ristorante: "Il Gusto Perfetto",
    anniEsperienza: 25,
    premi: ["Stella Michelin", "Premio Eleganza Culinaria 2020"]
  },
  {
     immagine:"/eren.jpg",
    nome: "Sofia Galli",
    specialita: "Cucina vegana creativa",
    ristorante: "Verde & Salute",
    anniEsperienza: 9,
    premi: ["Chef Vegano dell'anno 2021"]
  }
];









                                                  //< HTML

export default function Home() {
  


  return (
      <section class="home-container">
        <section class="jumbotron">
           <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates minus delectus illum natus repellat suscipit. Minima deserunt minus sint, rem beatae quisquam nisi nostrum natus quidem illum similique provident saepe!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, molestiae. Saepe, in. Recusandae, delectus illo aliquid voluptatem autem sint, provident facilis, consequatur fuga eos reprehenderit accusamus eius sequi laborum ipsam culpa quod ad? Amet sint possimus explicabo eligendi aspernatur eaque, rerum voluptates iure assumenda. Sint!
           </div>
           <div>
            <Image src="/eren.jpg" width={700} height={500} alt="Eren"  />
            </div>
              

        </section>
          <section class="CardsContainer">

          
                {chefArray.map((data)=>(
                    <div class="card" key={data.nome}>  
                    <Image src={data.immagine} width={100} height={100} alt="Eren"/>
                <span>{data.nome}</span>
                <span>{data.specialita}</span>
                <span>{data.ristorante}</span>
                <span>{data.anniEsperienza}</span>
                <span>{data.premi}</span>
</div>
               ) )}

           


          </section>
     <MyButton/>
      </section> 
  );
}
