import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
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
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ArtPack – React Next.js NFT Marketplace Template</title>
  <!-- Favicon icon -->
  <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
  <link rel="stylesheet" href="assets/jquery.fancybox.min.css" />
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="assets/bootstrap.min.css" />
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" type="text/css" media="all" />
</head>

<body>
  <div class="body-wrapper container-fluid p-0">
    <!-- nav area -->
    <div class="nav-wrapper">
      
      <div class="navigation" id="nav">
        <div class="nav-item active">
          <a class="nav-list-item"><i class="fa fa-play"></i>Get started</a>
          <div class="sub-nav">
            <a class="sub-nav-item active" href="#introduction">Introduction</a>
            <a class="sub-nav-item" href="#filesincluded">Files Included</a>
          </div>
        </div>
        <div class="nav-item">
          <a class="nav-list-item"><i class="fa fa-upload"></i>Template Installation</a>
          <div class="sub-nav">
            <a class="sub-nav-item" href="#install-steps">Installation Steps</a>
          </div>
        </div>
        <div class="nav-item">
          <a class="nav-list-item"><i class="fa fa-folder-o" href="#folder-structure"></i>Folder
            Structure</a>
          <div class="sub-nav">
            <a class="sub-nav-item" href="#root-folder-structure">Root Folder Structure</a>
            <a class="sub-nav-item" href="#public-folder-structure">Public Folder Structure</a>
            <a class="sub-nav-item" href="#src-folder-structure">Src Folder Structure</a>
          </div>
        </div>
       
        <div class="nav-item">
          <a class="nav-list-item"><i class="fa fa-cog"></i>Customization</a>
          <div class="sub-nav">
            <a class="sub-nav-item" href="#logo-change">Change Logo</a>
            <a class="sub-nav-item" href="#content-change">Change Content & Images</a>
            <a class="sub-nav-item" href="#contact-change">Change Contact Form URL</a>
            <a class="sub-nav-item" href="#mailchimp-change">Mailchimp</a>
          </div>
        </div>
      </div>
    </div>

    <!-- content area -->
    <div class="content-wrapper" id="content">
      <div class="doc-hero-wrap">
        <div class="hero-wrap-inner">
          <h2 class="title">ArtPack – React Next.js NFT Marketplace Template</h2>
          <h5 class="subtitle">NFT Template</h5>
        </div>
      </div>

      <!-- Getting start -->
      <div class="content-section" id="introduction" style="display: block;">
        <h3>Introduction</h3>
        <h5>Template Name: ArtPack – React Next.js NFT Marketplace Template</h5>
        Thank you very much for choosing our template. We truly appreciate and
        really hope that you'll enjoy our template! <br />
        <strong>If you like this template, Please support us by rating us 5
          stars..</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-star"></i><i class="fa fa-star"></i><i
          class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><br /><br />

        <p>ArtPack – React JS NFT Marketplace TemplateToday we want to share a design, a topic that is not known to everyone. NFT is a “non-fungible token”, a new method of payment on the Internet using electronic currency. Each of the NFTs is unique and exists in a single copy, it cannot be divided, and all information about its author, buyer and all transactions with it is securely stored in the blockchain.</p>

        <p>The interface functionality allows people to get familiar with NFT in detail and buy for their own purposes. NFT marketplace where you can buy different products with cryptocurrency, starting with domain names and finishing with works of art.</p> 

        

        <h3>Template features</h3>
        <ul>
          <li>Build on React Platform</li>
          <li>1 Unique Home Versions</li>
          <li>Used Swiper Slider</li>
          <li>Responsive Layout</li>
          <li>Dynamic Blog</li>
          <li>Disqus Comment</li>
          <li>Dynamic Service Page</li>
          <li>Based on Bootstrap</li>
          <li>Working Getform Contact Form</li>
          <li>Google Font</li>
          <li>Fully compatible for all major browsers such as Firefox, Safari, Chrome, Vivaldi, Microsoft Edge</li>
          <li>Well Documented</li>
          <li>Made with SASS(SCSS)</li>
          <li>100% valid W3 web standards.</li>
          <li>Beautiful and Unique Design</li>
          <li>Life Time Free Update</li>
          <li>Amazing 5 stars support</li>
          <li>Best Developer Experience</li>
          <li>and Much More…</li>
        </ul>
        
      </div>
      <div class="content-section" id="filesincluded">
        <h3>Files Included</h3>
        <ul>
          <li>Documentation</li>
          <li>Template Files - <strong>(buznex-tf-react-v1-downloadable.zip)</strong></li>
        </ul>
        <a class="popup_image" data-fancybox="install-file" href="images/installation/1.png"><img
            src="images/installation/1.png" /></a>
      </div>
      <div class="content-section" id="install-steps">
        <h3>Node.js and Yarn</h3>
        <p>
          Your computer must have installed nodejs and yarn to run this
          template. You can download Node.js from
          <a href="https://nodejs.org">https://nodejs.org</a> and yarn from
          <a href="https://yarnpkg.com/lang/en/docs/install/">https://yarnpkg.com/lang/en/docs/install/</a>
          . NPM comes bundled with Node.js
        </p>
        <br />
        <a class="popup_image" data-fancybox="install-file" href="images/installation/6.png"><img
            src="images/installation/6.png" /></a>
        <br />
        <br />
        <br />
        <a class="popup_image" data-fancybox="install-file" href="images/installation/7.png"><img
            src="images/installation/7.png" /></a>
        <br />
        <br />
        <h3>Setup Template</h3>
        <p>
          If you have purchased the our web app template, you'll be able to find the latest version of template. Extract the downloaded folder.
        </p>
        <br />
        <br />
        <h4>1- Open terminal and go to the root of downloaded project.</h4>
        <h4>2- Install node modules / libraries</h4>
        <code>npm install</code>

        <h4>3- Run the Project</h4>
        <p>
          Run <code>npm run dev</code> from the root of your project to
          start a dev server. Navigate to
          <a href="http://localhost:3000/">http://localhost:3008/</a>. The app
          will automatically reload if you change any of the source files.
        </p>

        <br />
        
        <br />
      </div>
      <div class="content-section" id="root-folder-structure">
        <h3>Root Folder Structure</h3>
        <br />
        <br />
        <a class="popup_image" data-fancybox="install-file" href="images/folder-structure/1.png"><img
            src="images/folder-structure/1.png" /></a>
        <br />
        <br />
      </div>
      <div class="content-section" id="public-folder-structure">
        <h3>Public Folder Structure</h3>
        <a class="popup_image" data-fancybox="install-file" href="images/folder-structure/2.png"><img
            src="images/folder-structure/2.png" /></a>
        <br />
        <br />
      </div>
      <div class="content-section" id="src-folder-structure">
        <h3>Src Folder Structure</h3>
        <a class="popup_image" data-fancybox="install-file" href="images/folder-structure/3.png"><img
            src="images/folder-structure/3.png" /></a>
        <br />
        <br />
      </div>
      
      <div class="content-section" id="logo-change">
        <h3>How to change Logo?</h3>
        <br />
        <br />
        <a class="popup_image" data-fancybox="install-file" href="images/customization/logo.png"><img
            src="images/customization/logo.png" /></a>
        <br />
        <br />
      </div>
      <div class="content-section" id="content-change">
        <h3>How to Change Content and Images?</h3>
        <p>
          You can change object data easily (Dynamic Sections : Hero sliders,
          feature icons etc.) <strong>Path:</strong> exomac/src/data folder
        </p>
        <br />
        <br />
        <a class="popup_image" data-fancybox="install-file" href="images/customization/data.png"><img
            src="images/customization/data.png" /></a>
        <br />
        <br />
      </div>
      <div class="content-section" id="contact-change">
        <h3>How to Contact Form Url?</h3>
        <p>
          You can pass Contact Form URL as a prop in ContactFrom component.
        </p>
        <br />
        <br />
        <a class="popup_image" data-fancybox="install-file" href="images/customization/contactform.png"><img
            src="images/customization/contactform.png" /></a>
        <br />
        <br />
      </div>
        
    </div>
  </div>
  <!-- body-wrapper -->
  <script type="text/javascript" src="assets/jquery.js"></script>
  <script type="text/javascript" src="assets/bootstrap.min.js"></script>
  <script type="text/javascript" src="assets/jquery.fancybox.min.js"></script>
  <script type="text/javascript" src="assets/script.js"></script>
</body>

</html>
