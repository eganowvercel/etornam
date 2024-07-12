'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { MdCancel } from "react-icons/md";
import axios from 'axios'

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        padding: "0", // Remove padding
        backgroundColor: "transparent", // Make background transparent
        border: "none", // Remove border
        overflow: "hidden", // Ensure no overflow
        zIndex: 999999,
        width: "100%", // Adjust as necessary
        height: "90%", // Adjust as necessary
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent background
        zIndex: 999999, // Higher zIndex value for overlay
    },
};


function Donate() {
    const [amount, setAmount] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkoutUrl, setCheckoutUrl] = useState('');
    const [currency, setCurrency] = useState('GHS');
    const [loading, setLoading] = useState(false)

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const BASE_URL = 'https://checkout.eganowpay.com'

    const handleAmountClick = (value) => {
        setAmount(value);
    };

    useEffect(() => {
        const handlePaymentMessage = (event) => {
          if (event.data === "successful") {
            router.push("/?status=success");
          } else if (event.data === "failed") {
            router.push("/?status=failed");
          }
        };
        window.addEventListener("message", handlePaymentMessage);
    
        return () => {
          window.removeEventListener("message", handlePaymentMessage);
        };
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const postData = {
            username: process.env.NEXT_PUBLIC_USERNAME,
            password: process.env.NEXT_PUBLIC_PASSWORD,
            x_auth: process.env.NEXT_PUBLIC_X_AUTH,
            amount: amount,
            callback_url: "http://localhost:3001",
            currency,
            payment_view_mode: "MODAL",
            allowed_payment_method: "BOTH"
        }
        try {
            const sendRequest = await axios.post(`${BASE_URL}/api/credentials`, postData)
            if (sendRequest?.data?.public_key) {
                const url = `${BASE_URL}/${sendRequest.data.public_key}`;
                setCheckoutUrl(url);
                openModal()
                setLoading(false)
            } else {
                toast.warning('Something went wrong , Retry')
            }
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
        // console.log(`Amount: GHS ${amount}, Full Name: ${fullName}, Phone Number: ${phoneNumber}`);
    };






    return (
        <div className="bg-blue-900 lg:p-32 donate-main-bg" id='donate'>
            <div className="container mx-auto bg-white p-8 rounded-lg overflow-hidden donate-bg shadow-xl">
                <div className="grid lg:grid-cols-2 gap-8 ">
                    {/* Donation Form Section */}
                    <div className="lg:order-2 flex flex-col justify-center " data-aos="fade-up" data-aos-duration="2000">
                        <h2 className="text-3xl font-bold text-red-700 mb-4 text-start">DONATE TODAY</h2>
                        <div className="grid md:grid-cols-4 grid-cols-3 gap-4 mb-4 w-full">
                            {[20, 50, 100, 150, 200, 250, 300, 350].map((value) => (
                                <button
                                    key={value}
                                    onClick={() => handleAmountClick(value)}
                                    className="border bg-white border-blue-900 px-4 font-bold py-2 rounded hover:bg-blue-900 hover:text-white"
                                >
                                    GHS {value}
                                </button>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit} className=' w-full'>
                            <div className='w-full flex gap-5 flex-wrap md:flex-nowrap'>
                                <div className="flex w-full mb-4">
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Full Name"
                                        className="border border-green-600 px-4 py-2 rounded w-full"
                                        required
                                    />
                                </div>
                                <div className="flex w-full mb-4">
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder="Phone Number"
                                        className="border border-green-600 px-4 py-2 rounded w-full"
                                        required
                                    />
                                </div>
                            </div>

                            {/* DONATE BUTTON AND AMOUNT INPUT */}
                            <div className="flex w-full mb-4">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Enter Amount"
                                    className="border border-green-600 px-4 py-2 rounded-l w-full"
                                    required
                                />
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className="bg-blue-900 text-white px-4 py-2 rounded-r"
                                >
                                    {
                                        loading ? 'Processing...' : 'Donate'
                                    }
                                </button>
                            </div>

                        </form>
                    </div>
                    {/* Image Section */}
                    <div className="lg:order-1 overflow-hidden flex justify-center items-center w-full max-h-[900px] bg-red-400 rounded-lg"  data-aos="fade-right" data-aos-duration="2000">
                        <Image
                            width={10000}
                            height={100}
                            src="/images/2.jpeg"
                            alt="Ready to Rebuild"
                            className="rounded-lg object-contain"
                        />
                    </div>
                </div>
            </div>





            {/* MODAL FOR PAYMENT */}
            <div>
                <Modal
                    className=""
                    onClick={() => alert("sdf")}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className=" text-center grid place-content-center pb-4">
                        <MdCancel
                            onClick={closeModal}
                            color='red'
                            size={24}
                            className=" text-center shadow-lg  modal-close "
                        />
                    </div>
                    <iframe
                        src={checkoutUrl}
                        style={{
                            width: "100%",
                            height: "100%",
                            margin: "0",
                            backgroundColor: "transparent", // Semi-transparent background
                        }}
                    ></iframe>
                </Modal>
            </div>
        </div>
    );
}

export default Donate;
