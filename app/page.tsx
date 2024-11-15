import Image from "next/image";
import { Metadata } from 'next';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import SponsorMarquee from "@/components/Sponsors"
import TestimonialCards from "@/components/TestimonialCards";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  metadataBase: new URL('https://coinbank.com'),
  title: 'CoinBank | Crypto Wallet',
  description: 'All of your cryptocurrency in one place — from Bitcoin and Ethereum to Litecoin and Ripple.',
  keywords: [
    'crypto wallet',
    'cryptocurrency wallet',
    'blockchain wallet',
    'digital wallet',
    'secure wallet',
    'bitcoin wallet',
    'ethereum wallet',
    'private key',
    'public key',
    'seed phrase',
    'hardware wallet',
    'software wallet',
    'cold storage',
    'hot wallet',
    'multi - currency support',
    'token swap',
    'NFT wallet',
    'DeFi integration',
    'Web3 wallet',
    'staking wallet'
  ],
};


export default function Home() {
  return (
    <>
      <Section bgClass='sectionH1Bg' classname="min-h-screen">
        <Container>
          <Hero
            head='Sign in to your secure wallet!'
            title='The next-gen crypto wallet & trading platform'
            body='All of your cryptocurrency in one place — from Bitcoin and Ethereum to Litecoin and Ripple.'
            heroImg='/heroimg.svg'
          />
        </Container>
      </Section>

      {/* Second Section */}
      <Section customStyles='bg-white mt-16'>
        <Container>
          <div className='flex md:flex-row gap-20 flex-col justify-between'>
            <div className='flex flex-col items-center gap-2'>
              <h1 className="text-mainColorSecondary text-4xl md:text-5xl font-normal">1 Millions</h1>
              <p className="text-mainColorNeutral font-light text-xs">Volume Traded</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <div className='flex gap-2 items-center'>
                <h1 className="text-mainColorSecondary text-4xl md:text-5xl font-normal">50+</h1>
                <h6 className='bg-mainColorGreen text-mainColorSecondary rounded-full px-4 py-2 text-xs'>Counting...</h6>
              </div>
              <p className="text-mainColorNeutral font-light text-xs">Countries Supported</p>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <h1 className="text-mainColorSecondary text-4xl md:text-5xl font-normal">1 Platform</h1>
              <p className="text-mainColorNeutral font-light text-xs">For Crypto Wallet & Trading</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Third Section */}
      <Section classname='mt-40' customStyles='bg-white'>
        <Container>
          <div className="space-y-12">
            <div className='flex gap-4 items-center flex-col'>
              <h6 className="text-mainColorPrimary font-light">PARTNERS</h6>
              <h1 className="text-mainColorSecondary text-4xl md:text-5xl leading-[120%] text-center font-bold">We're backed by the best</h1>
              <p className="text-mainColorNeutral font-light">Trusted by these blockchains leading industries </p>
            </div>

            <div id="marqueeEl">
              <SponsorMarquee direction="left" />
              <SponsorMarquee direction="right" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Fourth Section */}
      <Section bgClass="sectionH2Bg" classname='mt-0 pt-40' customStyles='bg-white'>
        <Container>
          <div className='flex gap-4 items-center flex-col'>
            <h6 className="text-mainColorPrimary font-light">FEATURES</h6>
            <h1 className="text-mainColorSecondary text-4xl md:text-5xl max-w-3xl text-center font-bold" style={{ lineHeight: '120%' }}>Get a bird’s eye view of your crypto investments</h1>
            <p className="text-mainColorNeutral font-light text-center">Keep up on all the latest trends in the crypto industry and stay ahead of the market.</p>
            <Image src="/featuresImg.svg"
              alt="featuresImage"
              width={100}
              height={100}
              className="w-auto h-auto md:mt-24 mt-12"
            />
          </div>
        </Container>
      </Section>

      {/* Fifth Section */}
      <Section bgClass="sectionH3Bg">
        <Container>
          <div className='flex pt-24 gap-4 items-center flex-col'>
            <h6 className="text-mainColorPrimary font-light">FEATURES</h6>
            <h1 className="text-mainColorSecondary text-4xl md:text-5xl max-w-3xl text-center font-bold" style={{ lineHeight: '120%' }}>Many type of Blockchains</h1>
            <p className="text-mainColorNeutral font-light text-center max-w-2xl">Blockchain technology comes in various forms, each with unique features and uses. From public to private chains.</p>
            <Image src="/coinImg.svg"
              alt="coinImage"
              width={100}
              height={100}
              className="w-auto h-auto mt-16 mb-24"
            />
          </div>
        </Container>
      </Section>

      {/* Sixth Section */}
      <Section bgClass="sectionH4Bg" classname="pb-28">
        <Container>
          <div className='flex pt-24 gap-4 items-center flex-col'>
            <h6 className="text-mainColorPrimary font-light">FEATURES</h6>
            <h1 className="text-mainColorSecondary text-4xl md:text-5xl max-w-2xl text-center font-bold" style={{ lineHeight: '120%' }}>Supercharge your trades with advanced features</h1>

            <div className="grid md:grid-cols-2 gap-12 mt-20 grid-cols-1 px-0 md:px-3">
              <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-gray-100 shadow-lg backdrop-blur-2xl">
                <Image src="/coinBankChart.svg"
                  alt="coinBankChart"
                  width={100}
                  height={100}
                  className="w-auto h-auto mb-6"
                />
                <div className="space-y-4 p-8">
                  <h6 className="text-mainColorSecondary font-normal text-xl">Grow and earn everyday</h6>
                  <p className="text-mainColorNeutral font-light">Blockchain technology comes in various forms, each with unique features and uses. From public to private chains, and from permissioned to permissionless networks, blockchain is reshaping industries.</p>
                </div>
              </div>
              <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-slate-100 shadow-lg backdrop-blur-xl">
                <Image src="/coinBankCard.svg"
                  alt="coinBankChart"
                  width={100}
                  height={100}
                  className=" rounded-3xl w-auto h-auto m
                b-6" />
                <div className="space-y-4 p-10">
                  <h6 className="text-mainColorSecondary font-normal text-xl">Virtual cards powered by Mastercard</h6>
                  <p className="text-mainColorNeutral font-light">Blockchain technology comes in various forms, each with unique features and uses. From public to private chains, and from permissioned to permissionless networks, blockchain is reshaping industries.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trading Section */}
      <Section bgClass="sectionH5Bg" classname="min-h-screen md:pb-28 pb-0 pt-32">
        <Container>
          <div className="flex md:flex-row flex-col justify-between gap-28 md:gap-10 items-end">
            <div className="space-y-16 flex md:flex-row flex-col items-end gap-12 md:gap-20">
              <div className="space-y-[70px]">
                <div className="space-y-2">
                  <h6 className="text-mainColorPrimary font-light text-md">FEATURES</h6>
                  <h1 className="text-mainColorSecondary text-4xl md:text-3xl font-bold"
                    style={{ lineHeight: '120%' }}
                  >
                    Seamless Trading
                  </h1>
                  <p className="text-mainColorNeutral font-light">Keep up on all the latest trends in the crypto industry and stay ahead of the market.</p>
                </div>
                <div className="bg-white p-10 rounded-xl">
                  <Image src="/usdChart.svg"
                    alt="usdChart"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-[68px]">
              <h6 className="text-mainColorNeutral font-light">Keep up on all the latest trends in the crypto industry and stay ahead of the market.</h6>
              <div className="bg-white p-10 rounded-xl">
                <Image src="/usdChart.svg"
                  alt="usdChart"
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial Section */}
      <Section bgClass="sectionH6Bg" classname="min-h-screen md:pb-20 pb-0 pt-16">
        <Container>
          <div className='flex pt-24 gap-4 items-center flex-col'>
            <h6 className="text-mainColorPrimary font-light">TESTIMONIALS</h6>
            <h1 className="text-mainColorSecondary text-4xl md:text-5xl text-center font-bold" style={{ lineHeight: '120%' }}>Trusted by more than 100K+ people</h1>
            <p className="text-mainColorNeutral font-light text-center max-w-2xl">Hear what they say about us and why you should choose Coinbank</p>

            <div className="grid md:grid-cols-3 gap-6 grid-cols-1 mt-20">
              <TestimonialCards quote="“Cool crypto currency, fast withdrawals and deposits, way better, than any wallet.”"
                image="/My-Pics-2.jpg"
                name="Blessed Samuel"
                profession="Software Developer"
              />

              <TestimonialCards quote="“It’s worth it, very intuitive and easy to learn about cryptocurrencies.”"
                image="/My-Pics-2.jpg"
                name="Blessed Samuel"
                profession="Founder"
              />

              <TestimonialCards quote="“Best customer service so far. Amazing in all areas best centralized exchange.”"
                image="/My-Pics-2.jpg"
                name="Blessed Samuel"
                profession="Investors"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Trading Banner Section */}
      <Section classname="bg-[#F7F6FE] md:pb-28 pb-0 md:pt-10 pt-20">
        <Container>
          <div className="">
            <Image
              src="/cryptoBanner.svg"
              alt="cryptoBanner"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
          </div>
        </Container>
      </Section>

      {/* Call to Action Section */}
      <Section classname="min-h-screen bg-[#F7F6FE] md:pb-28 pb-0 md:pt-10 pt-20">
        <Container>
          <CallToAction />
        </Container>
      </Section>
    </>
  );
}
