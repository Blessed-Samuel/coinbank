// import Image from "next/image";
import { Metadata } from 'next';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';

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
    </>
  );
}
