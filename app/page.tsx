// import Image from "next/image";
import { Metadata } from 'next';
import Section from '@/components/Section';
import Container from '@/components/Container';

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
      <Section bgClass='' classname="min-h-screen">
        <Container>
          <div className='text-gray-900 text-lg'>Home Page</div>
        </Container>
      </Section>
    </>
  );
}
