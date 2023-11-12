import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

interface CardProps {
  img: string;
  name: string;
  title: string;
  desc: string;
}

const Card = ({ img, name, title, desc }: CardProps) => {
  return (
    <div className="w-full md:w-[32%] mb-2 m-5 sm:m-5 md:m-1 lg:m-1 bg-white/20 border border-violet-200 rounded-xl shadow-lg">
      <div className="flex flex-col items-center py-10">
        <Image
          className="w-24 h-24 mb-3"
          src={img}
          width="70"
          height="60"
          alt={name}
        />
        <h5 className="mb-1 text-xl font-semibold text-gray-900">{name}</h5>
        <span className="text-violet-500 font-medium">{title}</span>
        <div className="flex mt-4 space-x-3 mx-auto w-[85%] md:mt-6">
          <p className="inline-flex items-center text-center px-4 py-2 text-gray-700 font-medium">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    id: 1,
    img: "https://uqo7rkrle6cnym5qp3utusnm5drypbudfuyeohtrrzs7yapj6nfq.arweave.net/pB34qisnhNwzsH7pOkms6OOHhoMtMEcecY5l_AHp80s",
    name: "Degen Profile",
    title: "Craft your unique social identity",
    desc: "Showcase on-chain activities, achievements, and personality with personalized badges. Let the world see your contributions.",
  },
  {
    id: 2,
    img: "https://vciobckmuypxkub4mohnmzvmum6ogv27l7q7s26qpu5dtibsu4sa.arweave.net/qJDgiUymH3VQPGOO1masozzjV19f4flr0H06OaAypyQ",
    name: "NFT portfolio",
    title: "Flex your collection",
    desc: "Top rare collection of yours with the highest floor price in the highlights. Maximize your chance of profile visits.",
  },
  {
    id: 3,
    img: "https://yape7wezdtm67fwh3t5tvanzbhszxnzsl5mwgfsdcdjozyidblka.arweave.net/wB5P2Jkc2e-Wx9z7OoG5CeWbtzJfWWMWQxDS7OEDCtQ",
    name: "P2P Tipping",
    title: "Monetize your influence",
    desc: "Enable direct tips to your wallet fostering connection with your audience as they appreciate your work. Reward your chad!",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>TipX</title>
        <meta name="description" content="TipX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-[100vh] pt-32 md:pt-20 max-w-[1080px] mx-auto">
        {/* Banner */}
        <div className="ramp md:text-left h-[calc(100vh-60px)] flex flex-col md:flex-row justify-center items-center lg:mt-0 md:mt-0 sm:mt-24">
          <div className="flex flex-col justify-center text-center md:text-left px-5 md:px-0 mr-0 md:mr-5">
            <h1 className="font-heading text-4xl xs:text-5xl md:text-6xl xl:text-6xl font-bold text-gray-900 mb-8 sm:mb-14">
              <span>Flex your </span>
              <span className="font-serif italic bg-gradient-to-bl from-[#732fff] to-[#9a2fff] text-transparent bg-clip-text">
                social profile{" "}
              </span>
              <span>on-chain</span>
            </h1>
            <span className="block text-violet-800 text-2xl font-medium tracking-tight">
              Make the most of your time and audience
            </span>
            <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-gray-700">
              Easily assess your activities and provides tag. Get your top NFT
              collection showcase and share it with your frends. Simply create,
              grow and earn!
            </p>
            <div className="mt-5 sm:mt-8 flex items-center justify-center md:justify-start lg:justify-start flex-row">
              <div>
                <Link
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-3xl text-white bg-black hover:shadow-2xl"
                >
                  Know more
                </Link>
              </div>
            </div>
          </div>
          <div className="my-auto w-full md:w-[90%] sm:w-[70%] sm:mx-auto items-end">
            <div className="relative">
              <Image
                src="https://ale5qaxrknjiyhnqdtbazgeecqo3xusyy3dcjlldotpkgn4uhdna.arweave.net/AsnYAvFTUowdsBzCDJiEFB270ljGxiStY3TeozeUONo"
                width="650"
                height="600"
                alt="ProfileVector"
              />
            </div>
          </div>
        </div>
        {/* Top Featured */}
        <div id="feature" className="mb-[50px]">
          <div className="flex justify-center items-center mt-24 md:mt-0 md:mb-5">
            <h1 className="text-2xl font-extrabold font-mono">TOP FEATURES</h1>
          </div>
          <div className="flex flex-wrap">
            {cardData.map((card) => (
              <Card
                key={card.id}
                img={card.img}
                name={card.name}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
        {/* How much earn */}
        <div
          id="benefits"
          className="my-[100px] flex flex-col md:flex-row items-center gap-5 md:gap-0 pt-5 md:pt-10 lg:pt-10 m-5"
        >
          <div className="my-auto w-[80%] md:w-[50%] sm:w-[70%] sm:mx-auto items-end">
            <Image
              src="https://6ngn57kyw4jb34w7u3vizkmqswepwmggdvh3ztzem6mt546lbb5a.arweave.net/80ze_Vi3Eh3y36bqjKmQlYj7MMYdT7zPJGeZPvPLCHo"
              width="400"
              height="400"
              alt="ServiceVector"
            />
          </div>
          <div className="flex flex-col my-auto w-[80%] md:w-[50%] items-start">
            <p className="text-2xl md:text-5xl font-bold pb-6">
              See how much you can earn on TipX
            </p>
            <p className="text-lg md:text-xl font-serif flex flex-row gap-2 pb-3">
              <text className="text-violet-400 font-extrabold">&gt;</text>{" "}
              Prefer one-stop degen profile which evaluates your contribution
            </p>
            <p className="text-lg md:text-xl font-serif flex flex-row gap-2 pb-3">
              <text className="text-violet-400 font-extrabold">&gt;</text> Stand
              out from the crowd, don&apos;t sound like everbody else
            </p>
            <p className="text-lg md:text-xl font-serif flex flex-row gap-2 pb-3">
              <text className="text-violet-400 font-extrabold">&gt;</text> Get
              free social activity analysis in form of personalized badges
            </p>
            <p className="text-lg md:text-xl font-serif flex flex-row gap-2">
              <text className="text-violet-400 font-extrabold">&gt;</text>{" "}
              Transform your accomplishments into rewarding system
            </p>
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start flex-row">
              <div>
                <Link
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-3xl text-white bg-black hover:shadow-2xl"
                >
                  Let&apos;s get in
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Flow */}
        <div
          id="flow"
          className="mt-[100px] mb-[50px] flex bg-white/20 items-center justify-center border border-violet-100 rounded-3xl px-2 md:px-0 py-5 md:py-8 lg:py-8"
        >
          <div className="my-auto">
            <Image
              src="https://lqzej2y43mob4kyclqyaz3so7voqk6bt23ivcc6ohwtxp7n7vrnq.arweave.net/XDJE6xzbHB4rAlwwDO5O_V0FeDPW0VELzj2nd_2_rFs"
              width="1000"
              height="400"
              alt="ServiceVector"
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
