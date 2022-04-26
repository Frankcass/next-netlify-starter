import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import dynamic from "next/dynamic";
import Link from 'next/link'
import {useRouter} from 'next/router';
import {useEffect} from "react";
// import './navbar.css'
import {NavbarLogo} from '../../utils/allImgs'
import {Addshrink} from '../../utils'
// import Preloader from '../../components/Preloader'
import data from '../../data/data-layouts/data-Head.json'

const Preloader = dynamic(
  () => {
    return import('../../components/Preloader');
  },
  { ssr: false }
);

function Header({Title}){

    useEffect(() => {

        Addshrink()

    },[window.pageYOffset])

    const router = useRouter()


  return(
    <>
        <Preloader Title={Title} />
        <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src={NavbarLogo.src} alt="logo" />
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Discover</a>
                            <div className="dropdown-menu">
                                {data[0].dataUp && data[0].dataUp.map((item , i) => (
                                    <Link key={i} href={item.path}>
                                        <a className="dropdown-item">
                                            {item.title}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href="/Activity">
                                <a className="nav-link">
                                    Activity
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Community</a>
                            <div className="dropdown-menu">
                                {data[2].CommunityData && data[2].CommunityData.map((item , i) => (
                                    <Link key={i} href={item.path}>
                                        <a className="dropdown-item">
                                            {item.title}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu">
                                {data[1].dataDown && data[1].dataDown.map((item , i) => (
                                    <Link key={i} href={item.path}>
                                        <a className="dropdown-item">
                                            {item.title}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/ContactUS">
                                <a className="nav-link">
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li className="lh-55px"><Link href="/ConnectWallet">
                            <a className="btn login-btn ml-50">
                                Connect Wallet
                            </a>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )

export default Header

export default function Home() 
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
