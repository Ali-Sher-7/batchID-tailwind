"use client";

import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
// import Navbar from "./assets/Navbar";
// import Footer from "./assets/Footer";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
// import { Images } from "../../public/images";
import Link from "next/link";

const LandingPage = () => {
  const [isClick, setIsClick] = useState(false);
  const toggle = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <section className="Navbar py-2">
        <nav className="items-center">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link className="navbar-brand " href="#">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block items-center">
                <div className="ml-4 flex items-center space-x-4">
                  <ul className="navUl flex mb-0">
                    <li className="flex items-center">
                      <Link href="/" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link href="/" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        className="nav-link bg-black m-0 px-4 py-2  text-white rounded text-center"
                        href="#"
                      >
                        Sign In
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="inline-flex items-center jutify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset "
                  onClick={toggle}
                >
                  {isClick ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-justify"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isClick && (
            <div className="md:hidden">
              <div className=" pt-2 pb-1 space-y-1">
                <ul className="navUl pl-6">
                  <li className="flex items-center mb-2">
                    <Link href="/" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="flex items-center mb-2">
                    <Link href="/" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="flex items-center ">
                    <Link
                      className="nav-link bg-black m-0 px-4 py-2  text-white rounded text-center"
                      href="#"
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </section>
      <section className="info">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-6 col-sm-6 d-flex align-items-center p-0">
              <div className="card border-0 bg-transparent m-0 p-0">
                <div className="card-body p-0">
                  <h1 className="">
                    Batch<span>ID</span>
                  </h1>
                  <p className="card-text">
                    Revolutionize your dental clinic <br />
                    with flexible batch number management.
                  </p>
                  <Link
                    href="/"
                    className="btn bg-black text-white infoLink px-4 py-3 mt-4"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6  d-flex justify-content-end p-0 infoImgDiv">
              <Image
                src="/images/infoImg.png"
                width={800}
                height={800}
                className="infoImg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="solForDentalClinic">
        <div className="container-fluid p-0">
          <div className="row w-100">
            <div className="col-lg-12">
              <h1 className=" text-center">
                BATCHID IS THE ULTIMATE SOLUTION FOR YOUR DENTAL CLINIC
              </h1>
              <p className=" text-center">
                With our app, you can easily scan and manage batch numbers for
                all
                <br /> materials used in the treatment rooms.
              </p>
            </div>
            <div className="col-lg-12">
              <div className="w-100 h-100 d-flex justify-content-center pt-5">
                <Image
                  src="/images/secondSecImg.png"
                  width={800}
                  height={800}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="batchIdApp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 d-flex mobileImgDiv">
              <Image
                src="/images/thirdSecImg.png"
                alt="..."
                className="mobileimg"
                width={800}
                height={800}
              />
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-end mt-4">
              <div>
                <div>
                  <h1>
                    Batch<span>ID</span> APP
                  </h1>
                  <p>EFFECTIVE HANDLING OF MATERIALS</p>
                </div>
                <div>
                  <ul className="">
                    <li>
                      <div className="d-flex">
                        <div className=" pt-3">
                          <Image
                            src="/images/greaterThan.png"
                            className="greaterthan"
                            alt="..."
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="w-100">
                          Our app enables quick and easy batch number scanning
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className=" pt-3">
                          <Image
                            src="/images/greaterThan.png"
                            className="greaterthan"
                            alt="..."
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="w-100">
                          Ensuring accurate registration and
                          <br /> tracking
                        </div>
                      </div>
                    </li>

                    <li className="lastLi">
                      <div className="d-flex">
                        <div className=" pt-3">
                          <Image
                            src="/images/greaterThan.png"
                            className="greaterthan"
                            alt="..."
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="w-100">
                          This reduces the risk of errors and saves valuable
                          time for your staff
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="optimaizAndStreamline">
        <div className="container-fluid">
          <div className="row pb-4">
            <div className="col-md-12 text-center">
              <h1>BatchID- OPTIMIZE AND STREAMLINE</h1>
              <p>
                Discover how BatchID can lift your clinic to new heights and
                guarantee the
                <br /> highest quality and safety for your patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="devClinic">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 h-75">
              <div className="row">
                <div className="col-md-12">
                  <div className="card border-0 bg-transparent">
                    <div className="d-flex toStart">
                      <Image
                        src="/images/secureData.png"
                        className="devClinic-card-img "
                        alt="..."
                        width={800}
                        height={800}
                      />
                    </div>
                    <div className="card-body py-0">
                      <h5 className="card-title d-flex toStart">SECURE DATA</h5>
                      <p className="card-text d-flex toStart">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting indus ideas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card border-0 bg-transparent">
                    <div className="d-flex  toStart">
                      <Image
                        src="/images/fullyfunction.png"
                        height={800}
                        width={800}
                        className="devClinic-card-img "
                        alt="..."
                      />
                    </div>
                    <div className="card-body py-0">
                      <h5 className="card-title d-flex toStart">
                        FULLY FUNCTIONAL
                      </h5>
                      <p className="card-text d-flex toStart">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting indus ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center h-75">
              <div className="h-75">
                <Image
                  src="/images/fourthSecCenterImg.png"
                  height={1000}
                  width={1000}
                  alt="..."
                  className="devClinicImg"
                />
              </div>
            </div>
            <div className="col-lg-4 h-75">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="card border-0 bg-transparent">
                    <div className="lastColImg">
                      <Image
                        src="/images/support.png"
                        height={800}
                        width={800}
                        className="devClinic-card-img "
                        alt="..."
                      />
                    </div>
                    <div className="card-body py-0">
                      <h5 className="card-title lastColH">24/7 SUPPORT</h5>
                      <p className="card-text lastColP">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting indus ideas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="card border-0 bg-transparent">
                    <Image
                      src="/images/clinic.png"
                      height={800}
                      width={800}
                      className="devClinic-card-img "
                      alt="..."
                    />

                    <div className="card-body py-0">
                      <h5 className="card-title">CLINIC MANAGMENT</h5>
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting indus ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="helped">
        <div className="container">
          <div className="row pt-4 helpedRow">
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center">
              <div>
                <h1 className="text-center">+12K</h1>
                <p className="text-end">HELPED XX</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center">
              <div>
                <h1 className="text-center">84</h1>
                <p className="text-center">HELPED XX</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center">
              <div>
                <h1 className="text-center">3.07</h1>
                <p className="text-center">HELPED XX</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-center">
              <div>
                <h1 className="text-center">24H</h1>
                <p className="text-center">HELPED XX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container-fluid ">
          <div className="bg ">
            <div className="container mb-5 ">
              <h2 className="text-center">WHAT OUR CUSTOMER SAY</h2>

              <p className="text-center">
                Key patient reviews who have helped us create the impact that we
                have today
                <br /> being on the integral part of our journey
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <Carousel interval={2000} pause={false}>
                  <Carousel.Item>
                    <div className="d-flex justify-content-center">
                      <div className=" w-75 reviewMain">
                        <div className="d-flex justify-content-center mb-4">
                          <Image
                            src="/images/stars.png"
                            height={800}
                            width={800}
                            alt="..."
                            className="star"
                          />
                        </div>
                        <p className="text-center">
                          ‍Since we implemented BatchID in our clinic, our
                          handling of materials has become significantly
                          smoother. The app makes it easy to scan and record
                          batch numbers, saving us tons of time and reducing the
                          chance of errors. Our dentists and coordinators are
                          very satisfied with how user-friendly and efficient
                          the app is.
                        </p>
                        <h3 className="text-center">
                          ~ Dr. Anna Svensson, Clinic Coordinator
                        </h3>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 reviewImgDiv">
                      <Image
                        src="/images/review.png"
                        height={800}
                        width={800}
                        alt="..."
                        className="reviewImg"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="d-flex justify-content-center">
                      <div className="w-75 reviewMain">
                        <div className="d-flex justify-content-center mb-4">
                          <Image
                            src="/images/stars.png"
                            height={800}
                            width={800}
                            alt="..."
                            className="star"
                          />
                        </div>

                        <p className="text-center">
                          ‍Since we implemented BatchID in our clinic, our
                          handling of materials has become significantly
                          smoother. The app makes it easy to scan and record
                          batch numbers, saving us tons of time and reducing the
                          chance of errors. Our dentists and coordinators are
                          very satisfied with how user-friendly and efficient
                          the app is.
                        </p>
                        <h3 className="text-center">
                          ~ Dr. Anna Svensson, Clinic Coordinator
                        </h3>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 reviewImgDiv">
                      <Image
                        src="/images/review.png"
                        height={800}
                        width={800}
                        alt="..."
                        className="reviewImg"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="d-flex justify-content-center">
                      <div className="w-75 reviewMain">
                        <div className="d-flex justify-content-center mb-4">
                          <Image
                            src="/images/stars.png"
                            height={800}
                            width={800}
                            alt="..."
                            className="star"
                          />
                        </div>

                        <p className="text-center">
                          ‍Since we implemented BatchID in our clinic, our
                          handling of materials has become significantly
                          smoother. The app makes it easy to scan and record
                          batch numbers, saving us tons of time and reducing the
                          chance of errors. Our dentists and coordinators are
                          very satisfied with how user-friendly and efficient
                          the app is.
                        </p>
                        <h3 className="text-center">
                          ~ Dr. Anna Svensson, Clinic Coordinator
                        </h3>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 reviewImgDiv">
                      <Image
                        src="/images/review.png"
                        height={800}
                        width={800}
                        alt="..."
                        className="reviewImg"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="getStarted">
        <div className="container-fluid">
          <div className="text-center">
            <h1 className="pb-5">READY TO GET STARTED WITH BATCHID?</h1>
            <Link
              href="/"
              className="bg-black text-white py-3 px-4 text-decoration-none "
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      <section className="newsletter ">
        <div className="container ">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-center">SUBSCRIBE TO</h6>
              <h5 className="card-title text-center">Newsletter</h5>

              <p className="card-text text-center mt-4">
                Keep up with our latest news and events. Subscribe to our
                newsletter.
              </p>
              <div className=" text-center mt-3">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="py-3 mr-5"
                />
                <button className="btn py-3 px-5 shadow"> Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className=" border-0 bg-black text-white text-center py-5 Foooter">
          <Link href="/" className="text-decoration-none">
            <h2 className="text-white">
              Batch<span>ID</span>
            </h2>
          </Link>

          <div className="card-body pt-0">
            <p className="card-text">WITH ALL RIGHTS RESERVED</p>
            <div className="d-flex justify-content-center">
              <Link href="/">
                <Image
                  src="/images/camra.png"
                  height={800}
                  width={800}
                  className="footerImg"
                  alt="..."
                />
              </Link>

              <Link href="/" className="mx-4">
                <Image
                  src="/images/facebook.png"
                  height={800}
                  width={800}
                  className="footerImg"
                  alt="..."
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/twitter.png"
                  height={800}
                  width={800}
                  className="footerImg"
                  alt="..."
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
