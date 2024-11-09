import Image from "next/image";
import { Metadata } from 'next';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import SponsorMarquee from "@/components/Sponsors"

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
      <Section bgClass="sectionH2Bg" classname='mt-40' customStyles='bg-white'>
        <Container>
          <div className='flex gap-4 items-center flex-col'>
            <h6 className="text-mainColorPrimary font-light">FEATURES</h6>
            <h1 className="text-mainColorSecondary text-4xl md:text-5xl max-w-3xl text-center font-bold" style={{ lineHeight: '120%' }}>Get a bird’s eye view of your crypto investments</h1>
            <p className="text-mainColorNeutral font-light text-center">Keep up on all the latest trends in the crypto industry and stay ahead of the market.</p>
            <Image src="/featuresImg.svg" alt="featuresImage" width={100} height={100} className="w-auto h-auto md:mt-36 mt-12" />
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
            <Image src="/coinImg.svg" alt="coinImage" width={100} height={100} className="w-auto h-auto mt-16 mb-24" />
          </div>
        </Container>
      </Section>

      {/* Sixth Section */}
      <Section bgClass="" classname="min-h-screen mt-36">
        <Container>
          <Image src="/contentImg.svg" alt="contentImage" width={100} height={100} className="w-auto h-auto" />
        </Container>
      </Section>
    </>
  );
}
